window.onload = function () {
    // Create calculator container
    const calculator = document.createElement("div");
    calculator.id = "calculator";
    document.body.appendChild(calculator);

    // Create display
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.disabled = true;
    calculator.appendChild(display);

    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    buttons.forEach(value => {
        let btn = document.createElement("button");
        btn.innerHTML = value; 
        btn.dataset.value = value;
        calculator.appendChild(btn);
    });

    let currentExpression = '';

    calculator.addEventListener('click', function (e) {
        const btnValue = e.target.dataset.value;
        if (!btnValue) return;

        // If it's a number, decimal, or operator
        if (btnValue.match(/[0-9.]|[\/*+-]/)) {
            currentExpression += btnValue;
            display.value = currentExpression;
        } 

        // Handle equals sign
        else if (btnValue === '=') {
            try {
                let result = eval(currentExpression);
                display.value = result;
                currentExpression = result.toString();
            } catch (err) {
                display.value = "Error";
                currentExpression = '';
            }
        } 

        // Handle clear input
        else if (btnValue === 'C') {
            currentExpression = '';
            display.value = '';
        }
    });
};
