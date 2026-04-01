// Import the readline module to handle user input/output in the terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// List of available rides used for validation
const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger bumper cars"];

function selectThemeParkRide() {
    // Callback function that runs after the user provides input
    function displayRideOptions(rideName) {
        
        // Validate if the user's input exists in our themeParkRides array
        if (!themeParkRides.includes(rideName)) {
            console.log("Error: Invalid theme park ride!");
        } else {
            // Create a ride object to store the name and specific description
            const ride = { name: rideName };

            // Assign descriptions based on the specific ride selected
            if (ride.name === "Flatacoaster") {
                ride.description = "Flatacoaster is the tallest and quickest roller coaster in the world!";
            } else if (ride.name === "Flata-Ferris Wheel") {
                ride.description = "Enjoy a relaxing ride and some lovely views on the Flata-Ferris Wheel!";
            } else if (ride.name === "Flatburger bumper cars") {
                ride.description = "Ride in our Flatburger bumper cars! You even get a free burger!";
            }

            // Output the final selection and description to the console
            console.log(`You selected the ${ride.name} ride! Description: ${ride.description}`);
        }

        // Properly terminate the readline interface to return to the terminal prompt
        readline.close();
    }

    // Display instructions and capture user input
    readline.question("Please select a theme park ride:\n\n- Flatacoaster\n- Flata-Ferris Wheel\n- Flatburger bumper cars\n > ", displayRideOptions); 
}

console.log('Welcome to Flatironland!');
selectThemeParkRide();
