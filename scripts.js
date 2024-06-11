document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});
function enviarMensajeWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5492644032113&text=¡Hola! Estoy interesado en contactarte para discutir sobre proyectos.', '_blank');
}
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});