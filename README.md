````md
# 💰 My-Finance — Personal Finance Tracker (MERN Stack)

My-Finance is a full-stack personal finance tracking web application that helps users manage accounts, transactions, and transfers with interactive dashboard analytics.

🔗 **Live Demo:** https://my-finance-frontend-wheat.vercel.app/sign-in

---

## 🚀 Features

### ✅ Authentication & Security
- Secure **Sign Up / Sign In**
- **JWT-based authentication**
- Password encryption using **bcrypt**
- Protected routes (frontend + backend)

### ✅ Account Management
- Create multiple accounts (Cash, Crypto, PayPal, Visa Debit Card)
- Auto-generated account number
- View account details and balances

### ✅ Transactions
- Add expense transactions
- View transaction history
- Search transactions by **description/source/status**
- Filter transactions using **date range (From–To)**

### ✅ Money Transfer
- Transfer funds between accounts
- Automatic balance updates
- Creates both income and expense transaction records for transfers

### ✅ Dashboard Analytics
- Total Balance, Total Income, Total Expense
- Monthly activity line chart
- Income vs Expense doughnut chart
- Latest transactions summary

### ✅ Export Data
- Export transactions as **Excel (.xlsx)** file

### ✅ UI/UX Enhancements
- Responsive design
- Dark mode support

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Zustand (State Management)
- React Router DOM
- Axios
- React Hook Form
- Headless UI
- Recharts
- React Toastify
- XLSX

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- cors

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## 📂 Project Structure

### Frontend
```bash
src/
 ├── components/
 ├── pages/
 ├── store/
 ├── App.js
 └── main.jsx
````

### Backend

```bash
server/
 ├── controller/
 ├── db/
 ├── libs/
 ├── middleware/
 ├── models/
 ├── routes/
 └── index.js
```

---

## ⚙️ Installation & Setup (Run Locally)

### ✅ Clone Repositories

```bash
git clone https://github.com/SUBHRANILGHOSH07/My-Finance.git
git clone https://github.com/SUBHRANILGHOSH07/MyFinanceFrontend.git
```

---

## 🔥 Frontend Setup

```bash
cd MyFinanceFrontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔥 Backend Setup

```bash
cd My-Finance
npm install
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

## 🔑 Environment Variables (.env)

Create a `.env` file in backend root folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

---

## 🔐 Authentication Flow

1. User logs in → backend generates JWT token
2. Token stored in localStorage
3. Every protected request sends:

```http
Authorization: Bearer <token>
```

4. Backend middleware verifies and injects userId into request

---

## 📊 Database Models

### ✅ User Model

* firstName, lastName, email, password
* contact, country, currency
* accounts[]

### ✅ Account Model

* user_id
* account_name
* account_number
* account_balance (Decimal128)

### ✅ Transaction Model

* user_id
* description
* status
* source
* amount (Decimal128)
* type (income/expense)

---

## 🧠 Key Learning Outcomes

* Full-stack development using MERN stack
* JWT authentication + middleware security
* MongoDB schema design and aggregation pipeline
* Mongoose sessions for atomic money transfers and transactions
* Deployment using Vercel + Render
* Transaction export to Excel using XLSX

---

## 📌 Future Enhancements

* Add expense categories (Food, Travel, Bills, etc.)
* Monthly budgeting and spending alerts
* Recurring transactions (Salary, EMI, Rent, etc.)
* Refresh tokens for enhanced security
* Pagination for huge transaction history
* Mobile app version using React Native

---

## 👨‍💻 Author

**Subhranil Ghosh**
GitHub: [https://github.com/SUBHRANILGHOSH07](https://github.com/SUBHRANILGHOSH07)

---

⭐ If you liked this project, don’t forget to **give it a star**!

```
```
