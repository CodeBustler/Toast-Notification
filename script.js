let toastContainer = document.querySelector(".toasts-container");
let successMsg = "<i class='fa-solid fa-circle-check'></i> Success";
let failureMsg = "<i class='fa-solid fa-circle-xmark'></i>Failure";
let alertMsg = "<i class='fa-solid fa-circle-exclamation'></i>Alert!";
let btns = document.querySelectorAll("button");
let waitMessage = document.querySelector(".wait");

function toastNoti(message, type) {
	if (toastContainer.children.length < 3) {
		let toast = document.createElement("DIV");
		toast.innerHTML = message;
		toast.classList.add(type);
		toastContainer.appendChild(toast);

		setTimeout(() => {
			toast.remove();
		}, 5000);
		console.log();
	} else {
		btns.forEach((e) => {
			e.setAttribute("disabled", "");
		});
		setTimeout(() => {
			btns.forEach((e) => {
				e.removeAttribute("disabled");
			});
		}, 4000);
	}
}
