const inputtask = document.getElementById("taskInput");
const addtaskbutt = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const generateRandomTaskButton = document.getElementById("generateRandomTaskButton");
const randomTaskOutput = document.getElementById("randomTaskOutput");
const timerr = document.getElementById("timerDisplay");
const startstopbutton = document.getElementById("startStopButton");
const motivsection = document.getElementById("motivationSection");

let tasks = [];
let timerInterval;
let seconds = 1500;

addtaskbutt.addEventListener("click", () => {
    const taskText = inputtask.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        inputtask.value = "";
    }
});

generateRandomTaskButton.addEventListener("click", () => {
    if (tasks.length > 0) {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        randomTaskOutput.textContent = tasks[randomIndex];
    } else {
        randomTaskOutput.textContent = "No tasks available. Add some first!";
    }
});

startstopbutton.addEventListener("click", () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        motivsection.classList.add("hidden");
        startstopbutton.textContent = "Start Timer 🕒";
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        startstopbutton.textContent = "Stop Timer ⏹️";
        motivsection.classList.remove("hidden");
    }
});

function updateTimer() {
    if (seconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        motivsection.classList.add("hidden");
        startstopbutton.textContent = "Start Timer 🕒";
        alert("Time's up! Take a break, kitty!");
    } else {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerr.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}
