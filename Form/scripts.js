document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture form values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let pinCode = document.getElementById('pinCode').value;
    let gender = document.getElementById('gender').value;

    let foodChoices = document.querySelectorAll('input[name="food"]:checked');
    if (foodChoices.length < 2) {
        alert('Please select at least 2 food choices.');
        return;
    }
    let foods = Array.from(foodChoices).map(food => food.value).join(", ");

    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    // Access the table and its tbody
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Create a new row
    let newRow = table.insertRow();

    // Add cells to the row and set their content to the form values
    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = address;
    newRow.insertCell(3).innerHTML = pinCode;
    newRow.insertCell(4).innerHTML = gender;
    newRow.insertCell(5).innerHTML = foods;
    newRow.insertCell(6).innerHTML = state;
    newRow.insertCell(7).innerHTML = country;

    // Clear form fields after submission
    document.getElementById('dataForm').reset();
});
