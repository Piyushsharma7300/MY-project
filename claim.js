const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progress = document.querySelector(".progress");

let currentStep = 0;

// Show first step
steps[currentStep].classList.add("active");

// NEXT BUTTON
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

        // Validate inputs of current step
        const inputs = steps[currentStep].querySelectorAll("input, textarea");
        for (let input of inputs) {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                alert("Please fill all required fields before continuing!");
                return;
            }
        }

        // Move to next step
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
            updateProgress();
        }
    });
});

// PREVIOUS BUTTON
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentStep > 0) {
            steps[currentStep].classList.remove("active");
            currentStep--;
            steps[currentStep].classList.add("active");
            updateProgress();
        }
    });
});

// Progress bar update
function updateProgress() {
    progress.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
}

// FORM SUBMIT
document.getElementById("claimForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Claim Submitted Successfully!");
    location.reload();
});