# Setup Checklist - Make Sure Everything Works

## ✅ Backend (Server) Setup

### 1. Environment Variables (`.env` in `server/` directory)
Create a `.env` file in the `server/` directory with:

```env
MONGO_URI=mongodb+srv://software:39028@cluster0.fnkfgzp.mongodb.net/?appName=Cluster0
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
NODE_MAILER_USER=your_email@gmail.com
NODE_MAILER_PASS=your_email_password
STRIPE_KEY=sk_test_your_stripe_secret_key
```

### 2. Install Dependencies
```bash
cd server
npm install
```

### 3. Start Server
```bash
npm start
```

**Expected output:**
- ✅ MongoDB connected successfully!
- Server Running on🚀: 5000

---

## ✅ Frontend (Client) Setup

### 1. Environment Variables (`.env.local` in `client/` directory)
Create a `.env.local` file in the `client/` directory with:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 2. Install Dependencies
```bash
cd client
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

**Expected output:**
- Ready on http://localhost:3000

---

## ✅ Quick Verification Tests

### Backend Tests:
1. **Health Check**: Open `http://localhost:5000/` in browser
   - Should see: "Event Management micro services API."

2. **Get All Events**: `http://localhost:5000/getallevents`
   - Should return JSON array (may be empty if no events)

### Frontend Tests:
1. **Landing Page**: `http://localhost:3000/`
   - Should load with light blue theme
   - "Now showing" events carousel should appear
   - Theme toggle button should work

2. **Signup Page**: `http://localhost:3000/users/signup`
   - Form should load
   - Email verification should work (sends OTP)
   - Any OTP should be accepted (validation disabled)

3. **User Dashboard**: `http://localhost:3000/users/dashboard`
   - Should show events grid (if logged in)
   - Filter should work

4. **Admin Dashboard**: `http://localhost:3000/admin/dashboard`
   - Should show admin's events (if logged in)

---

## ⚠️ Common Issues & Fixes

### MongoDB Connection Fails:
- Check that `MONGO_URI` is in `.env` file
- Verify MongoDB Atlas IP whitelist includes your IP (or `0.0.0.0/0` for all)
- Check username/password are correct

### Frontend Can't Connect to Backend:
- Verify `NEXT_PUBLIC_API_URL=http://localhost:5000` in `.env.local`
- Make sure backend server is running on port 5000
- Check browser console for CORS errors

### Images Not Showing:
- Verify image URLs are full URLs (starting with `http://` or `https://`)
- Check `next.config.js` allows the image domain
- For local images, use `/img/filename.jpg` format

### Theme Not Working:
- Check browser console for errors
- Verify `ThemeContext.js` is imported in `_app.js`
- Clear browser cache/localStorage

---

## 📝 Notes

- **OTP Validation**: Currently disabled - any OTP will be accepted
- **Registration Number**: Now optional (VIT roll number removed)
- **Theme**: Light blue with dark text (default)
- **Platform Name**: Changed from "InVITe" to "ZONE"


