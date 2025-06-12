const logForm = document.querySelector("#log-form");

const listMood = document.querySelector("#list-mood");

const lastMood = document.querySelector("#last-mood-img");

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btnCloseModal ");
const inputModal = document.querySelector("inputModal");
const submitModal = document.querySelector(".submitModal");



logForm.addEventListener("click", (e) => {
	e.preventDefault();
	modal.style.display = "flex";
	console.log("Open Modal");

	btnCloseModal.addEventListener("click", (e) => {
        e.preventDefault()
		console.log("CLose Modal");
		modal.style.display = "none";
	});

	submitModal.addEventListener("click", (e) => {
        e.preventDefault()
		creatListeMood();
	});
});

let tabMoob = []

function creatListeMood() {
    
}
