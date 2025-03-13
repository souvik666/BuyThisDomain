# 🚀 Domain Selling Landing Page

A **React + Chakra UI** landing page for selling your domain with a contact form to collect leads. **Quick to set up and deploy!**

## ⭐ Features

✅ Modern & responsive UI  
✅ Contact form for inquiries  
✅ Dynamic domain display  
✅ API support for tracking  
✅ Firebase backend for authentication and database  
✅ Easy deployment with Vite

## 🔧 Setup

### 1️⃣ Install Requirements

Make sure you have:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### 2️⃣ Clone & Install

```sh
git clone https://github.com/your-username/domain-landing.git
cd domain-landing
npm install
```

### 3️⃣ Configure Firebase

#### Get Firebase Credentials
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Navigate to **Project Settings**.
4. Under the **General** tab, find **Your apps** and click **Web app**.
5. Register the app and copy the Firebase config object.
6. Enable **Authentication** (if needed) and set up **Firestore Database**.

#### Add Your `.env` File
Create a `.env` file and paste:

```ini
VITE_API_KEY="your-api-key"
VITE_AUTH_DOMAIN="your-auth-domain"
VITE_PROJECT_ID="your-project-id"
VITE_STORAGE_BUCKET="your-storage-bucket"
VITE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VITE_APP_ID="your-app-id"
VITE_MEASUREMENT_ID="your-measurement-id"
VITE_DATABASE_URL="your-database-url"
```

> 🔒 **Keep `.env` private!** Add it to `.gitignore`.

### 4️⃣ Run Locally

```sh
npm run dev
```

Your site is live at: **[http://localhost:5173](http://localhost:5173)**

## 🚀 Deploy

```sh
npm run deploy
```

This creates a `dist/` folder and deploys your site.

## 🤝 Contribute

Fork, improve, and submit a PR!

🐜 **License:** [MIT](LICENSE)

---

