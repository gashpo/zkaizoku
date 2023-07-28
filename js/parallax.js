let layers = $('[speed]');
let speed, yPos;
window.addEventListener("scroll", function (event) {
	let fromTop = this.pageYOffset;

	for (let layer of layers) {
		speed = layer.getAttribute('speed');
		yPos = -(fromTop * speed) * 0.1;
		layer.style.transform = `translateY(${yPos}px)`;
	}
})