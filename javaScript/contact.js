var topArrow = document.querySelector('#scroll')

window.addEventListener('scroll' , function(){
    console.log(this.document.documentElement.scrollTop)
    if(this.document.documentElement.scrollTop > 190){
        topArrow.style.display= "block"
    }
    else  topArrow.style.display= "none"
})



//form validation

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_one");
    const buttonContainer = document.querySelector(".form_button"); // Select the button container
    const inputs = [
        { element: document.getElementById("input_1"), regex: /^[A-Za-z\s]+$/, errorMessage: "Name should only contain letters and spaces." },
        { element: document.getElementById("input_2"), regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errorMessage: "Please enter a valid email address." },
        { element: document.getElementById("input_3"), regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, errorMessage: "Password must be at least 8 characters long and contain letters and numbers." },
       // { element: document.getElementById("input_4"), regex: /.+/, errorMessage: "Message cannot be empty." }
    ];
    const submitButton = document.getElementById("form_button");

    submitButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission

        let hasErrors = false;
        document.querySelectorAll(".error-message").forEach(msg => msg.remove()); // Remove previous error messages

        inputs.forEach(input => {
            const value = input.element.value.trim();
            const parent = input.element.parentElement;

            if (!value) {
                hasErrors = true;
                addErrorMessage(parent, "This field is required.");
            } else if (!input.regex.test(value)) {
                hasErrors = true;
                addErrorMessage(parent, input.errorMessage);
            }
        });

        // Display the general error message if there are any errors
        let errorSummary = document.querySelector(".error-summary");
        if (hasErrors) {
            if (!errorSummary) {
                errorSummary = document.createElement("div");
                errorSummary.classList.add("error-summary");
                errorSummary.style.color = "red";
                errorSummary.style.marginTop = "10px";
                errorSummary.textContent = "One or more fields has errors.";
                buttonContainer.appendChild(errorSummary); // Append after the submit button container
            }
        } else {
            if (errorSummary) errorSummary.remove(); // Remove the error summary if previously displayed
            form.submit(); // Submit the form if no errors
        }
    });

    function addErrorMessage(parent, message) {
        const error = document.createElement("div");
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.marginTop = "5px";
        error.textContent = message;
        parent.appendChild(error);
    }
});