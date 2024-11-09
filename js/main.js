
//Nav 
const navbarToggler = document.getElementById('navbar-toggler'); // Navbar toggle button
const navbarNav = document.getElementById('navbarNav'); // Navbar menu container

// Toggle the navbar on and off
navbarToggler.addEventListener('click', function() {
// Toggle the "collapse" class on the menu to show/hide it
navbarNav.classList.toggle('collapse');
});
