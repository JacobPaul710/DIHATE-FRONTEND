# DIHATE-FRONTEND

DIHATE stands for "Do I have anything to eat?" Agile and robust, this single-page MERN-stack application can be utilized by several different user's to keep track of meals they have stored in the freezer. Using JWT auth, user's can register a new account. After creating an account, they will automatically be signed-in with that account, and can immediately begin adding new meals to their "Icebox" database. The "Icebox" database will store the meals entered by the user with foreign-keys, so that only the data relative to the user who is currently logged in, will be shown in the "Icebox" page. User's also have the ability to edit and delete meals they have previously entered into the database. User's can log-out, to switch accounts in order to render other data.  

## User Story

- AAU, I want to be able to register OR log into to my personal account from the home page.
- AAU, I expect the registration page to require an email, username, and password.
- AAU, after I sign up or log in, I should be redirected to my "inventory" page.
- AAU, I need to be able to clearly see an inventory of meals I have frozen, with the appropriate data attached (Meal name, Date, and Servings).
- AAU, I expect to navigate through my data with page navigation.
- AAU, I need to be able to add, edit, and delete new meals from the "Icebox".



## Getting Started

1. From the home page, the user can choose whether to sign-up for a new account, or log-in to an existing account. 
    
    1a. If the user chooses to create a new account, they will be redirected to a sign-up form. After submitting the sign-up form, the user will be logged into their newly created account, and redirected to their "Icebox" inventory page. 

    1b. If the user has already registered an account and chooses to log-in, upon providing the correct credentials, they will be redirected to their "Icebox" inventory page. 

2. From the "Icebox" page, the user can view their inventory of meals in order to see what they have in storage. This page will provide the name of the meal, how many servings it has left, and the date it was cooked. 

3. The user can then decide to add a new meal, edit a meal, delete a meal, or log-out of their account. 

    3a. If the user decides to add a new meal, they will click the "Add a new meal" button located in the center of the page. The user will be redirected to a form, where they can enter the name of the meal, amount of servings it contains, and the day it was cooked. Upon submission of the form, the user will be redirected to the "Icebox" page, where the newly added data is displayed. A button to return back to the "Icebox" page is provided in the case that the user changes their mind on this action.

    3b. If the user decides to edit a meal, they will click the edit button under the meal they want to edit, and will be redirected to an edit page containing a form. Here, the user can update the information on the meal. Upon submission, the data will be updated, and the user will be redirected to their "Icebox" page, where the updated data will be shown. A button to return back to the "Icebox" page is provided in the case that the user changes their mind on this action.

    3c. If the user decides to delete a meal, they will click the delete button under the meal they want to delete, and they will be redirected to a delete page. Here, the user can see the meal they are deleting from their account, and confirm the action. If the action is confirmed by clicking the delete button, the data will be deleted from the database and the user will be redirected to their "Icebox" page, where the updated data will be shown. A button to return back to the "Icebox" page is provided in the case that the user changes their mind on this action. 
    
    3d. If the user decides to log-out of their account, they will click the log-out button provided in the top right corner of the "Icebox" page. This will effectively log the user out, and redirect them back to the home page, where they initially signed-up or logged-in, and can repeat the steps starting from 1 again. 


### Technologies Used

- React
- JS-Cookie
- Moment

### Wireframe
![Alt text](<Wireframe 1.png>)
![Alt text](<Wireframe 2.png>)
![Alt text](<Wireframe 3.png>)

### Icebox

- Ability to edit (increase or decrease) the amount of servings each meal has easily from the Index page interface.
- Ability for user to delete account.
- Add 2nd field for new user sign-up that accepts password for 2nd time and compares to first password field. Includes error handling.
- Add additional error handling.
- Update, Delete, and Edit from the index page using React Context.
