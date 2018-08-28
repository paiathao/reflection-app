# Redux Feedback Loop

 For this project,I created a feedback form modeled after Prime's system. Feedback will be collected over 4 views, and when all steps are complete, the app will save the feedback in the database. In a separate view, a user will be able to see all the collected feedback. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: Use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
![feeling](wireframes/page-one.png)
- How well are you understanding the content?
![understanding](wireframes/page-two.png)
- How well are you being supported?
![support](wireframes/page-three.png)
- Any comments you want to leave?
![comments](wireframes/page-four.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

 When the form is complete, save the submission in the database. The user should see a submission success page.
 ![understanding](wireframes/page-five.png)

### DISPLAY FEEDBACK

Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)
