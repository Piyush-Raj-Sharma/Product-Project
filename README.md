
# 🛒 Single Vendor E-Commerce Web App

A modern, full-featured e-commerce frontend built using **React**, **Redux Toolkit**, **Tailwind CSS**, and **Vite**. This application supports product browsing, infinite scrolling, category filtering, cart management, admin operations, and even tracks user sessions or IP addresses (extendable).

---

## 🚀 Tech Stack & Tools

| Purpose            | Package Name                         |
|--------------------|--------------------------------------|
| ⚛ React Core       | `react`, `react-dom`                 |
| ⚡ Vite Bundler     | `vite`                               |
| 🎨 Styling         | `tailwindcss`, `@tailwindcss/vite`   |
| 🧠 State Mgmt      | `@reduxjs/toolkit`, `react-redux`    |
| 📦 API             | `axios`                              |
| 🛠 Routing         | `react-router-dom@7`                 |
| 📥 Forms           | `react-hook-form`                    |
| ♾️ Infinite Scroll | `react-infinite-scroll-component`    |
| 🔔 Toasts          | `react-toastify`                     |
| 🎨 Icons           | `lucide-react`                       |
| 🔑 IDs             | `nanoid`                             |

> Dev dependencies include: ESLint, React plugin, Vite plugin for React, and type support.

---

## 📂 Folder Structure

```
frontend/
├── api/                 # Axios instance & config
├── assets/              # Static assets & images
├── components/          # Reusable UI components
├── pages/               # Main page components
├── store/               # Redux store, reducers, actions
├── styles/              # Tailwind config and global CSS
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.html           # Root HTML
```

---

## 🧪 Features

### 🧑‍💻 User Features
- ✅ View products with infinite scroll
- ✅ Filter products by category
- ✅ View product detail page
- ✅ Add/remove from cart
- ✅ Cart page with summary
- ✅ Real-time price & quantity calculation

### 🛠 Admin Features
- ✅ Add/update/delete products
- ✅ Pre-filled update forms
- ✅ Modal-based product update UX

### 🌐 Extra Functionalities
- ✅ Real-time **device IP fetching** (extensible)
- ✅ Handles deep linking to product pages
- ✅ Form validations
- ✅ Graceful loading & empty states
- ✅ Error boundaries

---

## 🌐 Real-Time IP Fetching (Optional Extension)

You can fetch the user's real-time IP address using a public API such as:

```js
const getUserIP = async () => {
  const res = await fetch("https://api64.ipify.org?format=json");
  const data = await res.json();
  console.log("User IP:", data.ip);
};
```

Use this inside `useEffect()` to log or store user IP for analytics, logging, or session-tracking.

---

## 📦 Getting Started

### 1. Clone the project
```bash
git clone https://github.com/your-username/ecommerce-frontend.git
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Then open your browser at `http://localhost:5173`

---

## 🔌 Backend/API Setup

You can use a mock REST API via:
- [JSON Server](https://github.com/typicode/json-server)
- Express.js with MongoDB (for production)

### Example JSON Server setup:
```bash
npm install -g json-server
json-server --watch db.json --port 3000
npx json-server db.json
```

Ensure API endpoints like `/products` and `/users` exist.

---

## 🌍 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect GitHub repo to [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Output directory: `dist`

### Backend (Render)
1. Deploy JSON Server or Node backend on [Render](https://render.com)
2. Update `baseURL` in `axiosconfig.js` with Render backend URL

---

## ✅ Scripts

| Script           | Description                         |
|------------------|-------------------------------------|
| `npm run dev`    | Start development server            |
| `npm run build`  | Create production build             |
| `npm run preview`| Preview production build locally    |
| `npm run lint`   | Run ESLint code checks              |

---

## 📸 Screenshots

- Product Listing<img width="1920" height="1080" alt="Screenshot (378)" src="https://github.com/user-attachments/assets/50295a8d-4f73-4ac1-9427-e8ade06dce00" />

- Product Details<img width="1919" height="1079" alt="Screenshot 2025-07-10 011123" src="https://github.com/user-attachments/assets/7d658671-804a-4ad7-bf99-9aa2c1515366" />

- Cart Page<img width="1919" height="1079" alt="Screenshot 2025-07-10 011013" src="https://github.com/user-attachments/assets/ec0fa534-034c-4c98-839d-2ce2a3ca614a" />

- User Profile with IP <img width="1919" height="1079" alt="Screenshot 2025-07-10 011032" src="https://github.com/user-attachments/assets/96a37c7e-74c6-45f6-87b9-305a7ead5e96" />

---

## 💡 To-Do & Enhancements

- [ ] Add user authentication (JWT, Firebase, etc.)
- [ ] Save cart to backend per user
- [ ] Add reviews & ratings
- [ ] Payment gateway (Stripe/PayPal)
- [ ] PWA support

---

## 🤝 Author

**Piyush Raj**  
🔗 [LinkedIn](https://www.linkedin.com/in/piyush-raj-sharma/) | 💻 React Developer | 🚀 Open to opportunities

---

## 📃 License

MIT License. Free for personal or educational use.

---
