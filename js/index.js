var guys = document.querySelectorAll('.guy');
var testimonialtext = document.querySelector('.testimonialtext');
var testimonials = {
    one: "Les smoothies sont incroyablement frais et délicieux. Ils sont parfaits pour un boost d'énergie naturel!",
    two: "Les jus sont remplis de saveurs authentiques. Un excellent choix pour une pause santé!",
    three: "J'adore la variété de smoothies offerts. Chacun d'eux est un pur régal pour les papilles!",
    four: "Les jus sont d'une qualité exceptionnelle. Idéal pour se rafraîchir et se revitaliser en même temps!"
};

guys.forEach(guy => {
    guy.addEventListener('click', () => {
        // Supprime la classe "active" de tous les éléments .guy
        guys.forEach(g => g.classList.remove('active'));
        
        // Ajoute la classe "active" à l'élément cliqué
        guy.classList.add('active');
        
        // Met à jour le texte du témoignage
        var key = guy.classList[1];
        if (testimonials[key]) {
            testimonialtext.innerHTML = testimonials[key];
        }
    });
});
