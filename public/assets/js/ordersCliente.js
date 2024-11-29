document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('ordenesBody');

    // Datos quemados para pruebas
    const ordenes = [
        {
            id: 1,
            producto: "Camisa Colorida",
            fechaPedido: "2024-11-29",
            total: 50.00,
            estado: "Entregado"
        },
        {
            id: 2,
            producto: "Pantalón Negro",
            fechaPedido: "2024-11-28",
            total: 75.00,
            estado: "Pendiente"
        },
        {
            id: 3,
            producto: "Zapatos Deportivos",
            fechaPedido: "2024-11-27",
            total: 120.00,
            estado: "Cancelado"
        }
    ];

    // Función para cargar las órdenes estáticas
    const cargarOrdenes = () => {
        if (ordenes.length === 0) {
            tabla.innerHTML = `<tr><td colspan="6">No hay pedidos disponibles</td></tr>`;
            return;
        }

        // Agrega cada orden a la tabla
        ordenes.forEach((orden) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${orden.id}</td>
                <td>${orden.producto}</td>
                <td>${orden.fechaPedido}</td>
                <td>$${orden.total.toFixed(2)}</td>
                <td>${orden.estado}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="viewOrderDetails(${orden.id})">Ver Detalles</button>
                    <button class="btn btn-success btn-sm" onclick="realizarPedido(${orden.id})">Ordenar</button>
                </td>
            `;
            tabla.appendChild(fila);
        });
    };

    // Función para ver detalles de una orden
    const viewOrderDetails = (orderId) => {
        const orden = ordenes.find(o => o.id === orderId);
        if (!orden) return Swal.fire('Orden no encontrada', '', 'error');

        Swal.fire({
            title: `Detalles del Pedido #${orden.id}`,
            html: `
                <p><strong>Producto:</strong> ${orden.producto}</p>
                <p><strong>Fecha:</strong> ${orden.fechaPedido}</p>
                <p><strong>Total:</strong> $${orden.total.toFixed(2)}</p>
                <p><strong>Estado:</strong> ${orden.estado}</p>
            `,
            confirmButtonText: 'Cerrar'
        });
    };

    // Función para realizar un nuevo pedido (simulado)
    const realizarPedido = (orderId) => {
        const orden = ordenes.find(o => o.id === orderId);
        if (!orden) return Swal.fire('Orden no encontrada', '', 'error');

        Swal.fire('Pedido realizado con éxito', '', 'success');
    };

    // Cargar las órdenes al inicio
    cargarOrdenes();

    // Exponer funciones globalmente para que puedan ser llamadas desde el HTML
    window.viewOrderDetails = viewOrderDetails;
    window.realizarPedido = realizarPedido;
});
