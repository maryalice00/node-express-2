### Conceptual Exercise

Answer the following questions below:

- What is a JWT? Json Web Token. URL safe way of representing claims to be transfered between two parties.

- What is the signature portion of the JWT?  What does it do? Verifies the sender of the jwt to make sure the messaged wasnt trained along the way

- If a JWT is intercepted, can the attacker see what's inside the payload? Yes 

- How can you implement authentication with a JWT?  Describe how it works at a high level. by generating a token on the server upon login. its then sent to the client and they put it in the header of the request. 

- Compare and contrast unit, integration and end-to-end tests.  unit test, test individal units or componets of a system in isolation. inegration chec if different componets work together and end to end test the entire system from start to finsih with real life scenarios. 

- What is a mock? What are some things you would mock?  its a simulated object used to mimic the behaviour of real objects. you would mock databases 

- What is continuous integration?  its a sofware develpent practice where code changes are automatiicaly built tested  and integrated into a shared rep. 

- What is an environment variable and what are they used for? outside variable that stores configuration settings. they store api keys, database connection strings and other configuration settings. 

- What is TDD? What are some benefits and drawbacks? software development approach where tests are written before the code. drawbacks are initial time investement in writing testes and the challange of maintaining tests as the codebase evolves 

- What is the value of using JSONSchema for validation? it provdes a standared for defining the struction of the data and it helps ensure consistency, provide documetaion and validates data. reducing the chance of errors. 

- What are some ways to decide which code to test? deciding if its improtant or complext, test things that are more subjected to error. 

- What does `RETURNING` do in SQL? When would you use it? returnign allows you to return the values of modified rows. you use it when you want to retrieve specific data that was affected by the databases operation. 

- What are some differences between Web Sockets and HTTP? http reqests response model and operates over tcp and its good for traditional web applictaions. Web sockets are for real time applications 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Thats a hard qustion, i like them both. I really like using flask because of python but I think I am better at express because of the javascript. 