const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

// LORSQUE L'ON CLIQUE SUR LE BURGER
burger.addEventListener('click', () => {
    // Bascule la classe 'hidden' pour montrer/cacher le menu
    menu.classList.toggle('hidden');
});

