async function queryLocation() {
    const location = document.getElementById('locationInput').value;
    const resultElement = document.getElementById('result');

    // Replace this URL with the actual URL of your Flask backend hosted on Heroku, Render, or AWS
    const backendUrl = 'https://your-backend-url.com/query';

    try {
        // Make a GET request to the backend with the location as a query parameter
        const response = await fetch(`${backendUrl}?location=${encodeURIComponent(location)}`);
        
        if (response.status === 200) {
            const data = await response.json();
            resultElement.textContent = `Address: ${data.Address}, Priority: ${data.Priority}`;
        } else if (response.status === 404) {
            resultElement.textContent = "Location not found.";
        } else {
            resultElement.textContent = "An error occurred while fetching the information.";
        }
    } catch (error) {
        resultElement.textContent = "Error connecting to the server.";
    }
}
