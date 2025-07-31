# 📱 Islamic Prayer App

A beautiful, modern Islamic prayer application with prayer times, Quran reading, live location, and Islamic design elements.

## ✨ Features

### 🕌 **Prayer Times**
- Real-time prayer schedule display
- Current time with live updates
- Beautiful Islamic-themed UI

### 📍 **Live Location**
- High-accuracy GPS location (targets 50m accuracy)
- Multi-method GPS system for best results
- City and country detection
- Detailed accuracy information

### 📖 **Holy Quran**
- Complete Quran chapters list
- Search functionality
- Arabic text with English translations
- Audio and bookmark placeholders
- Interactive verse navigation

### 🎨 **Islamic Design**
- Beautiful Islamic logo with animations
- Geometric patterns and Islamic calligraphy
- Gold and green color scheme
- Responsive design for all devices

### 🛍️ **Islamic Products**
- Prayer beads, mats, Quran, and incense
- Product showcase section

## 🚀 Live Demo

Visit the live application: [Prayer App Demo](https://your-username.github.io/prayer-app/)

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript** - Interactive functionality
- **Geolocation API** - Location services
- **Nominatim API** - Reverse geocoding

## 📱 Features in Detail

### Location Accuracy System
- **Method 1**: Ultra high accuracy GPS (30s timeout)
- **Method 2**: Standard GPS (15s timeout)  
- **Method 3**: Network location (10s timeout)
- **Method 4**: Extended network (20s timeout)

### Accuracy Levels
- **Excellent** (≤5m) - "Excellent - < 5m"
- **Very High** (≤15m) - "Very High - < 15m"
- **High** (≤30m) - "High - < 30m"
- **Good** (≤50m) - "Good - < 50m" ⭐ **Target**
- **Fair** (≤100m) - "Fair - < 100m"
- **Low** (>100m) - "Low - > 100m"

### Quran Features
- **16 Sample Chapters** including Al-Fatiha, Al-Baqarah, Ya-Sin, Al-Ikhlas
- **Search Functionality** - Find chapters by name or Arabic text
- **Verse Navigation** - Previous/Next verse controls
- **Audio Placeholder** - Ready for audio integration
- **Bookmark System** - Save favorite verses

## 🎯 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Location services enabled for GPS features
- Internet connection for geocoding services

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/prayer-app.git
   ```

2. Open `index-fixed.html` in your web browser

3. Allow location access when prompted

## 📋 Usage

### Prayer Times
- View current time and prayer schedule
- Click on prayer cards for interactions

### Location Services
- Click "Get Location" button
- Allow browser location access
- Wait for GPS lock (10-30 seconds)
- View detailed location information

### Quran Reading
- Browse available chapters
- Use search to find specific chapters
- Click on chapters to read verses
- Navigate between verses using controls

## 🎨 Design Features

### Islamic Theme
- **Color Scheme**: Green (#4CAF50) and Gold (#FFD700)
- **Geometric Patterns**: Islamic-inspired designs
- **Typography**: Clean, readable fonts
- **Animations**: Smooth transitions and effects

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Ready**: Responsive grid layouts
- **Desktop Compatible**: Full desktop experience

## 🔧 Technical Details

### GPS Accuracy Optimization
```javascript
// Multi-method GPS system
function tryHighAccuracyGPS() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            if (position.coords.accuracy <= 50) {
                showPosition(position);
            } else {
                tryAlternativeGPS();
            }
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 }
    );
}
```

### Quran Data Structure
```javascript
const quranData = {
    1: {
        name: 'Al-Fatiha',
        arabic: 'الفاتحة',
        verses: [
            {
                number: 1,
                arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            }
            // ... more verses
        ]
    }
};
```

## 🌟 Future Enhancements

- [ ] **Real Prayer Times API** - Connect to prayer times service
- [ ] **Audio Recitation** - Add Quran audio playback
- [ ] **Qibla Direction** - Compass for prayer direction
- [ ] **Notifications** - Prayer time reminders
- [ ] **Offline Support** - PWA capabilities
- [ ] **More Quran Chapters** - Complete 114 chapters
- [ ] **User Accounts** - Save preferences and bookmarks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Islamic Design Elements** - Inspired by traditional Islamic art
- **Geolocation API** - Browser location services
- **Nominatim** - OpenStreetMap reverse geocoding
- **Quran Translations** - English translations of Quran verses

## 📞 Support

If you have any questions or need support, please open an issue on GitHub.

---

**Made with ❤️ for the Muslim community**

*May Allah bless this project and all who use it.* 