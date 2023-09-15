const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = (time.getHours() + 24) % 12 || 12;
	const minutes = time.getMinutes();
	const year = time.getFullYear();

	timeEl.textContent = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`
	dateEl.textContent = `${days[day]}, ${months[month]} ${date} , ${year}`
}
setTime();
setInterval(setTime, 1000);