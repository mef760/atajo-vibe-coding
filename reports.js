document.addEventListener('DOMContentLoaded', function() {
    // Función para generar informes de eficiencia, ahorros y cumplimiento
    window.generateReport = function() {
        const reportType = document.getElementById('report-type').value;
        const reportContentDiv = document.querySelector('#efficiency-reports .report-content');
        reportContentDiv.innerHTML = `<p class="text-gray-700">Generando informe de ${reportType}...</p>`;

        setTimeout(() => {
            let content = '';
            if (reportType === 'efficiency') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Informe de Eficiencia</h4>
                    <p class="text-gray-700">Eficiencia promedio de procesos: <strong>85%</strong></p>
                    <p class="text-gray-700">Tiempo promedio de ciclo de requerimientos: <strong>5 días</strong></p>
                    <p class="text-gray-700">Requerimientos completados a tiempo: <strong>92%</strong></p>
                `;
            } else if (reportType === 'savings') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Informe de Ahorros</h4>
                    <p class="text-gray-700">Ahorros totales generados este mes: <strong>$15,000 USD</strong></p>
                    <p class="text-gray-700">Oportunidades de ahorro identificadas: <strong>3</strong></p>
                    <p class="text-gray-700">Porcentaje de ahorro sobre el presupuesto: <strong>10%</strong></p>
                `;
            } else if (reportType === 'compliance') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Informe de Cumplimiento de Proveedores</h4>
                    <p class="text-gray-700">Tasa de cumplimiento general de proveedores: <strong>98%</strong></p>
                    <p class="text-gray-700">Proveedores con alto cumplimiento: <strong>Proveedor A, Proveedor C</strong></p>
                    <p class="text-gray-700">Incidentes de incumplimiento este mes: <strong>1</strong></p>
                `;
            }
            reportContentDiv.innerHTML = content;
        }, 1000);
    };

    // Función para generar ranking de proveedores
    window.generateRanking = function() {
        const rankingCriteria = document.getElementById('ranking-criteria').value;
        const rankingContentDiv = document.querySelector('#provider-ranking .ranking-content');
        rankingContentDiv.innerHTML = `<p class="text-gray-700">Generando ranking por ${rankingCriteria}...</p>`;

        setTimeout(() => {
            let content = '';
            if (rankingCriteria === 'price') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Ranking de Proveedores por Precio</h4>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Promedio</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor C</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$110.25</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor A</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$120.50</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor B</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$135.00</td></tr>
                        </tbody>
                    </table>
                `;
            } else if (rankingCriteria === 'time') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Ranking de Proveedores por Tiempos de Entrega</h4>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo de Entrega Promedio</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor C</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 días</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor A</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 días</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor B</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 días</td></tr>
                        </tbody>
                    </table>
                `;
            } else if (rankingCriteria === 'quality') {
                content = `
                    <h4 class="text-md font-medium text-gray-800 mb-2">Ranking de Proveedores por Calidad</h4>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calidad Promedio</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor A</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excelente</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor C</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excelente</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedor B</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bueno</td></tr>
                        </tbody>
                    </table>
                `;
            }
            rankingContentDiv.innerHTML = content;
        }, 1000);
    };

    // Función para mostrar evolución de precios y oportunidades de ahorro
    window.showPriceEvolution = function() {
        const productName = document.getElementById('product-name').value;
        const evolutionContentDiv = document.querySelector('#price-evolution .evolution-content');

        if (!productName) {
            evolutionContentDiv.innerHTML = `<p class="text-red-500">Por favor, ingrese un nombre de producto/servicio.</p>`;
            return;
        }

        evolutionContentDiv.innerHTML = `<p class="text-gray-700">Cargando evolución de precios para "${productName}"...</p>`;

        setTimeout(() => {
            const prices = [
                { month: 'Ene', price: 100 },
                { month: 'Feb', price: 102 },
                { month: 'Mar', price: 98 },
                { month: 'Abr', price: 95 },
                { month: 'May', price: 97 },
                { month: 'Jun', price: 93 }
            ];

            let priceEvolutionHtml = `
                <h4 class="text-md font-medium text-gray-800 mb-2">Evolución de Precios para "${productName}" (Últimos 6 meses)</h4>
                <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-600 mb-4">
                    <!-- Placeholder para un gráfico real, por ahora solo texto -->
                    Gráfico de Precios: ${prices.map(p => `${p.month}: $${p.price}`).join(', ')}
                </div>
                <h4 class="text-md font-medium text-gray-800 mb-2">Oportunidades de Ahorro Identificadas</h4>
                <ul class="list-disc list-inside text-gray-700">
                    <li>Negociación por volumen con Proveedor X (Estimado: $500)</li>
                    <li>Explorar alternativas de ${productName} de menor costo (Estimado: $300)</li>
                </ul>
            `;
            evolutionContentDiv.innerHTML = priceEvolutionHtml;
        }, 1000);
    };
});