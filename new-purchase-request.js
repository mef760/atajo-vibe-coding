document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purchaseRequestForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const itemName = document.getElementById('item-name').value;
        const quantity = document.getElementById('quantity').value;
        const unitPrice = document.getElementById('unit-price').value;
        const supplier = document.getElementById('supplier').value;
        const notes = document.getElementById('notes').value;

        // Aquí puedes añadir la lógica para enviar los datos a un servidor
        // o para procesarlos de alguna otra manera.
        console.log('Nuevo Requerimiento de Compra:');
        console.log(`Artículo: ${itemName}`);
        console.log(`Cantidad: ${quantity}`);
        console.log(`Precio Unitario: ${unitPrice}`);
        console.log(`Proveedor Sugerido: ${supplier}`);
        console.log(`Notas: ${notes}`);

        alert('Requerimiento de compra enviado con éxito!');
        form.reset(); // Limpia el formulario después del envío
    });
});