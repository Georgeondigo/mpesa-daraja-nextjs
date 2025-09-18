Mpesa Daraja Next.js Integration

A Next.js + Tailwind CSS application demonstrating how to integrate M-Pesa Daraja API for seamless mobile money payments in Kenya. This project is built with TypeScript and styled with Shadcn UI & TailwindCSS.

🚀 Features

M-Pesa STK Push (Lipa na M-Pesa) integration

User-friendly payment form (phone + amount)

TailwindCSS + Shadcn UI components

TypeScript support

Ready for deployment

🛠 Tech Stack

Next.js
 – React framework

Tailwind CSS
 – Utility-first CSS

Shadcn UI
 – UI Components

M-Pesa Daraja API
 – Mobile payment gateway

📂 Project Structure
├── app/
│   └── page.tsx          # Main payment form page
├── components/ui/        # Shadcn UI components (Card, Button, Input, Label)
├── public/               # Static files
├── styles/               # Tailwind CSS styles
├── package.json
└── README.md

⚙️ Setup
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/mpesa-daraja-nextjs.git
cd mpesa-daraja-nextjs

2. Install dependencies
npm install

3. Configure Environment Variables

Create a .env.local file in the root directory and add your M-Pesa credentials:

MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_PASSKEY=your_passkey
MPESA_SHORTCODE=your_shortcode
MPESA_CALLBACK_URL=https://yourdomain.com/api/callback

4. Run the development server
npm run dev


Visit http://localhost:3000 in your browser.

📸 Screenshots

(Optional: add screenshots of your UI here)

📝 API Routes
Route	Method	Description
/api/stkpush	POST	Initiate M-Pesa STK Push
/api/callback	POST	Handle M-Pesa callback
