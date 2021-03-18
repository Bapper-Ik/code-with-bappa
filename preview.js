function _(x) {
	return document.getElementById(x);
}

let file = _("file");
let qrImage = _("qr");

file.onchange = function () {
	// console.log(file.files);
	// SHOW THE PREVIEW OF THE IMAGE
	qrImage.src = window.URL.createObjectURL(file.files[0]);
};
console.log(window);
