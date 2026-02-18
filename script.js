window.addEventListener("scroll", function() {
    document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

function sendWhatsApp(tour){
    let message = `Hola, mi nombre es ____. Deseo reservar el tour ${tour}. Por favor envíenme más información.`;
    window.open(`https://wa.me/18493425653?text=${encodeURIComponent(message)}`,'_blank');
}
