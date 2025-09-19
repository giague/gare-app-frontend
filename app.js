const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

const API_URL = 'https://localhost:7654/api/auth/login';

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    message.textContent = ''; // Pulisci il messaggio precedente

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const result = await response.json();
            const token = result.token;
            // Salva il token in locale per le future richieste
            localStorage.setItem('token', token);
            
            // Reindirizza l'utente alla dashboard
            window.location.href = `dashboard.html`;
        } else {
            const result = await response.json();
            message.textContent = 'Autenticazione fallita';
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = 'Si è verificato un errore. Riprova più tardi.';
        message.style.color = 'red';
        console.error('Errore durante il login:', error);
    }
});