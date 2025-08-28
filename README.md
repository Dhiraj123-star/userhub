
# 🚀 UserHub - User Management System

A **modern, containerized user management application** built with **MariaDB**, **FastAPI**, **React**, **Nginx (SSL-enabled)**, and **Docker**.

---

## 🔎 Overview

**UserHub** is a simple yet powerful **user management system** that offers a clean, intuitive interface for managing user data.
It follows modern web development practices with a **RESTful API backend**, a **responsive React frontend**, and a **secure Nginx reverse proxy with SSL certificates**, all fully containerized for effortless deployment and development.

---

## ⚙️ Core Functionality

### 👤 User Management

* ➕ **Create Users**: Add new users with name, email, and phone details
* 👀 **View Users**: Display all users in a clean, grid-based layout
* ✏️ **Edit Users**: Update user details with real-time validation
* ❌ **Delete Users**: Remove users with confirmation prompts to prevent mistakes
* 💾 **Data Persistence**: Securely store all data in **MariaDB** with automatic timestamps

### 💻 User Interface Features

* 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
* ⚡ **Real-time Validation**: Instant feedback on forms
* 🚨 **Error Handling**: Clear error messages for better UX
* ⏳ **Loading States**: Visual indicators during operations
* 🎨 **Clean UX**: Simple, intuitive design with clear navigation

### 🛠️ Technical Features

* 🌐 **RESTful API**: Complete CRUD operations via documented endpoints
* 🔓 **CORS Enabled**: Smooth frontend-backend communication
* 🗄️ **Database Integration**: Automatic table creation in **MariaDB**
* 🐳 **Containerization**: Full **Docker** support for consistent setups
* 🔄 **Hot Reload**: Developer-friendly setup with auto code reloading
* ✅ **Data Validation**: Validation at both frontend & backend
* 🔐 **SSL with Nginx**: Reverse proxy with HTTPS (self-signed or real certificates)
* 🌍 **Single Entry Point**: Access frontend (`/`) and backend (`/api`) via **[https://localhost](https://localhost)**

---

## 🌟 Key Benefits

### 👨‍💻 For Developers

* ⚡ **Easy Setup**: Single command deployment with Docker Compose
* 🏗️ **Modern Stack**: Built with today’s best practices
* 📐 **Scalable Architecture**: Clear separation of frontend, backend, DB, and proxy
* 🔧 **Development Ready**: Hot reload & volume mounting for fast iteration
* 📖 **API Documentation**: Auto-generated with FastAPI
* 🔒 **HTTPS Local Dev**: Test SSL locally with Nginx

### 🙋 For Users

* ⚡ **Fast Performance**: Quick and smooth interactions
* 🔒 **Secure**: HTTPS-enabled out of the box
* ♿ **Accessible**: Clean and accessible interface design
* 📱 **Mobile Friendly**: Works across all devices

---

## 🔄 Application Flow

1. 🌍 **Access**: Users open the app via `https://localhost`
2. 📝 **Frontend**: React serves UI requests via Nginx
3. ⚡ **API Calls**: Nginx proxies `/api` to the FastAPI backend
4. 🗄️ **Data Storage**: Info securely stored in **MariaDB**
5. 🔧 **CRUD Operations**: Full create, read, update, delete support

---

## 🏆 Technology Advantages

* 🗄️ **MariaDB**: High-performance, reliable database
* ⚡ **FastAPI**: Modern Python framework with auto-docs & validation
* ⚛️ **React**: Component-based UI for scalability & reusability
* 🌐 **Nginx (SSL)**: Reverse proxy with secure HTTPS
* 🐳 **Docker**: Consistent environment across dev, test, and production

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

* Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ SSL Certificates

* Place your SSL certificates inside the `./certs/` folder:

  * `selfsigned.crt` (certificate)
  * `selfsigned.key` (private key)
* (If using real SSL, replace with your issued certificate + key)

### 3️⃣ Run the App

```bash
docker-compose up --build
```

### 4️⃣ Access the Application

* 🌍 Frontend: [https://localhost](https://localhost)
* ⚡ API: [https://localhost/api](https://localhost/api)

---
