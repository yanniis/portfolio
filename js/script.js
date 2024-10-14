document.addEventListener('DOMContentLoaded', function() {
  
const whoButton = document.getElementById('1');
const realButton = document.getElementById('2');
const resumeButton = document.getElementById('3');
const contactButton = document.getElementById('4');
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
        [data-images="${carouselName}"] .carousel-image-pro`);

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

// Si besoin, un auto-slide (décommenter pour activer l'auto-slide)
// setInterval(() => {
//     Object.keys(carousels).forEach((carouselName) => {
//         changeSlide(carouselName, 1);
//     });
// }, 5000);
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