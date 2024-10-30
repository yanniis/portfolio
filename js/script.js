document.addEventListener('DOMContentLoaded', function() {

// Sélection des éléments HTML nécessaires
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.querySelector('nav .button-navigation');
const closeButton = document.getElementById('closeButton');
const navLinks = document.querySelectorAll('nav .button-navigation ul li a');

// Fonction pour basculer les classes en fonction de la largeur de l'écran
const toggleMenu = () => {
    // Vérifie si la largeur de l'écran est inférieure ou égale à 600px
    if (window.innerWidth <= 600) {
        navMenu.classList.toggle('active'); // Affiche ou masque le menu
        document.body.classList.toggle('no-scroll'); // Désactive ou active le défilement
    }
};

// Ajout des événements pour le bouton burger et la croix de fermeture
burgerMenu.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Fermer le menu lorsque l'utilisateur clique sur un lien dans le menu
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


const whoButton = document.getElementById('whoButton');
const realButton = document.getElementById('realButton');
const resumeButton = document.getElementById('resumeButton');
const contactButton = document.getElementById('contactButton');
const whoDiv = document.getElementById('who');
const realDiv = document.getElementById('real');
const resumeDiv = document.getElementById('resume');
const contactDiv = document.getElementById('contact');


realButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    whoDiv.style.display = 'none';
    realDiv.style.display = 'block';
    resumeDiv.style.display ='none';
    contactDiv.style.display = 'none';
});


whoButton.addEventListener('click', function(event) {
    event.preventDefault();  
    whoDiv.style.display = 'block';  
    realDiv.style.display = 'none';
    resumeDiv.style.display ='none'; 
    contactDiv.style.display = 'none';  
});

resumeButton.addEventListener('click', function(event) {
    event.preventDefault();
    whoDiv.style.display = 'none';  
    realDiv.style.display = 'none';
    resumeDiv.style.display ='block'; 
    contactDiv.style.display = 'none'; 
})

contactButton.addEventListener('click', function(event) {
    event.preventDefault();  
    whoDiv.style.display = 'none';
    realDiv.style.display = 'none';
    resumeDiv.style.display ='none';
    contactDiv.style.display = 'block'; 
});


// Page réalisation


    // Sélectionner le modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    // Lorsque l'utilisateur clique sur une image dans le carrousel
    document.querySelectorAll('img, .carousel-image-academic, .carousel-image-academic2, .carousel-image-academic3, .carousel-image-academic4, .carousel-image-academic5, .carousel-image-academic6, .carousel-image-pro, .carousel-image-pro2, .carousel-image-pro3').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Fermer le modal quand on clique sur le X
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Fermer le modal quand on clique en dehors de l'image
    modal.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


const academicButton = document.getElementById('A');
const proButton = document.getElementById('P');
const academicDiv = document.getElementById('academic');
const proDiv = document.getElementById('pro');

proButton.addEventListener('click', function(event) {
    event.preventDefault();
    academicDiv.style.display= 'none';
    proDiv.style.display = 'block';
})

academicButton.addEventListener('click', function(event) {
    event.preventDefault();
    academicDiv.style.display = 'block';
    proDiv.style.display = "none";
})

const CPButton = document.getElementById('CatchyParty');
const CSButton = document.getElementById('CyberSecurite');
const M3Button = document.getElementById('Musculator');
const SKButton = document.getElementById('SpeedKing');
const TPButton = document.getElementById('Typrotect');
const VSButton = document.getElementById('VacanSports');
const HEGPButton = document.getElementById('Hospital');
const CPDiv = document.getElementById('CP');
const CSDiv = document.getElementById('CS');
const M3Div = document.getElementById('M3');
const SKDiv = document.getElementById('SK');
const TPDiv = document.getElementById('TP');
const VSDiv = document.getElementById('VS');
const HEGPDiv = document.getElementById('HEGP');


CPButton.addEventListener('click', function(event) {
    event.preventDefault();
    CPDiv.style.display = 'block';
    CSDiv.style.display = 'none';
    M3Div.style.display = 'none';
    SKDiv.style.display = 'none';
    TPDiv.style.display = 'none';
})

CSButton.addEventListener('click', function(event) {
    event.preventDefault();
    CPDiv.style.display = 'none';
    CSDiv.style.display = 'block';
    M3Div.style.display = 'none';
    SKDiv.style.display = 'none';
    TPDiv.style.display = 'none';
})

M3Button.addEventListener('click', function(event) {
    event.preventDefault();
    CPDiv.style.display = 'none';
    CSDiv.style.display = 'none';
    M3Div.style.display = 'block';
    SKDiv.style.display = 'none';
    TPDiv.style.display = 'none';
})

SKButton.addEventListener('click', function(event) {
    event.preventDefault();
    CPDiv.style.display = 'none';
    CSDiv.style.display = 'none';
    M3Div.style.display = 'none';
    SKDiv.style.display = 'block';
    TPDiv.style.display = 'none';
})

TPButton.addEventListener('click', function(event) {
    event.preventDefault();
    CPDiv.style.display = 'none';
    CSDiv.style.display = 'none';
    M3Div.style.display = 'none';
    SKDiv.style.display = 'none';
    TPDiv.style.display = 'block';
})

VSButton.addEventListener('click', function(event) {
    event.preventDefault();
    VSDiv.style.display = 'block';
    HEGPDiv.style.display = 'none';
})

HEGPButton.addEventListener('click', function(event) {
    event.preventDefault();
    VSDiv.style.display = 'none';
    HEGPDiv.style.display = 'block';
})


// Index pour chaque carrousel
const carousels = {};

document.querySelectorAll('.carousel-container').forEach((container) => {
    const carouselName = container.dataset.carousel;
    carousels[carouselName] = { index: 0 };

    const images = container.querySelectorAll(`
        [data-images="${carouselName}"] .carousel-image-academic, 
        [data-images="${carouselName}"] .carousel-image-academic2, 
        [data-images="${carouselName}"] .carousel-image-academic3, 
        [data-images="${carouselName}"] .carousel-image-academic4, 
        [data-images="${carouselName}"] .carousel-image-academic5,
        [data-images="${carouselName}"] .carousel-image-academic6, 
        [data-images="${carouselName}"] .carousel-image-pro,
        [data-images="${carouselName}"] .carousel-image-pro2,
        [data-images="${carouselName}"] .carousel-image-pro3`);

    carousels[carouselName].totalImages = images.length;

    // Attacher les boutons de navigation
    container.querySelector(`.prev[data-carousel="${carouselName}"]`).addEventListener('click', () => changeSlide(carouselName, -1));
    container.querySelector(`.next[data-carousel="${carouselName}"]`).addEventListener('click', () => changeSlide(carouselName, 1));
});

function showSlide(carouselName, index) {
    const { totalImages } = carousels[carouselName];

    if (index >= totalImages) {
        carousels[carouselName].index = 0;
    } else if (index < 0) {
        carousels[carouselName].index = totalImages - 1;
    } else {
        carousels[carouselName].index = index;
    }

    const carousel = document.querySelector(`[data-images="${carouselName}"]`);
    carousel.style.transform = `translateX(${-carousels[carouselName].index * 100}%)`;
}

function changeSlide(carouselName, direction) {
    showSlide(carouselName, carousels[carouselName].index + direction);
}

// setInterval(() => {
//     Object.keys(carousels).forEach((carouselName) => {
//         changeSlide(carouselName, 1);
//     });
// }, 5000);

// Fonction de vérification de visibilité pour déclencher l'animation
const revealOnScroll = () => {
    // Sélectionner toutes les divs avec les classes .fade-in et .slide-in
    const divs = document.querySelectorAll('.fade-in, .slide-in');
  
    divs.forEach((div) => {
      const divTop = div.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // Ajuster le point de déclenchement
  
      if (divTop < triggerPoint) {
        div.classList.add('visible');
      }
    });
  };
  
  // Détecte le défilement pour déclencher l'animation
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // Pour l'initialisation
  
  

});


// Envoi de mail

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "mKijwS0Ti5NMv2bUj",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                checkMessage();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

function checkMessage() {
    const message = document.querySelector('.check h5');
    message.style.display = 'block'; 

    // Cacher le message après 10 secondes (10 000 millisecondes)
    setTimeout(() => {
        message.style.display = 'none';
    }, 10000);
}