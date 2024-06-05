let count = true;
let hiddenNavDiv = document.querySelector(".my-nav-inner div");
let navbarParent = document.querySelector(".my-nav");
let navBtn = document.querySelector(".nav-btn");

const navBarShowHide = () => {
	if (count) {
		setTimeout(() => {
			hiddenNavDiv.style.transform = 'scale(1)';
		}, 100);
		navbarParent.style.height = '18rem';
		count = false;
	}

	else {
		hiddenNavDiv.style.transform = 'scale(0)';
		setTimeout(() => {
			navbarParent.style.height = '6rem';
		}, 50);
		count = true;
	}
};

navBtn.addEventListener("click" , navBarShowHide);
// document.body.style.background = 'black'