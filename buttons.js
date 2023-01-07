function scrollToHeading(heading) {
	const VH = window.visualViewport.height * 0.01;
	let headingY = document.getElementById(`${heading}`).getBoundingClientRect().top;
	if (scrollY != Math.floor(headingY)) {
		scrollBy(0, headingY - 6 * VH); // i think the magic number is 2 * vw of the heading font size
	}
}