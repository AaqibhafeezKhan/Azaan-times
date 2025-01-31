// script.js
const API_URL = 'https://api.aladhan.com/v1/timings';
let userSettings = {
    location: null,
    reminders: {},
    audioSelection: 'mecca',
    theme: 'auto'
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
    loadSettings();
    initServiceWorker();
    setupEventListeners();
    
    if (navigator.geolocation) {
        getLocation();
    } else {
        showManualLocation();
    }
});

async function getPrayerTimes(coords) {
    const date = new Date();
    const response = await fetch(`${API_URL}/${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}?latitude=${coords.latitude}&longitude=${coords.longitude}&method=2`);
    const data = await response.json();
    return data.data.timings;
}

function updatePrayerDisplay(timings) {
    const container = document.getElementById('prayerTimes');
    container.innerHTML = '';
    
    Object.entries(timings).forEach(([name, time]) => {
        const card = document.createElement('div');
        card.className = 'prayer-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow';
        card.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 dark:text-white">${name}</h3>
            <p class="text-2xl text-blue-500">${formatTime(time)}</p>
        `;
        container.appendChild(card);
    });
    
    scheduleNotifications(timings);
    checkCurrentPrayer(timings);
}

function scheduleNotifications(timings) {
    Object.entries(timings).forEach(([prayer, time]) => {
        const notificationTime = new Date(`${new Date().toDateString()} ${time}`);
        if (notificationTime > Date.now()) {
            setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification(`Azaan Time for ${prayer}`);
                    playAzaan();
                }
            }, notificationTime - Date.now());
        }
    });
}

function playAzaan() {
    const audio = document.getElementById('azaanPlayer');
    audio.src = `audio/${userSettings.audioSelection}.mp3`;
    audio.play();
}

// Service Worker Registration
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Update path for Vercel deployment
        navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
            .then(() => console.log('SW Registered'))
            .catch(err => console.log('SW Registration Failed:', err));
    }
}
