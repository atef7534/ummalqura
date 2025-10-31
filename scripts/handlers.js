function handleBarIcon(target) {
    const navLinks = target.parentNode.previousElementSibling;
    if (navLinks.style.visibility !== "hidden") {
        navLinks.style.visibility = "hidden";
    }
    else
    {
        navLinks.style.visibility = "visibile";
    }
}