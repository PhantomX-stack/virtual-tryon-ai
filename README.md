# Real-Time Virtual Clothing Try-On using Hadoop Big Data Processing

AI-powered **virtual try-on** web application with real-time garment overlay, personalized outfit suggestions based on skin tone, body shape, and height, plus a Hadoop-backed big data layer for large-scale fashion analytics.

**Perfect for beginners** - Easy to install and run even on your first GitHub clone.

## 🚀 Try It Live

**[CLICK HERE TO VIEW THE LIVE DEMO WEBSITE](https://redesigned-acorn-6j5g9rwp665356jr.github.dev:8000/index.html)**

The website will load showing:
- Real-time virtual try-on interface
- AI Features showcase
- Hadoop Big Data Processing info
- System status indicators
- Step-by-step installation guide

---

## ⚡ Features

- **Real-time virtual try-on** from webcam or photo upload
- **AI body analysis**: Auto-detect height, measurements, body shape
- **Skin tone detection** with personalized color/outfit suggestions
- **Active AI APIs**: Uses Hugging Face, TensorFlow.js, and MediaPipe (all free tier available)
- **React + Vite** full website frontend
- **Hadoop batch processing** for large-scale analytics
- **Express.js REST API** with zero-config setup

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|----------|
| Backend | Node.js + Express |
| Frontend | React + Vite + Tailwind |
| AI/CV | TensorFlow.js, MediaPipe, COCO-SSD |
| Body Measurement | MediaPipe Pose + Height Estimation |
| Skin Tone | Face detection + Color analysis |
| Big Data | Hadoop + Spark (optional) |
| Database | MongoDB/PostgreSQL |

---

## 📄 Requirements (Beginner-Friendly)

- **Node.js 18+** (includes npm) - Download: https://nodejs.org
- **Git** - Download: https://git-scm.com
- **Python 3.9+** (optional, for ML features)
- **Java 8+** (optional, only if using Hadoop)

**Pro tip**: Start without Python/Java - the core website works perfectly without them.

---

## 🚀 Step-by-Step: Run Everything in 5 Minutes

### **Step 0: Clone & Setup (2 min)**

```bash
git clone https://github.com/PhantomX-stack/virtual-tryon-ai.git
cd virtual-tryon-ai
cp .env.example .env
```

### **Step 1: Install Dependencies (2 min)**

```bash
npm install
cd frontend
npm install
cd ..
```

### **Step 2: Start Backend (30 sec)**

```bash
npm run dev
# Server running on http://localhost:5000
```

### **Step 3: Start Frontend (in new terminal, 30 sec)**

```bash
cd frontend
npm run dev
# Website on http://localhost:5173
```

### **Step 4: Open in Browser**

Go to `http://localhost:5173` - Done! ✅

---

## 📈 What You Can Do Now

1. **Upload a photo** of yourself
2. **Click "Analyze Body"** → Gets height, measurements, body type, skin tone
3. **Click "Try On Outfit"** → See clothes overlaid on your image
4. **Get AI suggestions** → Colors and styles based on your profile
5. **Virtual fitting room** → Real-time webcam try-on

---

## 🔧 Configuration (.env file)

```env
# BACKEND
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=27017
DB_NAME=virtual_tryon_db

# AI FEATURES (set to true to enable)
ENABLE_VIRTUAL_TRYON=true
ENABLE_BODY_ANALYSIS=true
ENABLE_COLOR_MATCHING=true
ENABLE_RECOMMENDATIONS=true

# EXTERNAL APIs (get these for free)
HUGGING_FACE_API_KEY=hf_xxxxxxxxxxxxx
AWS_S3_BUCKET=your-bucket
AWS_REGION=us-east-1

# HADOOP (optional, for big data analytics)
HADOOP_ENABLED=false
HADOOP_HOME=/usr/local/hadoop
```

---

## 📡 API Endpoints (Ready to Use)

### Health Check
```bash
GET /api/health
# Response: { status: "ok" }
```

### Upload Photo & Get Body Analysis
```bash
POST /api/analyze
Content-Type: multipart/form-data

Parameters:
- front_image: (JPG/PNG image file)
- side_image: (optional, for better measurements)

Response:
{
  "height_cm": 172,
  "chest_cm": 95,
  "waist_cm": 78,
  "hip_cm": 92,
  "body_shape": "rectangle",
  "skin_tone": "medium-warm",
  "gender_detected": "female"
}
```

### Get Outfit Recommendations
```bash
POST /api/suggestions
Content-Type: application/json

{
  "body_profile": { ... from /api/analyze ... },
  "preferences": {
    "style": "casual",
    "occasion": "everyday",
    "budget": "mid-range",
    "favorite_colors": ["blue", "black"]
  }
}

Response:
[
  {
    "name": "Classic Denim Jacket",
    "color": "#1F4788",
    "fit_score": 95,
    "reason": "Perfect for rectangle body type"
  },
  ...
]
```

### Virtual Try-On
```bash
POST /api/tryon
Content-Type: multipart/form-data

Parameters:
- image: (JPG/PNG image)
- clothing_type: "shirt" | "pants" | "shoes" | "dress"

Response:
{
  "tryon_image": "base64_encoded_image",
  "confidence": 0.92,
  "detected_regions": [ ... ]
}
```

---

## 🌈 AI Models Used (All Free & Active)

| Model | Purpose | Source | Free? |
|-------|---------|--------|-------|
| MediaPipe Pose | Body keypoint detection | Google | ✅ Yes |
| MediaPipe Face | Face detection + skin tone | Google | ✅ Yes |
| TensorFlow.js COCO-SSD | Clothing detection | TensorFlow | ✅ Yes |
| Hugging Face Inference | Advanced recommendations | HF API | ✅ Free tier |
| Height Estimation Model | Estimate height from pose | TensorFlow Hub | ✅ Yes |

---

## 📊 Hadoop Big Data Pipeline (Optional)

For analyzing large-scale user data and improving recommendations:

```bash
# 1. Logs are auto-saved to logs/events.log
# 2. Run batch job to aggregate data
hdfs dfs -mkdir -p /data/virtual_tryon/
hdfs dfs -put logs/events.log /data/virtual_tryon/

# 3. Process with Spark (easier than MapReduce)
cd hadoop/spark
spark-submit fashion_analytics.py

# Results updated in MongoDB for live recommendations
```

---

## 🐛 Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Reinstall Node.js and restart terminal |
| Port 5000 already in use | Change `PORT=5001` in `.env` |
| Port 5173 already in use | Vite auto-finds next available port |
| Module not found errors | Run `npm install` again in all folders |
| GPU out of memory | Set `ENABLE_GPU=false` in `.env` |

---

## 📂 Project Structure

```
virtual-tryon-ai/
├── server.js                 # Express API server
├── aiModel.js                # AI/ML integration
├── measurementProxy.js        # Body measurement API calls
├── skinToneService.js         # Skin tone analysis
├── .env.example              # Config template
├── package.json              # Node dependencies
├── requirements.txt          # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main React app
│   │   ├── pages/
│   │   │   ├── TryOnPage.jsx
│   │   │   ├── RecommendationsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   └── components/
│   │       ├── WebcamCapture.jsx
│   │       ├── UploadSection.jsx
└── └── OutfitCard.jsx
```

---

## 🎯‍♂️ Learning Path

1. **First**: Get website running (Step 0-4 above)
2. **Then**: Try uploading photos and analyzing body
3. **Next**: Integrate with your own AI models
4. **Advanced**: Set up Hadoop for production analytics
5. **Expert**: Deploy to Railway (your existing platform)

---

## 🚀 Deploy to Production (Railway)

1. Connect GitHub repo to Railway
2. Set environment variables from `.env`
3. Railway auto-detects Node.js + runs `npm start`
4. Frontend auto-builds on deploy
5. Live in 2 minutes

---

## 📇 Need Help?

- **Issues**: Open GitHub issue
- **Questions**: Check existing issues first
- **PRs**: Welcome! For new features, open issue first

---

**Made with ❤️ by PhantomX - Easy Setup Edition**
