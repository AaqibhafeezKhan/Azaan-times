# Islamic Prayer Times - PWA

A comprehensive Progressive Web App for Islamic prayer times with accurate calculations, Qibla direction, Hijri calendar, digital tasbih, and 99 Names of Allah.

## Features

### Prayer Times
- **Accurate Calculations**: Uses PrayTimes.js library with multiple calculation methods
  - Muslim World League (MWL)
  - Islamic Society of North America (ISNA)
  - Egyptian General Authority
  - Umm al-Qura, Makkah
  - University of Karachi
  - Institute of Geophysics, Tehran
  - Shia Ithna-Ashari (Jafari)
- **Madhab Support**: Standard (Shafi, Maliki, Hanbali) and Hanafi
- **Real-time Countdown**: Shows time remaining until next prayer with ticking seconds
- **Current Prayer Highlighting**: Active prayer is visually highlighted
- **Notification Bells**: Toggle notifications for individual prayers

### Qibla Compass
- **Visual Compass**: SVG-based compass with rotating needle
- **Device Orientation**: Real-time compass rotation using device sensors (with permission)
- **Static Mode**: Shows Qibla bearing when device compass unavailable
- **Distance Display**: Shows distance to Makkah in km and miles
- **Cardinal Direction**: Displays N/NE/E/etc. indicator

### Digital Tasbih
- **Large Counter**: Easy-to-tap circular counter with progress
- **Haptic Feedback**: Vibration on increment (if supported)
- **Target Presets**: Quick select 33, 99, or 100
- **Custom Target**: Enter any custom target count
- **Dhikr Selection**: SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah, or custom
- **Completion Alert**: Audio beep and visual flash when target reached
- **Session History**: Last 5 sessions stored in localStorage

### Hijri Calendar
- **Umm al-Qura Algorithm**: Pure JavaScript implementation (no API)
- **Dual Dates**: Shows both Gregorian and Hijri dates
- **Month Navigation**: Previous/Next month buttons
- **Islamic Events**: Displays major events (Ramadan, Eid, etc.)
- **Today Highlighting**: Current date highlighted

### 99 Names of Allah (Asma ul-Husna)
- **Complete List**: All 99 names with Arabic, transliteration, and meaning
- **Detailed Descriptions**: Full description for each name
- **Memorization Feature**: Mark names as learned
- **Progress Bar**: Shows memorization progress (X/99)
- **Search/Filter**: Find names quickly
- **Grid/List Views**: Toggle between layouts

### Settings
- **Calculation Method**: 7 different methods supported
- **Madhab**: Hanafi or Standard
- **Time Format**: 12h or 24h
- **Dark Mode**: Auto, Light, or Dark
- **Notifications**: Per-prayer notification toggles
- **Athan Sound**: Play audio alert at prayer times
- **Manual Location**: Enter coordinates if geolocation unavailable

## Tech Stack

- **HTML5** with semantic structure
- **Vanilla JavaScript (ES6+)** - No frameworks
- **Tailwind CSS v3** via CDN
- **PrayTimes.js** (embedded) - Prayer calculation library
- **Amiri Font** - Arabic text from Google Fonts
- **Service Worker** - Offline caching and push notifications
- **Web App Manifest** - PWA installation support
- **LocalStorage** - All settings and state persistence

## File Structure

```
/
├── index.html          # Main app shell with all UI
├── app.js              # All application logic (modules pattern)
├── praytimes.js        # Prayer time calculation library
├── sw.js               # Service worker for offline/PWA
├── manifest.json       # PWA manifest
├── icons/
│   ├── icon.svg        # Source SVG icon
│   └── generate-png.html # Tool to generate PNG icons
└── README.md
```

## Installation

1. Open the app in a modern browser (Chrome, Safari, Edge)
2. Tap "Add to Home Screen" or "Install App" when prompted
3. The app will work offline and can send prayer notifications

## Usage

1. **Allow Location**: Grant location access for accurate prayer times, or manually enter your city
2. **Select Method**: Choose your preferred calculation method and madhab in Settings
3. **Enable Notifications**: Toggle notification bells for prayers you want alerts for
4. **Qibla**: Navigate to Qibla tab and enable device compass for real-time direction
5. **Tasbih**: Select dhikr type, set target, and tap the circle to count
6. **Calendar**: Browse months to see Hijri dates and Islamic events
7. **99 Names**: Tap any name to see details and mark as learned

## Browser Support

- Chrome/Edge (recommended)
- Safari on iOS (supports DeviceOrientation with permission)
- Firefox
- Samsung Internet

## PWA Features

- **Offline Support**: All assets cached for offline use
- **Installable**: Add to home screen on mobile
- **Push Notifications**: Prayer time alerts (when enabled)
- **Background Sync**: Updates prayer times automatically
- **Theme Color**: Matches app theme (#10b981 emerald)

## Technical Details

### Modules Architecture
The app uses an IIFE module pattern with these modules:
- `PrayerTimesModule` - Prayer calculation and display
- `QiblaModule` - Qibla calculation and compass
- `TasbihModule` - Counter functionality
- `CalendarModule` - Hijri calendar display
- `NamesModule` - 99 Names management
- `SettingsModule` - Configuration storage
- `LocationModule` - Geolocation handling
- `ThemeModule` - Dark/light mode
- `App` - Main application controller

### Storage Keys
All localStorage keys are prefixed with `islamicpwa_`:
- `islamicpwa_calcMethod` - Calculation method
- `islamicpwa_madhab` - Madhab selection
- `islamicpwa_location` - User location
- `islamicpwa_darkMode` - Theme preference
- `islamicpwa_tasbih_sessions` - Tasbih history
- `islamicpwa_learned_names` - Memorized names
- `islamicpwa_visits` - Visit counter for install prompt

### Hijri Calendar
Implements Umm al-Qura tabular algorithm for accurate Hijri date conversion without external API calls.

### Qibla Calculation
Uses great-circle bearing formula:
```
θ = atan2(sin(Δlong)·cos(lat2),
          cos(lat1)·sin(lat2) − sin(lat1)·cos(lat2)·cos(Δlong))
```

## Development

To generate PNG icons from the SVG:
1. Open `icons/generate-png.html` in a browser
2. Right-click and save each generated canvas as PNG
3. Save as `icon-192.png` and `icon-512.png`

## License

PrayTimes.js is MIT licensed. This app is open source.

## Credits

- PrayTimes.js library for prayer calculations
- OpenStreetMap Nominatim for reverse geocoding
- Google Fonts for Amiri Arabic font
- Tailwind CSS for styling
