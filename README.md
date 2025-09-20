# Mpesa Daraja Next.js Integration

A **Next.js + Tailwind CSS** application demonstrating how to integrate **M-Pesa Daraja API** for seamless mobile money payments in Kenya.  
This project is built with **TypeScript** and styled with **Shadcn UI & TailwindCSS**.

---

##  Features

-  **M-Pesa STK Push (Lipa na M-Pesa)** integration  
-  **User-friendly payment form** (phone + amount)  
-  **TailwindCSS + Shadcn UI** components  
-  **TypeScript support**  
-  **Ready for deployment**  

---

## 🛠 Tech Stack

| Technology         | Description                  |
|-------------------|------------------------------|
| **Next.js**       | React framework              |
| **Tailwind CSS**  | Utility-first CSS            |
| **Shadcn UI**     | UI Components                |
| **M-Pesa Daraja API** | Mobile payment gateway    |

---

## 📂 Project Structure

```bash
├── app/
│   └── page.tsx          # Main payment form page
├── components/ui/        # Shadcn UI components (Card, Button, Input, Label)
├── public/               # Static files
├── styles/               # Tailwind CSS styles
├── package.json
└── README.md
``` 
---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/mpesa-daraja-nextjs.git
cd mpesa-daraja-nextjs
``` 
## 🛠 Setup

---
### 2. Install dependencies
```bash
npm install
``` 
---
### 3. Configure Environment Variables
Create a .env.local file in the root directory and add your M-Pesa credentials:
```bash
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_PASSKEY=your_passkey
MPESA_SHORTCODE=your_shortcode
MPESA_CALLBACK_URL=https://yourdomain.com/api/callback
``` 
---

### 4. Run the development server
```bash
npm run dev
``` 
Visit http://localhost:3000
 in your browser.

---
## 📸 Screenshots
_(Optional: Add screenshots of your UI here)_

---

## 📝 API Routes

| Route            | Method | Description               |
|-----------------|--------|---------------------------|
| `/api/stkpush`  | POST   | Initiate M-Pesa STK Push   |
| `/api/callback` | POST   | Handle M-Pesa callback     |

---

## 📜 License
MIT License © 2025 YOUR NAME



