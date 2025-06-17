Backend API Documentation for Library Management System

Base URL: https://library-management-backend-11aa.onrender.com/api/v1

Authentication Endpoints:
POST /auth/register - Register new user
POST /auth/verify-otp - Verify OTP
POST /auth/login - User login
GET /auth/logout - User logout
GET /auth/me - Get logged in user details
POST /auth/password/forgot - Forgot password
PUT /auth/password/reset/:token - Reset password
PUT /auth/password/update - Update password

Book Endpoints:
POST /book/admin/add - Add new book (Admin only)
GET /book/all - Get all books
DELETE /book/delete/:id - Delete book (Admin only)

Borrow Endpoints:
POST /borrow/record-borrow-book/:id - Record borrowed book (Admin only)
POST /borrow/borrow-book/:id - User borrow book
GET /borrow/borrowed-books-by-users - Get all borrowed books (Admin only)
GET /borrow/my-borrowed-books - Get user's borrowed books
PUT /borrow/return-borrowed-book/:bookId - Return borrowed book (Admin only)

User Endpoints:
GET /user/all - Get all users (Admin only)
POST /user/add/new-admin - Register new admin (Admin only)

Admin Credentials:
Email: jeffryallan26032001@gmail.com
Password: 12345678

Environment Variables Required:
MONGODB_URI - MongoDB connection string
JWT_SECRET_KEY - JWT secret key
COOKIE_EXPIRE - Cookie expiration time
SMTP_HOST - SMTP server host
SMTP_PORT - SMTP port
SMTP_SERVICE - SMTP service
SMTP_MAIL - SMTP email
SMTP_PASSWORD - SMTP password
FRONTEND_URL - Frontend application URL

Scheduled Tasks : ->

1 . Notify Users: Runs every 30 minutes to send email reminders for overdue books

2 . Clean Unverified Accounts: Runs every 5 minutes to remove unverified accounts older than 30 minutes
