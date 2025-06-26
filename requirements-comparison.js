document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const requirementId = urlParams.get('requirementId');

    if (requirementId) {
        console.log('Cargando comparativa para el requerimiento:', requirementId);
        // Aquí iría la lógica para cargar y mostrar los datos de cotizaciones
        // para el requirementId específico.
        // Por ahora, solo mostraremos un mensaje en la consola y actualizaremos el título.
        const titleElement = document.querySelector('.container.mx-auto.p-6 h2');
        if (titleElement) {
            titleElement.textContent = `Comparativa de Cotizaciones para Requerimiento: ${requirementId}`;
        }
    } else {
        console.log('No se especificó un ID de requerimiento.');
    }
});