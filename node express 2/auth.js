// __tests__/auth.test.js
const { authUser } = require('../middleware/auth');
const jwt = require('jsonwebtoken');

describe('authUser middleware', () => {
  it('should set curr_username and curr_admin if the token is valid', () => {
    const token = jwt.sign({ username: 'testUser', admin: true }, 'secretKey');
    const req = { body: { _token: token }, query: {} };
    const res = {};
    const next = jest.fn();

    authUser(req, res, next);

    expect(req.curr_username).toBe('testUser');
    expect(req.curr_admin).toBe(true);
    expect(next).toHaveBeenCalled();
  });

  it('should return unauthorized (status 401) if the token is invalid', () => {
    const invalidToken = 'invalidToken';
    const req = { body: { _token: invalidToken }, query: {} };
    const res = {};
    const next = jest.fn();

    authUser(req, res, next);

    expect(req.curr_username).toBeUndefined();
    expect(req.curr_admin).toBeUndefined();
    expect(next).toHaveBeenCalledWith(expect.objectContaining({ status: 401 }));
  });
});

// middleware/auth.js
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Middleware for handling req authorization for routes. */

/** Authorization Middleware: Requires user is logged in. */
function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */
function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/
function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      let payload = jwt.verify(token, SECRET_KEY); // Use verify instead of decode
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};
