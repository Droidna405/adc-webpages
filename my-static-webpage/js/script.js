const translations = {
    en: {
        home: "Home",
        videos: "Videos",
        about: "About",
        contact: "Contact Us",
        homeTitle: "Home",
        homeDescription: "Welcome to our collection of training videos. Our goal is to provide high-quality, field-ready resources for partners.",
        english: "English",
        french: "French",
        portuguese: "Portuguese",
        aboutTitle: "About",
        aboutDescription: "JF ADC is dedicated to equipping partners with tools, knowledge, and resources essential for success in the field.",
        contactTitle: "Contact",
        contactDescription: "Feel free to reach out to us at jfpadc@lmkenya.org for any inquiries or feedback.",
        projectorSetup: "Projector Set-up",
        projectorSetupDesc: "Learn how to set up the projector for optimal use in the field.",
        batteryCharging: "Projector Battery Charging Alternatives",
        wifiBoxGuide: "WiFi Box Quick Guide",
        wifiBoxGuideDesc: "A quick guide to setting up and using the WiFi Box.",
        audioBibleGuide: "AudioBible Quick Guide",
        audioBibleGuideDesc: "Instructions for using the AudioBible effectively.",
        tabletGuide: "Tablet Quick Guide",
        tabletGuideDesc: "Step-by-step guide to using the tablet for training purposes.",
        screenSetup: "Projector Screen Setup",
        screenSetupDesc: "Tips and tricks for setting up the projector screen.",
        electricityCharging: "Charging via Electricity",
        solarCharging: "Charging via Solar",
        automobileAuxiliaryCharging: "Charging via Automobile Auxiliary Power Outlet",
        motorcycleBatteryCharging: "Charging via Motorcycle Battery",
        carBatteryCharging: "Charging via Car Battery",
        purposeTitle: "Purpose of the Site",
        purposeDescription: "Welcome to our collection of training videos. Our goal is to provide high-quality, field-ready resources for partners."
    },
    fr: {
        home: "Accueil",
        videos: "Vidéos",
        about: "À propos",
        contact: "Contactez-nous",
        homeTitle: "Accueil",
        homeDescription: "Bienvenue dans notre collection de vidéos de formation. Notre objectif est de fournir des ressources de haute qualité et prêtes à l'emploi pour nos partenaires.",
        english: "Anglais",
        french: "Français",
        portuguese: "Portugais",
        aboutTitle: "À propos",
        aboutDescription: "JF ADC se consacre à fournir aux partenaires les outils, les connaissances et les ressources essentiels à leur succès sur le terrain.",
        contactTitle: "Contact",
        contactDescription: "N'hésitez pas à nous contacter à jfpadc@lmkenya.org pour toute question ou commentaire.",
        projectorSetup: "Configuration du projecteur",
        projectorSetupDesc: "Apprenez à configurer le projecteur pour une utilisation optimale sur le terrain.",
        batteryCharging: "Alternatives de chargement de la batterie du projecteur",
        wifiBoxGuide: "Guide rapide du boîtier WiFi",
        wifiBoxGuideDesc: "Un guide rapide pour configurer et utiliser le boîtier WiFi.",
        audioBibleGuide: "Guide rapide de l'AudioBible",
        audioBibleGuideDesc: "Instructions pour utiliser efficacement l'AudioBible.",
        tabletGuide: "Guide rapide de la tablette",
        tabletGuideDesc: "Guide étape par étape pour utiliser la tablette à des fins de formation.",
        screenSetup: "Configuration de l'écran du projecteur",
        screenSetupDesc: "Conseils et astuces pour configurer l'écran du projecteur.",
        electricityCharging: "Chargement via l'électricité",
        solarCharging: "Chargement via l'énergie solaire",
        automobileAuxiliaryCharging: "Chargement via la prise auxiliaire de l'automobile",
        motorcycleBatteryCharging: "Chargement via la batterie de la moto",
        carBatteryCharging: "Chargement via la batterie de la voiture",
        purposeTitle: "Objectif du Site",
        purposeDescription: "Bienvenue dans notre collection de vidéos de formation. Notre objectif est de fournir des ressources de haute qualité et prêtes à l'emploi pour nos partenaires."
    },
    pt: {
        home: "Início",
        videos: "Vídeos",
        about: "Sobre",
        contact: "Contate-nos",
        homeTitle: "Início",
        homeDescription: "Bem-vindo à nossa coleção de vídeos de treinamento. Nosso objetivo é fornecer recursos de alta qualidade e prontos para uso em campo para nossos parceiros.",
        english: "Inglês",
        french: "Francês",
        portuguese: "Português",
        aboutTitle: "Sobre",
        aboutDescription: "A JF ADC se dedica a equipar os parceiros com as ferramentas, o conhecimento e os recursos essenciais para o sucesso em campo.",
        contactTitle: "Contato",
        contactDescription: "Sinta-se à vontade para entrar em contato conosco em jfpadc@lmkenya.org para quaisquer perguntas ou comentários.",
        projectorSetup: "Configuração do projetor",
        projectorSetupDesc: "Aprenda como configurar o projetor para uso ideal em campo.",
        batteryCharging: "Alternativas de carregamento da bateria do projetor",
        wifiBoxGuide: "Guia rápido da caixa WiFi",
        wifiBoxGuideDesc: "Um guia rápido para configurar e usar a caixa WiFi.",
        audioBibleGuide: "Guia rápido do AudioBible",
        audioBibleGuideDesc: "Instruções para usar o AudioBible de forma eficaz.",
        tabletGuide: "Guia rápido do tablet",
        tabletGuideDesc: "Guia passo a passo para usar o tablet para fins de treinamento.",
        screenSetup: "Configuração da tela do projetor",
        screenSetupDesc: "Dicas e truques para configurar a tela do projetor.",
        electricityCharging: "Carregamento via eletricidade",
        solarCharging: "Carregamento via energia solar",
        automobileAuxiliaryCharging: "Carregamento através da tomada auxiliar do automóvel",
        motorcycleBatteryCharging: "Carregamento através da bateria da motocicleta",
        carBatteryCharging: "Carregamento através da bateria do carro",
        purposeTitle: "Objetivo do Site",
        purposeDescription: "Bem-vindo à nossa coleção de vídeos de treinamento. Nosso objetivo é fornecer recursos de alta qualidade e prontos para uso em campo para nossos parceiros."
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langLinks = document.querySelectorAll('.language-links a');
    langLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = link.dataset.lang;
            translatePage(lang);
            currentLanguage = lang; // Update current language
        });
    });

    // Get the modal
    const modal = document.getElementById("equipmentModal");

    // Get the button that opens the modal
    const equipmentButtons = document.querySelectorAll(".equipment-button");
    const alternativeButtons = document.querySelectorAll(".alternative-button");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Get the modal title and description elements
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalVideo = document.getElementById("modalVideo");

    const batteryAlternatives = document.getElementById("batteryAlternatives");

    // When the user clicks on an equipment button
    equipmentButtons.forEach(button => {
        button.addEventListener("click", function() {
            const equipment = this.dataset.equipment;

            if (equipment === 'battery') {
                // Show battery alternatives
                batteryAlternatives.style.display = "flex";
            } else {
                // Open modal directly for other equipment
                openModal(equipment, this.dataset.i18n);
            }
        });
    });

    // When the user clicks on a battery alternative button
    alternativeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const alternative = this.dataset.alternative;
            openModal('battery', alternative);
        });
    });

    // Function to open the modal
    function openModal(equipment, i18nKey) {
        modal.style.display = "block";
        modalTitle.textContent = translations[currentLanguage][i18nKey];
        modalDescription.textContent = translations[currentLanguage][i18nKey + 'Desc'] || ''; // Use empty string if no description
        modalVideo.src = getVideoUrl(equipment, i18nKey);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        modalVideo.src = ""; // Stop video when closing modal
        batteryAlternatives.style.display = "none"; // Hide battery alternatives
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalVideo.src = ""; // Stop video when closing modal
            batteryAlternatives.style.display = "none"; // Hide battery alternatives
        }
    }
});

let currentLanguage = 'en'; // Default language

function getVideoUrl(equipment, alternative) {
    switch (equipment) {
        case 'projector':
            return 'https://www.youtube.com/embed/YOUR_PROJECTOR_VIDEO_ID';
        case 'battery':
            switch (alternative) {
                case 'electricity':
                    return 'https://www.youtube.com/embed/YOUR_BATTERY_ELECTRICITY_VIDEO_ID';
                case 'solar':
                    return 'https://www.youtube.com/embed/YOUR_BATTERY_SOLAR_VIDEO_ID';
                case 'automobileAuxiliary':
                    return 'https://www.youtube.com/embed/YOUR_BATTERY_CAR_CIGARETTE_VIDEO_ID';
                case 'motorcycleBattery':
                    return 'https://www.youtube.com/embed/YOUR_BATTERY_MOTORCYCLE_VIDEO_ID';
                case 'carBattery':
                    return 'https://www.youtube.com/embed/YOUR_BATTERY_CAR_BATTERY_VIDEO_ID';
                default:
                    return '';
            }
        case 'wifi':
            return 'https://www.youtube.com/embed/YOUR_WIFI_VIDEO_ID';
        case 'audiobible':
            return 'https://www.youtube.com/embed/YOUR_AUDIOBIBLE_VIDEO_ID';
        case 'tablet':
            return 'https://www.youtube.com/embed/YOUR_TABLET_VIDEO_ID';
        case 'screen':
            return 'https://www.youtube.com/embed/YOUR_SCREEN_VIDEO_ID';
        default:
            return '';
    }
}