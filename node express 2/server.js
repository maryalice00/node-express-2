/** Server for bank.ly. */

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
