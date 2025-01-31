const API_URL = 'https://api.aladhan.com/v1/timings';
let userSettings = {
    location: null,
    reminders: {},
    audio: 'mecca',
    theme: 'auto'
};
let prayerTimings = {};
let notificationTimeouts = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    initServiceWorker();
    setupEventListeners();
    checkLocationPermission();
});

function checkLocationPermission() {
    if (navigator.geolocation) {
        navigator.permissions.query({ name: 'geolocation' }).then(status => {
            if (status.state === 'granted') {
                getLocation();
            } else {
                document.getElementById('loading').style.display = 'none';
            }
        });
    }
}

async function getLocation() {
    document.getElementById('loading').style.display = 'flex';
    navigator.geolocation.getCurrentPosition(
        async position => {
            userSettings.location = position.coords;
            try {
                prayerTimings = await getPrayerTimes(position.coords);
                updatePrayerDisplay(prayerTimings);
                scheduleNotifications(prayerTimings);
                document.getElementById('loading').style.display = 'none';
            } catch (error) {
                console.error('API Error:', error);
                alert('Failed to fetch prayer times. Please try again.');
                document.getElementById('loading').style.display = 'none';
            }
        },
        error => {
            console.error('Geolocation Error:', error);
            document.getElementById('manualLocation').classList.remove('hidden');
            document.getElementById('loading').style.display = 'none';
        },
        { timeout: 10000 }
    );
}

async function getPrayerTimes(coords) {
    const response = await fetch(
        `${API_URL}?latitude=${coords.latitude}&longitude=${coords.longitude}&method=2`
    );
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    return data.data.timings;
}

function updatePrayerDisplay(timings) {
    const container = document.getElementById('prayerTimes');
    container.innerHTML = '';
    
    Object.entries(timings).forEach(([name, time]) => {
        const card = document.createElement('div');
        card.className = 'prayer-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow transform transition hover:scale-105';
        card.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${name}</h3>
                <span class="text-2xl font-bold text-blue-500">${formatTime(time)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function scheduleNotifications(timings) {
    // Clear existing timeouts
    notificationTimeouts.forEach(clearTimeout);
    notificationTimeouts = [];

    Object.entries(timings).forEach(([prayer, time]) => {
        const [hours, minutes] = time.split(':').map(Number);
        const notificationTime = new Date();
        notificationTime.setHours(hours, minutes, 0, 0);

        if (notificationTime > Date.now()) {
            const timeout = setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification(`🕌 Azaan Time for ${prayer}`, {
                        body: 'Time to perform your prayer',
                        icon: '/icons/icon-192x192.png'
                    });
                    playAzaan();
                }
            }, notificationTime - Date.now());
            notificationTimeouts.push(timeout);
        }
    });
}

function playAzaan() {
    const audio = document.getElementById('azaanPlayer');
    audio.src = `/audio/${userSettings.audio}.mp3`;
    audio.play().catch(error => console.error('Audio playback failed:', error));
}

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js', { scope: '/' })
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
}

function setupEventListeners() {
    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        userSettings.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        saveSettings();
    });

    // Dark Mode Checkbox
    document.getElementById('darkMode').addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark', e.target.checked);
        userSettings.theme = e.target.checked ? 'dark' : 'light';
        saveSettings();
    });

    // Audio Selection
    document.getElementById('audioSelect').addEventListener('change', (e) => {
        userSettings.audio = e.target.value;
        saveSettings();
    });

    // Location Button
    document.getElementById('locationBtn').addEventListener('click', getLocation);
}

function useManualLocation() {
    const lat = parseFloat(document.getElementById('lat').value);
    const lng = parseFloat(document.getElementById('lng').value);
    
    if (isNaN(lat) || isNaN(lng)) {
        alert('Please enter valid coordinates');
        return;
    }

    userSettings.location = { latitude: lat, longitude: lng };
    getPrayerTimes(userSettings.location)
        .then(timings => {
            updatePrayerDisplay(timings);
            scheduleNotifications(timings);
            document.getElementById('manualLocation').classList.add('hidden');
        })
        .catch(error => {
            console.error('Manual location error:', error);
            alert('Failed to fetch times for these coordinates');
        });
}

// Helper Functions
function formatTime(timeString) {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes} ${period}`;
}

function saveSettings() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

function loadSettings() {
    const saved = localStorage.getItem('userSettings');
    if (saved) {
        userSettings = JSON.parse(saved);
        document.documentElement.classList.toggle('dark', userSettings.theme === 'dark');
        document.getElementById('darkMode').checked = userSettings.theme === 'dark';
        document.getElementById('audioSelect').value = userSettings.audio;
    }
}

// Request Notification Permission
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        console.log('Notification permission:', permission);
    });
}
