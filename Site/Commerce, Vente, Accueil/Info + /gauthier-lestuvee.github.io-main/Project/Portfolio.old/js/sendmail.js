// Récupérer l'adresse e-mail du formulaire
const SENDGRID_API_KEY = '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'

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const form = document.querySelector('.contact-form form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Validation du formulaire
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Veuillez remplir tous les champs');
  } else {
    // Envoi des données du formulaire à un serveur backend
    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);
    
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Votre message a été envoyé avec succès!');
        form.reset();
      } else {
        alert('Une erreur est survenue lors de l\'envoi de votre message.');
      }
    })
    .catch(error => {
      alert('Une erreur est survenue lors de l\'envoi de votre message.');
      console.error(error);
    });
  }
});