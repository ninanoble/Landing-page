// Select the canvas element using its ID
var ctx = document.getElementById('performanceChart').getContext('2d');

// Create a new Chart instance
var performanceChart = new Chart(ctx, {
    type: 'bar',  // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],  // Labels for the X-axis
        datasets: [{
            label: 'Performance',  // Name of the dataset
            data: [12, 19, 3, 5, 2, 3],  // Values for each label
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)'  // Background color for the bars
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)'  // Border color for the bars
            ],
            borderWidth: 1  // Thickness of the border
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  // Start Y-axis at zero
            }
        }
    }
});
