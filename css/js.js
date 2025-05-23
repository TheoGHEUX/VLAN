document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://formspree.io/f/movdzyaq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Formulaire envoyé avec succès', result);

            popup.style.display = 'flex'; // Affiche le popup
            form.reset();
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du formulaire', error);
            alert("Erreur lors de l'envoi du formulaire");
        });
    });
});

// Fonction pour fermer le pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
