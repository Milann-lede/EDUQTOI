document.getElementById('language-selector').addEventListener('change', function () {
  const selectedLanguage = this.value;

  if (selectedLanguage === 'en') {
    // Mettez à jour l'URL sans recharger la page
    history.pushState({}, '', '/en');

    // Affichez le contenu en anglais et masquez le contenu en français
    document.getElementById('fr').style.display = 'none';
    document.getElementById('en').style.display = 'block';
  } else {
    // Mettez à jour l'URL sans recharger la page
    history.pushState({}, '', '/fr');

    // Affichez le contenu en français et masquez le contenu en anglais
    document.getElementById('fr').style.display = 'block';
    document.getElementById('en').style.display = 'none';

    i18n.changeLanguage(selectedLanguage);

    document.getElementById('welcome').textContent = i18n.t('welcome');
    document.querySelectorAll('#menu a').forEach((link, index) => {
      link.textContent = i18n.t(Object.keys(frTranslations)[index]);
    });
  }
});