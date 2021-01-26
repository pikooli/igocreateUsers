# igocreateUsers

User creation interface make with the [Igo](https://github.com/igocreate/igo). 

````
  You need to have a mysql running on port 3306.
  You can setup the user of mysql in the env MYSQL_USERNAME and password in env MYSQL_PASSWORD
  Need the igo client to initialize the database "npm i -g igo"
  Then run "igo db migrate"
  npm i && npm start
````

Route : 
````
  "/"           : home route, it display a form for creating user
  "/users"      : list all user in the database, allow you to see user details by clicking on them
  "/users/:id"  : page with user details, you can edit or delete a user here
`````
