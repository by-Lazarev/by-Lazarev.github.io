window.addEventListener('scroll', function() {
	var windowHeight = window.innerHeight;
	var scrollPosition = window.scrollY || window.pageYOffset;

	if (scrollPosition > windowHeight * 0.9) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
});
