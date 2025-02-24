 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	     // Check if the input is a valid positive number
    if (!isNaN(radius) && radius > 0) {
        // Calculate the area
        let area = Math.PI * Math.pow(radius, 2);

        // Display the result to the user
        alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
    } else {
        alert("Please enter a valid positive number for the radius.");
    }
}

           
}
calculateArea();
