📚 LMS – Learning Management System

Create, Manage, and Learn Online

📖 About

This Learning Management System (LMS) enables educators to create and manage courses, while students can enroll, learn, and track progress.
It integrates authentication with Clerk, secure payments via Stripe, and supports role-based access for seamless learning experiences.

✨ Features

👩‍🏫 Educator Role – Educators can create, edit, and manage courses.

🎓 Student Enrollment – Students can browse and enroll in courses.

📚 Course Management – Includes chapters, lectures, and structured content.

💳 Payment Integration – Supports Stripe payments for premium courses.

🔑 Authentication – Powered by Clerk (secure login & role-based access).

📊 Educator Dashboard – View student enrollments and course statistics.

☁️ Cloud Integration – Media uploads & course materials management.

🛠️ Tech Stack

Frontend: React.js + Tailwind CSS

Backend: Node.js + Express.js

Database: MongoDB

Authentication: Clerk

Payments: Stripe

File Uploads: Cloudinary

🚀 Installation & Setup

Clone the repository:

git clone [https://github.com/your-username/LMS.git](https://github.com/pearlkayastha1512/lms)
cd LMS


Install dependencies:

npm install


Create a .env file and add your environment variables:

MONGODB_URI=your_mongodb_connection_string
CLERK_API_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
JWT_SECRET=your_jwt_secret
PORT=5000


Start the development server:

npm run dev

📂 Project Structure
LMS/
│── backend/         # Express.js APIs & routes
│── frontend/        # React.js client
│── models/          # MongoDB models
│── controllers/     # Business logic
│── middlewares/     # Authentication & role handling
│── configs/         # Clerk, Stripe, Cloudinary configs
│── public/          # Static assets
│── README.md        # Documentation

🎯 Use Cases

Students can enroll and access structured learning content.

Educators can monetize courses by integrating payments.

A platform to bridge educators and learners in one place.

🏆 Achievements

✅ Integrated Clerk authentication with secure role-based access.

✅ Built Stripe-powered payment system for course purchases.

✅ Implemented educator dashboard for insights.

<img width="1439" height="790" alt="Screenshot 2025-08-18 at 12 26 12 PM" src="https://github.com/user-attachments/assets/2eaa7265-c7dd-4b4d-b091-57b12aa0e745" />
<img width="1439" height="790" alt="Screenshot 2025-08-18 at 12 26 20 PM" src="https://github.com/user-attachments/assets/40fe4271-de9e-4db8-9d4c-ec869f3ab78b" />
<img width="1439" height="790" alt="Screenshot 2025-08-18 at 12 26 28 PM" src="https://github.com/user-attachments/assets/2a190b02-7b40-480c-98b7-8a3bf68a90fd" />
<img width="1439" height="790" alt="Screenshot 2025-08-18 at 12 26 41 PM" src="https://github.com/user-attachments/assets/f366563d-04e2-4a51-901e-975a0f2fb4e0" />

🔗 Live Demo
https://lms-lime-omega.vercel.app/

👨‍💻 Developed By

Saket Srivastava
📜 License

This project is licensed under the MIT License – see the LICENSE file for details.

