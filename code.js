var qrcode = new QRCode(document.getElementById("qrcode"), {
	height: 150,
	width: 150,
});

function generate() {
	const value = document.getElementById("TA");
	if (!value.value) {
		alert("Ooops Can't Generate for an Empty Space!");

		value.focus();
		return;
	}

	qrcode.makeCode(value.value);

}

function printing(qrimage) {
	const qrimg = document.getElementById(qrimage).innerHTML;
	w = window.open();
	w.document.write(qrimg);
	w.print();
}
