# EPL343.Winter18.Team7

In order to go to the main page you have to open 'index.html' file

Accounts Functionalities

You can create a new account through Sign Up form. When a new account is created, its type is Customer by default. Only Manager account can change the type of accounts from Customer to Employee.

Manager account

Username: Manager
Password:12345678
Manager account is normally created by default. In this prototype in order to have Manager account created just
put a wrong username and password at the login page. 
Manager can change the type of other accounts from Customer to Employee. In order to do this from manager's account task bar, you must put the username of a customer account in the text box which contains the text 'Account's username' and click the button 'Change account's type from customer to employee'. 


Temporary Database

Local Storage function of Javascript is used as temporary Database for this prototype. It contains a hashtable which we take advantage of it by storing account's informations.
Database structure: KEY,VALUE 
Username, Passsword /Email'Username', Email /Name'Username', Name /Surname'Username', Surname /Telephone'Username', Telephone
