console.log('Hello World!');

function downloadImage(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Check if the input is not empty
            const whatsNo = document.getElementById('whatsno').value.trim();
            if (whatsNo === "") {
                alert("Please enter a WhatsApp number.");
                return;
            }

            // URL of the image to download
            const imageUrl = "925.jpg"; // Replace with your image URL

            // Create an anchor element to trigger the download
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = "downloaded-image.jpg"; // Set the default file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }


function handleFormSubmission(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('downloadForm'));
    const whatsNo = formData.get('whatsno'); // Get the WhatsApp number

    // Display the entered data (optional, for debugging)
    console.log("WhatsApp Number:", whatsNo);

    // Example: You can send the form data to a server using fetch
    // fetch('/submit', {
    //     method: 'POST',
    //     body: formData
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));

    // URL of the image to download
    const imageUrl = "https://example.com/your-image.jpg"; // Replace with your image URL

    // Trigger image download
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded-image.jpg"; // Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optionally, reset the form
    document.getElementById('downloadForm').reset();
}