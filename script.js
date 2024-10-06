document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('client-name').value;
        const nifCif = document.getElementById('nif-cif').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const apartment = document.getElementById('apartment').value;
        const postalCode = document.getElementById('postal-code').value;
        const description = document.getElementById('description').value;

        fetch('https://script.google.com/macros/s/AKfycbwd5rWAood6eVokTJ9CuZEEKH7y_JGh1FqdjY3Lo3iZ08QtrRkqNr5hTS8f5G8siBz5/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clientName, nifCif, phone, email, address, apartment, postalCode, description })
        })
        .then(response => {
            messageDiv.textContent = 'Datos enviados con éxito';
            form.reset();
        })
        .catch(error => {
            messageDiv.textContent = 'Error al enviar los datos';
            console.error('Error:', error);
        });
    });
});
