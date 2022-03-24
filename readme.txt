How to install the system and the  database :
1) Use MySQl or PHPMyAdmin on WAMP/MAMP... like you want 
2) Create a database db_todolist
3) Change the configuration of the database in the file that is in WebProject/server/Config/config.js with the information of the connexion of your database
4) Go in the terminal and put you in the server folder
5) Write and run the command : node server.js
6) Execute the database.sql into your table created todolists in your database db_todolist
7) Open a new terminal and put you in the project-vue folder
8) Write and run the command : npm run serve
9) Then you can go on your browser with the link that is in you terminal (example : http://localhost:8081/)
10) you must have like in the whatToHave.png file