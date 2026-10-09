
const timenow = new Date();
const now = timenow.toLocaleDateString();
const clockElement = document.getElementById('clock');
clockElement.innerHTML = now;
