## Task
- Make a TODO application using vanilla HTML, CSS and JavaScript
- Follow a separation of concerns principle: HTML, CSS, and JS should be in separate files/folders
- Base of the project should be in index files (index.html for example), specific functions etc should be in named files (validation.js for example)

### Purpose: 
- Familiarize yourself with native web concepts by manually implementing state management, form validations, routing, etc
- Practice JavaScript by building custom functions that are typically handled by frameworks or libraries.

### Expected Features:
- **Mocked registration/login** using localStorage to store user data (username, password, image)
- **Basic routing**: Implement routes like /, /registration, /login, /tasks, /todo, /in-progress, /done, and potentially /:username
- **Dynamic routes**: Enable routes such as /tasks/:task-number or /tasks/task/:id to open individual tasks

### Design & Functionality Guidelines
- **Sidebar**
    - Should always be visible on larger screens
    - On smaller screens (mobile, tablet), use a responsive "burger menu" design
    - The sidebar should contain tabs: All Tasks (/tasks), To Do (/todo), In Progress (/in-progress), and Done (/done)
- **Header or Sidebar**
    - Include options to create a new task, view user profile, and log out
- **Registration Page**
    - Users should be able to enter their name, a username, a profile picture (URL), and a password
    - If no profile image is provided, display a placeholder image
    - Store the password securely by hashing it before saving
    -  Validation rules:
        - Name: No special characters allowed
        - Username: Must include only lowercase letters and numbers
        - Password: Length between 8 and 14 characters, must contain at least one letter, one number, and one special character
- **Login Page**
    - Validate the username and password against localStorage
    - If the username doesn't exist, display a message: "No user found, want to register instead?" with a link to the registration page
- **Task Management**
    - Allow users to create new tasks by entering a task name and status
    - Task cards should display the task name and status, with a button to "open details"
    - Opening details shows an extended card where users can update the task status or close the card
    - Tasks should be associated with individual users, so handle task data accordingly in localStorage
- **Optional Features**
    - *User Profile Page /:username*: Users should be able to change their username, image, and password
    - *Task Deletion*: Allow task deletion, possibly only on the extended task card view
    - *Animations*: Add smooth animations when opening/closing task cards, switching sidebar tabs, etc.
    - *TypeScript Usage*: Using TS for type safety, this would then require compiling the ts files into js before "running" the application and importing multiple js files in the HTML (not using bundlers like WebPack or Vite)

#### Useful Links:
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

[design inspiration](https://dribbble.com/shots/21673507-Task-Management-Dashboard)