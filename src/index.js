// Import necessary modules and constants
const { app, PORT } = require("./server");

// Starting the server and listening on the specified host and port
app.listen(PORT,  () => {
  // function will be executed when the server starts successfully
  console.log(`
  Server is running 
    `);
});
