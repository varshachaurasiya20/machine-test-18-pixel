$(document).ready(function(){
    $('#scroll-container').owlCarousel({
      loop: true,              
      margin: 20,              
      nav: true,              
      autoplay: true,          
      autoplayTimeout: 3000, 
      autoplayHoverPause: true, 
      responsive: {
        0: {
          items: 1             
        },
        600: {
          items: 3             
        },
        1000: {
          items: 5             
        }
      }
    });
  });
        
        
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();  // Prevent the default link behavior
                const targetID = this.getAttribute('href');  // Get the target section ID
                const targetSection = document.querySelector(targetID);  // Get the section element

                // Scroll to the section with smooth behavior
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        