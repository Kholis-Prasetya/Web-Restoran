document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }

    // Section Scroll Active Link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    // ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 100,
    });

    ScrollReveal().reveal('.home-content, .heading, .text, .section-title', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skill-container,  .contact form, .menu-container, .branches', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
    // Text Animasi
    const textElement = document.getElementById('multiple-text');
    const texts = [
        "Free Delivery ", 
        "Nikmatnya Santapan",
        "Sejuta Kesan",
        "Gratis Ongkir"
    ];
    let index = 0;

    function changeText() {
        // Ubah opacity menjadi 0 
        textElement.style.opacity = 0;

        setTimeout(function() {
            // Ganti teks setelah 500ms
            textElement.textContent = texts[index];
            // Tunggu 100ms sebelum menampilkan kembali 
            setTimeout(function() {
                textElement.style.opacity = 1;
            }, 100);
        }, 500);

        index = (index + 1) % texts.length;
    }

    // Panggil changeText pertama kali
    changeText();

    // Set interval untuk menjalankan changeText setiap 3 detik
    setInterval(changeText, 3000);
});
