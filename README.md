# CustomStore

A simple e-commerce web application built with **Next.js**, **React**, **TailwindCSS**, and **MongoDB**.  
Users can view products, add new products (if logged in), manage products, and delete products. Authentication is handled via **Firebase**.

---

## Features

- User authentication with Firebase (email/password and Google)
- Add, view, manage, and delete products
- Responsive navbar with user profile dropdown
- SweetAlert2 for confirmation dialogs
- Toast notifications for success/error messages

---

## Setup & Installation

### 1. Clone the repository

For client:

```bash
git clone https://github.com/sohebakhter/ecommerce-client.git
cd client


For server:

git clone https://github.com/sohebakhter/ecommerce-server.git
cd server

2. Install dependencies
npm install

3. Environment variables

Create a .env.local file in both client and server (if required). Example for server:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Example for client (Firebase):

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
...

4. Run the project

Server:

npm run dev


Client:

npm run dev


Visit http://localhost:3000
 to view the app.

Route Summary
Route	Method	Description	Access
/	GET	Home page	Public
/products	GET	List all products	Public
/products/:id	GET	View single product	Public
/add-product	GET/POST	Add new product	Authenticated
/manage-product	GET	Manage existing products	Authenticated
/products/:id	DELETE	Delete product	Authenticated
/login	GET/POST	User login	Public
/about	GET	About page	Public
/contact	GET	Contact page	Public
Technologies Used

Next.js (App Router)

React.js

TailwindCSS + DaisyUI

Firebase Auth

MongoDB + Express

React-Toastify for notifications

SweetAlert2 for alerts
```
