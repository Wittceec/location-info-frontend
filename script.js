// Replace this URL with the actual URL of your Flask backend hosted on Heroku, Render, or AWS
const backendUrl = 'https://your-backend-url.com/query';

try {
    // Make a GET request to the backend with the updated query parameter
    const response = await fetch(`${backendUrl}?query=${encodeURIComponent(location)}`);
    
    if (response.status === 200) {
        const data = await response.json();
        let output = '';
        data.forEach(record => {
            output += `Location: ${record.Location}, Address: ${record.Address}, Priority: ${record.Priority}\n`;
        });
        resultElement.textContent = output;
    } else if (response.status === 404) {
        resultElement.textContent = "No matching records found.";
    } else {
        resultElement.textContent = "An error occurred while fetching the information.";
    }
} catch (error) {
    resultElement.textContent = "Error connecting to the server.";
}
