// config.js

const API_BASE_URL = 'localhost:7654';

// Determina il protocollo in base alla base URL
const protocol = API_BASE_URL.includes('localhost') ? 'http' : 'https';

// Esporta l'URL di base completo
export const API_URL = `${protocol}://${API_BASE_URL}/api`;