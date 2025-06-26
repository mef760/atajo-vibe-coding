document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const addProviderForm = document.getElementById('add-provider-form');
    const addStatus = document.getElementById('add-status');

    // Simulación de una base de datos de proveedores
    let providers = [
        { id: 'PROV001', name: 'Proveedor A S.A. de C.V.', contact: 'Juan Pérez', phone: '5512345678', email: 'juan.perez@prova.com' },
        { id: 'PROV002', name: 'Distribuidora B', contact: 'María García', phone: '3398765432', email: 'maria.garcia@distribuidorab.com' },
        { id: 'PROV003', name: 'Servicios C Integrales', contact: 'Carlos López', phone: '8123456789', email: 'carlos.lopez@serviciosci.com' }
    ];

    // Función para mostrar proveedores
    function displayProviders(providerList) {
        searchResults.innerHTML = '';
        if (providerList.length === 0) {
            searchResults.innerHTML = '<p class="text-gray-600">No se encontraron proveedores.</p>';
            return;
        }
        providerList.forEach(provider => {
            const providerDiv = document.createElement('div');
            providerDiv.className = 'bg-white p-6 rounded-xl shadow-sm mb-4'; // Clases de estilo de index.html
            providerDiv.innerHTML = `
                <h3 class="text-lg font-medium text-gray-800">${provider.name} <span class="text-sm text-gray-500">(${provider.id})</span></h3>
                <p class="text-sm text-gray-600 mt-2"><strong>Contacto:</strong> ${provider.contact}</p>
                <p class="text-sm text-gray-600"><strong>Teléfono:</strong> ${provider.phone}</p>
                <p class="text-sm text-gray-600"><strong>Email:</strong> ${provider.email}</p>
            `;
            searchResults.appendChild(providerDiv);
        });
    }

    // Búsqueda de proveedores
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProviders = providers.filter(provider =>
            provider.name.toLowerCase().includes(searchTerm) ||
            provider.id.toLowerCase().includes(searchTerm)
        );
        displayProviders(filteredProviders);
    });

    // Agregar nuevo proveedor
    addProviderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('provider-name').value;
        const contact = document.getElementById('provider-contact').value;
        const phone = document.getElementById('provider-phone').value;
        const email = document.getElementById('provider-email').value;

        // Generar un ID simple (para simulación)
        const newId = 'PROV' + String(providers.length + 1).padStart(3, '0');

        const newProvider = {
            id: newId,
            name,
            contact,
            phone,
            email
        };

        providers.push(newProvider);
        addStatus.textContent = `Proveedor "${name}" agregado con éxito. ID: ${newId}`;
        addStatus.style.color = 'green';
        addProviderForm.reset();
        displayProviders(providers); // Actualizar la lista de búsqueda con el nuevo proveedor
    });

    // Mostrar todos los proveedores al cargar la página inicialmente
    displayProviders(providers);
});