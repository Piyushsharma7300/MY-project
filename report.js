const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progress = document.querySelector(".progress");

let currentStep = 0;
steps[currentStep].classList.add("active");

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const inputs = steps[currentStep].querySelectorAll("input, textarea, select");
        for (let input of inputs) {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                alert("Please fill all required fields!");
                return;
            }
        }

        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
            updateProgress();
        }
    });
});

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

function updateProgress() {
    progress.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
}

document.getElementById("reportForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Report Submitted Successfully!");
    location.reload();
});