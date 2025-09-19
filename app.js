// app.js

import { API_URL } from './config.js';

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

const LOGIN_API_URL = `${API_URL}/auth/login`;

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    message.textContent = ''; 

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