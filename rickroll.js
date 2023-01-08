let triggered = false;
window.onscroll = function() {
	let totalPageHeight = document.documentElement.scrollHeight;
	let scrollPoint = window.scrollY + window.innerHeight;

	if(!triggered && scrollPoint >= totalPageHeight) {
		triggered = true;
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
	}
}