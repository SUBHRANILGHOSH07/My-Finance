---

# 💰 My-Finance — Personal Finance Tracker

**My-Finance** is a full-stack personal finance tracking web application built with the MERN stack. It empowers users to manage accounts, track transactions, and execute transfers with ease, visualized through an interactive analytics dashboard.

### 🔗 [View Live Demo](https://my-finance-frontend-wheat.vercel.app/sign-in)

---

## 📑 Table of Contents

* [Features](https://www.google.com/search?q=%23-features)
* [Tech Stack](https://www.google.com/search?q=%23-tech-stack)
* [Project Structure](https://www.google.com/search?q=%23-project-structure)
* [Database Schema](https://www.google.com/search?q=%23-database-schema)
* [Installation & Setup](https://www.google.com/search?q=%23-installation--setup-run-locally)
* [Environment Variables](https://www.google.com/search?q=%23-environment-variables)
* [Future Enhancements](https://www.google.com/search?q=%23-future-enhancements)
* [Author](https://www.google.com/search?q=%23-author)

---

## 🚀 Features

### ✅ Authentication & Security

* **Secure Access:** Robust Sign Up and Sign In functionality.
* **JWT Auth:** JSON Web Token-based session management.
* **Encryption:** Passwords hashed using `bcrypt` for maximum security.
* **Route Protection:** Fully protected frontend routes and backend API endpoints.

### ✅ Account Management

* **Multi-Account Support:** Manage Cash, Crypto, PayPal, and Visa Debit Cards.
* **Automation:** Auto-generated unique account numbers.
* **Live Updates:** Real-time view of account details and balances.

### ✅ Transactions & Transfers

* **Comprehensive History:** View detailed logs of all income and expenses.
* **Smart Search:** Filter by description, source, or status.
* **Date Filtering:** Analyze spending within specific date ranges.
* **Money Transfer:** Atomic fund transfers between accounts with automatic balance reconciliation.
* **Excel Export:** Download transaction history as `.xlsx`.

### ✅ Dashboard Analytics

* **Overview:** Cards for Total Balance, Total Income, and Total Expense.
* **Visualizations:**
* Monthly activity line charts.
* Income vs. Expense doughnut charts.


* **Summary:** Quick view of the latest transactions.

### ✅ UI/UX

* **Responsive:** Fully optimized for mobile and desktop.
* **Themes:** Built-in Dark Mode support.

---

## 🛠 Tech Stack

### **Frontend**

| Category | Technology |
| --- | --- |
| **Framework** | React.js |
| **Styling** | Tailwind CSS, Headless UI |
| **State** | Zustand |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios |
| **Forms** | React Hook Form |
| **Charts** | Recharts |
| **Utilities** | XLSX (Export), React Toastify (Notifications) |

### **Backend**

| Category | Technology |
| --- | --- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Auth** | JWT (jsonwebtoken), bcrypt |
| **Utilities** | dotenv, cors |

### **Deployment**

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 📂 Project Structure

### Frontend Directory

```bash
src/
 ├── components/       # Reusable UI components
 ├── pages/            # Page views (Dashboard, Login, etc.)
 ├── store/            # Zustand state management stores
 ├── App.js            # Main application component
 └── main.jsx          # Entry point

```

### Backend Directory

```bash
server/
 ├── controller/       # Request logic
 ├── db/               # Database connection
 ├── libs/             # Utility libraries
 ├── middleware/       # Auth and validation middleware
 ├── models/           # Mongoose schemas
 ├── routes/           # API route definitions
 └── index.js          # Server entry point

```

---

## 📊 Database Schema

**User Model**

* `firstName`, `lastName`, `email`, `password`
* `contact`, `country`, `currency`
* `accounts` (Array of Account IDs)

**Account Model**

* `user_id` (Reference)
* `account_name`, `account_number`
* `account_balance` (Decimal128 for precision)

**Transaction Model**

* `user_id` (Reference)
* `description`, `status`, `source`
* `amount` (Decimal128)
* `type` (income/expense)

---

## ⚙️ Installation & Setup (Run Locally)

Follow these steps to set up the project locally.

### 1. Clone the Repositories

```bash
# Clone Backend
git clone https://github.com/SUBHRANILGHOSH07/My-Finance.git

# Clone Frontend
git clone https://github.com/SUBHRANILGHOSH07/MyFinanceFrontend.git

```

### 2. Backend Setup

Navigate to the backend folder, install dependencies, and start the server.

```bash
cd My-Finance
npm install
npm run dev

```

> The backend will run on: `http://localhost:8000`

### 3. Frontend Setup

Navigate to the frontend folder, install dependencies, and start the application.

```bash
cd MyFinanceFrontend
npm install
npm start

```

> The frontend will run on: `http://localhost:3000`

---

## 🔑 Environment Variables

To run the backend, create a `.env` file in the root of the **backend** directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000

```

---

## 🧠 Key Learning Outcomes

Building this project provided deep insights into:

* **Full-Stack Architecture:** seamlessly connecting React with Node/Express.
* **Security:** Implementing JWT middleware and secure password handling.
* **Database Mastery:** utilizing MongoDB aggregation pipelines and Mongoose sessions for atomic transactions (ACID properties).
* **Data Handling:** Managing precise financial data with Decimal128 types.

---

## 📌 Future Enhancements

* [ ] **Expense Categories:** Grouping expenses (Food, Travel, Bills).
* [ ] **Budgeting:** Monthly spending limits and alerts.
* [ ] **Recurring Transactions:** Automate Salary and EMI entries.
* [ ] **Advanced Security:** Refresh token implementation.
* [ ] **Mobile App:** React Native version for iOS/Android.

---

## 👨‍💻 Author

**Subhranil Ghosh**

* **GitHub:** [@SUBHRANILGHOSH07](https://github.com/SUBHRANILGHOSH07)

---

⭐ **If you found this project helpful, please give it a star!**

---


```
```
