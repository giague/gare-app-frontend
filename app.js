// app.js

import { API_URL } from './config.js';

const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');
const toastElement = document.getElementById('toast');

const LOGIN_API_URL = `${API_URL}/auth/login`;

// Funzione per mostrare un toast con un messaggio
function showToast(message) {
    toastElement.textContent = message;
    toastElement.className = "toast show";
    setTimeout(() => {
        toastElement.className = toastElement.className.replace("show", "");
    }, 3000); // Nasconde il toast dopo 3 secondi
}

loginForm.addEventListener('submit', async (e) => {
    // PREVENT THE DEFAULT FORM SUBMISSION BEHAVIOR
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    messageElement.textContent = ''; // Pulisci il messaggio precedente

    try {
        const response = await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const result = await response.json();
            const token = result.token;
            localStorage.setItem('token', token);
            
            // Reindirizza l'utente in caso di successo
            window.location.href = `dashboard.html`;
        } else {
            // Mostra un toast in caso di errore
            showToast('Autenticazione fallita');
        }
    } catch (error) {
        showToast('Si è verificato un errore. Riprova più tardi.');
        console.error('Errore durante il login:', error);
    }
});