# Handcrafted Love Letter - Media Customization Guide

This guide will show you exactly how to personalize the website with your own photos, voice note, background song, and video without breaking any code.

---

## 🎵 1. The Audio Files (Music & Voice Note)
The website features two distinct audio zones. Drop your MP3 files directly into the **`d:\love\public\`** folder:

| Audio Feature | Target File Path | How It Works |
| :--- | :--- | :--- |
| **Background Music** | `d:\love\public\song.mp3` | Starts playing in the background with a volume control bar when she clicks the final **"There's One Last Thing..."** button. |
| **Your Voice Note** | `d:\love\public\voice.mp3` | Plays inside **Section 05 (Letter From My Heart)** when she clicks the **"Play Voice"** button next to your signature. |

*Note: If either file is missing, the site automatically streams a romantic piano track as a fallback.*

---

## 📹 2. The Couple Video
The swipeable Polaroid book has a card titled **"Our Video 🎥"**. When clicked, it opens a video player.

* **Where to place it**: Save your MP3/MP4 video inside **`d:\love\public\video.mp4`**
* *Note: If missing, it streams an aesthetic hand-holding couples video.*

---

## 📸 3. The Polaroid Memory Photos
You can swap the placeholder scenery photos in the Polaroid slider with your own couple pictures.

### Step A: Save your photos
Save your 6 memory photos and 1 video thumbnail cover into the **`d:\love\public\`** folder using these exact names:
* `meeting.jpg` (For Lalbagh Meeting)
* `ride.jpg` (For First Bike Ride)
* `proposal.jpg` (For First Proposal)
* `letters.jpg` (For Letters)
* `adventure.jpg` (For Best Adventure)
* `eyes.jpg` (For Your Eyes)
* `video_cover.jpg` (Thumbnail for the Video)

### Step B: Update the code
Open [src/components/PolaroidBook.jsx](file:///d:/love/src/components/PolaroidBook.jsx) and replace lines **9 to 46** with these local file references:

```javascript
const polaroids = [
  {
    title: 'First Meeting 📍',
    short: 'The day my universe shifted, and I found my center.',
    long: 'I still remember the nervous flutter in my chest. The world was noisy, but the moment you smiled, everything else faded. It was the simplest beginning to the most beautiful journey of my life.',
    image: '/meeting.jpg',
    date: 'March 3, 2024',
  },
  {
    title: 'First Long Call 📞',
    short: 'Hours felt like seconds, and silence felt like peace.',
    long: 'We started talking and forgot about the time, the night, and the rest of the world. That was the moment I realized your voice was my favorite soundtrack, and talking to you was the easiest thing in the world.',
    image: '/call.jpg',
    date: 'March 18, 2024',
  },
  {
    title: 'First Trip 🚗',
    short: 'The winding roads and your hand in mine.',
    long: 'Our first escape from the daily hum. Navigating roads, singing along to the radio, and watching the green hills drift past. It wasn’t about the destination at all—it was about sharing the front seat of life with you.',
    image: '/trip.jpg',
    date: 'May 1, 2024',
  },
  {
    title: 'First Fight We Solved 🤝',
    short: 'Understanding each other, holding on tighter.',
    long: 'Arguments happen, but the way we held on and spoke with love instead of pride made me realize how genuine our bond is. We didn’t let go—we just grew closer, stronger, and more connected.',
    image: '/fight.jpg',
    date: 'June 10, 2024',
  },
  {
    title: 'Funniest Moment 😂',
    short: 'Uncontrollable laughter, belly aches, and messy smiles.',
    long: 'A simple silly mistake that turned into an hour of laughter we couldn’t stop. Seeing you laugh so hard your eyes crinkled is my absolute favorite mental picture. I hope I can make you laugh like that forever.',
    image: '/funny.jpg',
    date: 'August 24, 2024',
  },
  {
    title: 'One Perfect Day ✨',
    short: 'Doing absolutely nothing, but having everything.',
    long: 'No fancy plans, no busy schedules. Just a cozy blanket, watching the sun dip behind the mountains, talking about our dreams. It was a gentle reminder that my happiest places are just quiet moments beside you.',
    image: '/perfect.jpg',
    date: 'October 12, 2024',
  },
  {
    title: 'Our Video 🎥',
    short: 'Tap to watch our favorite captured moment.',
    long: 'A short video clip of us—smiling, talking, and enjoying life together. These are the seconds I wish I could pause forever.',
    image: '/video_cover.jpg',
    date: 'Captured',
    isVideo: true,
  },
];
```

---

## 👩‍🦰 4. Changing Her Cover Photo (Opening Screen)
If you want to swap the portrait of the girl on the opening cinematic screen:
1. Copy your cover photo to **`d:\love\src\assets\`**
2. Rename it to exactly **`her_photo.jpeg`** (overwrite the existing file).

---

## 🌟 5. Reading Her Secret 11:11 Birthday Wish
When she types her wish on the final screen and clicks "Send to the Stars", it is saved to a secure, private database.

* **Where to read it**: Open this link in any browser on your phone or computer:
  👉 **https://keyvalue.immanuel.co/api/KeyVal/GetValue/b56g084y/latest_wish**

It will display the exact text of her wish, letting you read it instantly!

