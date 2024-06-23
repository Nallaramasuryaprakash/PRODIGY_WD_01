document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Function to show a section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Function to change navbar background color
    function changeNavbarColor(color) {
        navbar.style.backgroundColor = color;
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            const bgColor = link.getAttribute('data-bgcolor');
            showSection(targetSection);
            changeNavbarColor(bgColor);
        });
    });

    // Add scroll event listener to change navbar background color
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
