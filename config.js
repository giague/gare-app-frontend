// config.js

const API_BASE_URL = 'localhost:7654';

// Determina il protocollo in base all'ambiente
const protocol = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http' : 'https';

// Esporta l'URL di base completo
export const API_URL = `${protocol}://${API_BASE_URL}/api`;