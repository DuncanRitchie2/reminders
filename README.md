# Reminders App

We developed this a team of three (Duncan Ritchie, Stefan Gouldson, and Tom Ormiston) in five days, to grow skills in Node.js, Express.js and MySql.

The app allows individual users to sign in (or sign up, then sign in) with a dashboard showing their list of reminders and their deadlines.

Reminders can be added, edited, and deleted; and the user can sign out (go back to the sign-in page, index.html).


#### Development Process
We spent several hours planning how the app should work from the following perspectives:

* Endpoints including:
    /register  /signin  /readreminder  /addreminders   /deletereminders   /editreminders   .

* User journey through the UI.

* Database tables and query types.

* What data should be sent for: addReminder, readReminder, deleteReminder, editReminder.

We split into three initial development areas: the database, the server, and the front-end. These correspond to the JavaScript files app.js, server.js, and client.js.

We decided that, because I (Duncan) was the most experienced team-member with regards to Git and GitHub, I would be the project manager, and all changes to the remote master branch had to be approved by me.

Because I'm mean (or, at least, because my teammates were eager to practise their back-end skills), I gave Stefan responsibility for creating the database and the queries relating to it, and Tom responsibility for the server code as well as the fetch requests on the client-side. To test the fetch requests independently of the front-end code being written by me and Stefan, Tom made a simple test HTML page (indextest.html) to initiate hardcoded requests from the client-side on a button click.

I meanwhile made the dashboard HTML page (dashboard.html), with dynamically created DOM elements according to the list of reminders retrieved from the database.

Then, Stefan made the front page (index.html), from which the user can sign up and sign in. 

Once the initial code-base was formed and modules tested, we worked even more closely together, to ensure all the code smoothly worked across the different parts, iron out any wrinkles, and add a bit more functionality (such as the sign-out button on the dashboard, which takes the user back to the sign-in page).

We also polished up the UI with improved CSS. We used media queries to make sure that our app would display well on different screen sizes.



#### Sign-in / Sign-up

<img src="https://github.com/tomsstuff101/reminders/blob/master/README-images/reminder-register.png" alt="sign in and sign up" width="800px" height="auto">



#### New user

<img src="https://github.com/tomsstuff101/reminders/blob/master/README-images/reminder-signin.png" alt="register new user" width="800px" height="auto">


#### Desktop Dashboard

<img src="https://github.com/tomsstuff101/reminders/blob/master/README-images/reminder-desktop.png" alt="dashboard for desktop" width="800px" height="auto">



#### Mobile Dashboard

<img src="https://github.com/tomsstuff101/reminders/blob/master/README-images/reminder-mobile.png" alt="dashboard for mobile" width="400px" height="auto">



### Setup for running on localhost

* Git clone from Github.

```
$ git clone https://github.com/DuncanRitchie2/reminders.git
```

* Install NPM dependencies.

``` $ npm i ```

* check if mysql is installed

``` $ mysql --version ```

If not installed then install and make sure that the MySql password is the same as the password in the app.js MySql setup object (line 12).

Also make sure that the server is started...

eg. for Mac

``` $ sudo /usr/local/mysql/support-files/mysql.server start ```

You should now have a MySql prompt i.e.

``` mysql > ```

#### Create the database

In the MySql prompt, paste the schema.sql code ie.

``` 

CREATE DATABASE reminder_app 
.
.
.
INSERT ....

```
Now check that the database is installed

```
mysql > SHOW DATABASES;

```

and choose the reminder app database

```
mysql > USE reminder_app;

```

and then have a look at one of the tables e.g.

```

mysql > SELECT * FROM users;

```

Should get a table that looks like

```
mysql > SELECT * FROM users;
+----+--------------+-----------------------+---------------------+
| id | username     | email                 | date_created        |
+----+--------------+-----------------------+---------------------+
|  5 | ben          | benjamin@gmail.com    | 2019-10-03 10:40:14 |
|  2 | dan21        | dan21@legend.com      | 2019-10-03 10:40:14 |
| 46 | fffff        | fffff@ee.com          | 2019-10-03 13:41:44 |
| 47 | yyyyy        | yyyyy@yy.com          | 2019-10-03 14:15:45 |
|  4 | mike         | mike@kgmail.com       | 2019-10-03 10:40:14 |
| 44 | qqqq         | NULL                  | 2019-10-03 13:21:23 |
|  1 | stefanG      | stefan@codenation.com | 2019-10-03 10:40:14 |
|  3 | tom          | tom@CN.com            | 2019-10-03 10:40:14 |
| 45 | wwwww        | NULL                  | 2019-10-03 13:24:02 |
|  6 | foobar       | foo@barbar.com        | 2019-10-03 11:13:06 |
+----+--------------+-----------------------+---------------------+

```

Open up another bash shell

```
$ node server.js
```

this should give

```
listening to localhost:3019

```


Now open up a browser at localhost:3019

and the sign-in screen should be displyed with a number of users e.g. 10 shown

<img src="https://github.com/tomsstuff101/reminders/blob/master/README-images/reminder-register.png" alt="sign in and sign up" width="500px" height="auto">




### GitHub Forks

This repo is forked by my teammates Tom and Stefan:
* https://github.com/tomsstuff101/reminders
* https://github.com/stefangouldson/reminders
