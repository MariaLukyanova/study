console.log("Я учу JavaScript!");

function changeImage() {
	let image = document.getElementById("img1");

	if (image.src.match("assets/images/sky1.jpg")) {
		image.src = "assets/images/sky2.jpg";
	} else {
		image.src = "assets/images/sky1.jpg";
	}
}
