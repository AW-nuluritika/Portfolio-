
       
        window.addEventListener('scroll', () => {
            document.querySelector('.scroll-top').style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Scroll reveal animations
        const sections = document.querySelectorAll('section');
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    section.classList.add('show');
                }
            });
        });
 
        function pdfdownload() {
            var link = document.createElement('a');
            link.href = 'files/Nulu-Ritika-Web-Developer.pdf';
            link.download = 'Nulu-Ritika-Web-Developer.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
   