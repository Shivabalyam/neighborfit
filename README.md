# NeighborFit 🏘️

**NeighborFit** is a full-stack web application that helps users find neighborhoods that best match their lifestyle preferences — such as safety, affordability, public transport access, greenery, and walkability.

> Built using React, Node.js, Express, and MongoDB with Indian city data (Hyderabad, Bangalore, Mumbai).

---

## 🌟 Features

- Take user lifestyle preferences as input
- Match neighborhoods using a scoring algorithm
- Real data from major Indian cities
- Clean React frontend and scalable Express API

---

## 🧠 Tech Stack

| Frontend | Backend | Database       |
|----------|---------|----------------|
| React    | Express | MongoDB (Atlas) |

---

## 🚀 Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/neighborfit.git
cd neighborfit
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Create `.env` file in `/backend`**

```
PORT=5000
MONGO_URI=your-mongodb-uri
```

4. **Seed MongoDB with sample data**

```bash
node data/seed.js
```

5. **Run backend**

```bash
npm run dev
```

6. **Install frontend dependencies and run**

```bash
cd ../frontend
npm install
npm start
```

Visit `http://localhost:3000` to use the app.

---

## 📦 Deployment

| Layer     | Platform |
|-----------|----------|
| Backend   | Render   |
| Frontend  | Vercel   |

(See `deployment.md` for full deployment instructions.)

---

## 📄 Additional Documentation

| File          | Description                                      |
|---------------|--------------------------------------------------|
| `Research.md` | Problem statement, hypothesis, data validation   |
| `Algorithm.md`| Matching logic, trade-offs, testing approach     |
| `Reflection.md`| Limitations, evaluation, future improvements    |

---

## ✨ Author

Shiva Yadav

---
