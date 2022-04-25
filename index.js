//define currentUser with const, expect to equal Grace Hopper
const currentUser = 'Grace Hopper';
//Define welcomeMessage, expected to include currentUser 
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//Define excited welcome message, expected all caps and to include currentUser value
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;

/*shortGreeting
contains the first initial of the name stored in the 'currentUser' variable:
AssertionError: expected 'Welcome, ' to contain 'G' */





 
