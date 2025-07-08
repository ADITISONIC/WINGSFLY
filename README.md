Sure! Here’s the full README.md content ready for copy-pasting into your project:

⸻


# 📱 DESCRIPTION

This is a beautifully designed productivity app built with **React Native**. It helps users focus on daily goals by organizing tasks, tracking progress, and providing motivational quotes — all within a visually calming pastel-colored interface.

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ADITISONIC/WINGSFLY/tree/main
```
2. Install dependencies

Using npm:
```bash
npm install
```
Or with Yarn:
```bash
yarn install
```
3. Run the app

If you’re using Expo:
```bash
npx expo start
```
If you’re using React Native CLI:
```bash
npx react-native run-android
# or
npx react-native run-ios
```

⸻

📁 Folder Structure Overview

DailyFocus/
├── assets/                 # Fonts and images
│   ├── fonts/              # Custom fonts (e.g., Anton, OpenSans)
│   └── images/             # Task-related icons and photos
├── components/             # Reusable UI components
│   ├── TaskItem.tsx        # Task display component with dynamic styles
│   ├── DateSlider.tsx      # Weekly date slider with pager view
│   └── QuoteCard.tsx       # Motivational quote and progress bar
├── data/                   # Static/mock task data
├── screens/                # App screens (e.g., HomeScreen.tsx)
├── App.tsx                 # Main entry file
├── react-native.config.js  # Font linking configuration
├── package.json
└── README.md


⸻

🧠 Key Decisions & Assumptions

🎨 Visual Design
	•	Pastel color palette is used to reduce visual strain and create a focused mood.
	•	A darker shade of each background color is computed for better text contrast.
	•	Each task is assigned a photo icon in sequence to maintain consistency.

🧾 Fonts & Styling
	•	Uses @expo-google-fonts/open-sans and anton for custom typography.
	•	If not using Expo, fonts are linked using react-native.config.js:
```bash
// react-native.config.js
module.exports = {
  assets: ['./assets/fonts'],
};
```
Then run:
```bash
npx react-native link
```
🗓️ Date Picker & Weekly Navigation
	•	Uses react-native-pager-view to slide through weekly date sets (2 weeks before and after current).
	•	Integrated @react-native-community/datetimepicker for native date selection.

✅ Task Display
	•	Each task includes:
	•	Title
	•	Icon/photo
	•	Time with colored background
	•	Tags and type
	•	Status icon (done, inprogress, pending) via Ionicons

📊 Progress & Quotes
	•	A linear progress bar using react-native-linear-gradient with animated circle.
	•	Quote section displays a daily motivational quote.

⸻

🖼️ Assets (Images & Videos)
	•	Task images (PNG) are stored in assets/images/ and assigned by index in order.
	•	Add new photos by placing them in assets/images and referencing them like:

<Image source={require('../assets/images/task1.png')} />

	•	Git will track image/video assets as long as they’re committed:

```bash
git add assets/images/
git commit -m "Add task icons"
git push
```

⸻

🔧 Tech Stack
	•	React Native (with Expo optional)       
	•	TypeScript
	•	react-native-pager-view
	•	@react-native-community/datetimepicker
	•	react-native-linear-gradient
	•	react-native-vector-icons/Ionicons
	•	date-fns
	•	Custom fonts (Anton, OpenSans)

⸻

✅ Features
	•	🗓️ Swipeable weekly date slider
	•	🧠 Daily inspirational quote
	•	✅ Task list with visual cues (color, icon, tags)
	•	📊 Progress bar with animation
	•	🎨 Soft pastel theme and dynamic color styling

⸻

📌 Assumptions
	•	Tasks are stored in memory/static JSON for now (no backend).
	•	No authentication or user-specific data handling.
	•	Image assignment is handled in order of appearance — not per task ID.

⸻

💡 Future Enhancements
	•	Add Firebase/SQLite backend for persistent task storage.
	•	Add user profile and settings.
	•	Allow user to mark tasks as complete with state sync.
	•	Push notifications for scheduled tasks.

⸻

🙌 Acknowledgements
	•	Icons by Ionicons
	•	Fonts by Google Fonts
	•	UI inspiration from pastel and focus-friendly productivity tools

---
