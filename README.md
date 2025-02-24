# FunChat - Real-time Chat Application

FunChat is a real-time chat application built with modern web technologies, providing a seamless messaging experience with authentication, WebSocket support, and a clean UI.

##  Features
- 🔐 **Authentication** using JWT (JSON Web Tokens)
- 💬 **Real-time messaging** powered by Socket.io
- 📄 **Database** using PostgreSQL with Prisma ORM
- 🌐 **Backend** built with Node.js & TypeScript
- 🎨 **Frontend** using React, TypeScript, Tailwind CSS, and Vite
- 📦 **State management** with Zustand
- 📌 **Dynamic Avatars** via [avatar.iran.liara.com](https://avatar.iran.liara.com)
- ☁️ **Deployed on Render** with NeonDB for database hosting

## 🛠 Tech Stack
### **Frontend**
- React + TypeScript
- Tailwind CSS
- Zustand for state management
- Vite for fast development

### **Backend**
- Node.js + TypeScript
- Express.js
- Prisma ORM
- PostgreSQL (NeonDB)
- JWT authentication
- Socket.io for real-time communication

### **Deployment**
- **Frontend**: Deployed on Render
- **Backend**: Deployed on Render
- **Database**: Hosted on NeonDB


## 🔧 Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (or use NeonDB)
- [Git](https://git-scm.com/)

### **Clone the repository**
```sh
git clone https://github.com/shivani091995/FunChat.git
cd FunChat
```

### **Backend Setup**
```sh
cd backend
npm install
npx prisma migrate dev  # Run database migrations
npm run dev  # Start the backend server
```

### **Frontend Setup**
```sh
cd ../frontend
npm install
npm run dev  # Start the frontend development server
```

##  Environment Variables
Create a `.env` file in the `backend/` directory and configure:
```env
DATABASE_URL="your_neon_db_url"
JWT_SECRET="your_secret_key"
CLIENT_URL="http://localhost:5173"
```

## Usage
- Run `npm run dev` in both frontend and backend directories.
- Open `http://localhost:5173` to access FunChat.
- Create an account, log in, and start chatting in real time.


