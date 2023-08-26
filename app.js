function applyFadeInEffect(elementSelector) {
    const elements = document.querySelectorAll(elementSelector);

    function fadeInElement(element) {
        const scrollPosition = window.scrollY;
        const elementPosition = element.offsetTop - window.innerHeight + 100;

        if (scrollPosition >= elementPosition) {
            element.style.opacity = 1;
        }
    }

    function handleScroll() {
        elements.forEach((element) => {
            fadeInElement(element);
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
}

// Apply the effect to specific divs by passing their selectors as arguments
applyFadeInEffect(".pre-startup-era"); //
applyFadeInEffect(".startup-content p"); //
applyFadeInEffect(".rise-of-startups"); //
applyFadeInEffect(".ratan-tata"); //
applyFadeInEffect(".mukesh-ambani"); //
applyFadeInEffect(".era-SHE-preneurs"); //
applyFadeInEffect(".silicon-symphony"); //
applyFadeInEffect(".about-ceed p ");
