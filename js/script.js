// Gestion des langues
let currentLanguage = 'en';

// Traductions
const translations = {
    gr: {
        'nav.home': 'Αρχική',
        'nav.gallery': 'Γκαλερί',
        'button.gallery': 'Γκαλερί',
        'footer.copyright': '© 2024 Εκατερίνη Γκούβα. Όλα τα δικαιώματα διατηρούνται.'
    },
    en: {
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'button.gallery': 'Gallery',
        'footer.copyright': '© 2024 Ekaterini Gouva. All rights reserved.'
    }
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Charger la langue par défaut
    loadLanguage();
    
    // Ajouter les événements pour fermer les modales avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    // Lazy loading pour les images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Fonction pour changer de langue
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    // Cacher tous les contenus de langue
    document.querySelectorAll('.lang-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Afficher le contenu de la langue sélectionnée
    document.querySelectorAll(`#content-${lang}, #btn-text-${lang}, #footer-${lang}`).forEach(content => {
        content.classList.add('active');
    });
    
    // Mettre à jour les descriptions des modales
    document.querySelectorAll(`[id*="desc-"][id*="-${lang}"]`).forEach(content => {
        content.classList.add('active');
    });
    
    // Mettre à jour les textes avec data-lang-key
    updateTranslations(lang);
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Fonction pour mettre à jour les traductions
function updateTranslations(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Fonction pour charger la langue sauvegardée
function loadLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
}

// Fonction pour ouvrir une modale
function openModal(imageId) {
    const modal = document.getElementById(`modal-${imageId}`);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le scroll
        
        // Animation d'entrée
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Focus sur la modale pour l'accessibilité
        modal.focus();
    }
}

// Fonction pour fermer une modale spécifique
function closeModal(imageId) {
    const modal = document.getElementById(`modal-${imageId}`);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactiver le scroll
        }, 300);
        
        // Réinitialiser le zoom
        const img = modal.querySelector('.modal-content');
        if (img && img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
        }
    }
}

// Fonction pour fermer toutes les modales
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display === 'block') {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
            
            // Réinitialiser le zoom
            const img = modal.querySelector('.modal-content');
            if (img && img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
            }
        }
    });
}

// Fonction pour basculer le zoom sur une image
function toggleZoom(img) {
    if (img.classList.contains('zoomed')) {
        img.classList.remove('zoomed');
    } else {
        img.classList.add('zoomed');
    }
}

// Fonction pour gérer le clic en dehors de la modale
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id.replace('modal-', '');
        closeModal(modalId);
    }
});

// Fonction pour précharger les images
function preloadImages() {
    const imageIds = [
        'DEL_1694', 'DEL_1697', 'DEL_1698', 'DEL_1699', 'DEL_1700',
        'DEL_1701', 'DEL_1702', 'DEL_1703', 'DEL_1704', 'DEL_1705',
        'DEL_1706', 'DEL_1707', 'DEL_1708', 'DEL_1709', 'DEL_1710',
        'DEL_1711', 'DEL_1712'
    ];
    
    imageIds.forEach(id => {
        const img = new Image();
        img.src = `images/${id}.JPG`;
    });
}

// Précharger les images après le chargement de la page
window.addEventListener('load', preloadImages);

// Fonction pour gérer le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    // Ajuster les modales si elles sont ouvertes
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display === 'block') {
            const img = modal.querySelector('.modal-content');
            if (img && img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
            }
        }
    });
});

// Fonction pour améliorer l'accessibilité
function enhanceAccessibility() {
    // Ajouter des attributs ARIA
    document.querySelectorAll('.artwork').forEach((artwork, index) => {
        artwork.setAttribute('role', 'button');
        artwork.setAttribute('tabindex', '0');
        artwork.setAttribute('aria-label', `Ouvrir l'image ${index + 1} en grand format`);
        
        // Permettre l'activation avec Enter ou Space
        artwork.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const onclick = artwork.getAttribute('onclick');
                if (onclick) {
                    eval(onclick);
                }
            }
        });
    });
    
    // Ajouter des attributs ARIA aux modales
    document.querySelectorAll('.modal').forEach(modal => {
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'true');
    });
    
    // Ajouter des attributs ARIA aux boutons de fermeture
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.setAttribute('aria-label', 'Fermer la modale');
        closeBtn.setAttribute('role', 'button');
    });
}

// Appeler la fonction d'amélioration de l'accessibilité
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Fonction pour gérer les erreurs d'images
function handleImageError() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Image non trouvée: ${this.src}`);
        });
    });
}

// Appeler la gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', handleImageError);

// Fonction pour optimiser les performances
function optimizePerformance() {
    // Debounce pour le redimensionnement
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Actions à effectuer après le redimensionnement
        }, 250);
    });
    
    // Throttle pour le scroll (si nécessaire)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Actions à effectuer pendant le scroll
            }, 16); // ~60fps
        }
    });
}

// Appeler l'optimisation des performances
document.addEventListener('DOMContentLoaded', optimizePerformance);
