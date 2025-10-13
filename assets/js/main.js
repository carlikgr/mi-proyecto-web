// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}


//Control del menú hamburguesa y animación

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      nav.classList.toggle("active");
    });
  }

  // Cerrar menú al hacer clic en un enlace (en móvil)
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    });
  });
});