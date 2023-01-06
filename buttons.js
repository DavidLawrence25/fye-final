function scrollToHeading(heading) {
	let headingY = document.getElementById(`${heading}`).getBoundingClientRect().top
	scrollTo(0, headingY);
}