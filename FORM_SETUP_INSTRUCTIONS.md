# QUICK SETUP - Make Your Contact Form Work! 

## 🚀 5-Minute Setup with Web3Forms (Recommended)

### Step 1: Get Your Free Access Key (1 minute)
1. Go to: https://web3forms.com
2. Enter your email: info@nviewmedia.com
3. Click "Get Access Key"
4. Check your email - you'll receive an access key like: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6"

### Step 2: Add Key to Your Website (30 seconds)
1. Open `index.html` in your code editor
2. Find line 378 (search for "YOUR-ACCESS-KEY-HERE")
3. Replace `YOUR-ACCESS-KEY-HERE` with your actual key
4. Save the file

### Step 3: Test It! (30 seconds)
1. Open your website in a browser
2. Fill out the form
3. Click Send Message
4. Check your email - you should receive the submission!

## ✅ That's It! Your form now:
- Sends you an email for every submission
- Works immediately (no server needed)
- Includes spam protection
- Is completely free (up to 250 submissions/month)

---

## 📊 Want to Save to Google Sheets Too?

### Option A: Use Web3Forms Dashboard
1. Log into Web3Forms with your email
2. Go to "Integrations"
3. Connect Google Sheets
4. All submissions will auto-save to your spreadsheet

### Option B: Use Zapier (Free)
1. Create free Zapier account: https://zapier.com
2. Create new Zap:
   - Trigger: Web3Forms → New Submission
   - Action: Google Sheets → Create Spreadsheet Row
3. Connect your Google account
4. Map the form fields to spreadsheet columns
5. Turn on the Zap

---

## 🎨 Customize Success Page (Optional)

Right now, after submission, users see Web3Forms' success page. To use your own:

1. Create a file called `thank-you.html` in your project
2. In `index.html`, find line 381
3. Change the redirect URL from `https://web3forms.com/success` to `thank-you.html`

Example thank-you.html:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Thank You - NView Media</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="hero" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div class="container" style="text-align: center;">
            <h1 style="color: #ff4500;">Thank You!</h1>
            <p style="color: #b8b8b8;">We've received your message and will get back to you within 24 hours.</p>
            <a href="index.html" class="btn btn-primary" style="margin-top: 2rem;">Back to Home</a>
        </div>
    </div>
</body>
</html>
```

---

## 🔧 Advanced: Stay on Same Page (AJAX)

If you don't want the page to refresh/redirect:

1. Open `script.js`
2. Find line 130 (the comment `/* e.preventDefault();`)
3. Uncomment the AJAX code (remove `/*` and `*/`)
4. The form will now submit without leaving the page
5. Success/error messages appear below the form

---

## 📧 Email Formatting

Your emails will look like this:

**Subject:** New Contact from NView Media Website

**From:** NView Media Contact Form

**Message:**
```
Name: John Smith
Email: john@example.com
Phone: (555) 123-4567
Service: Corporate Video Production
Message: We need a promotional video for our new product launch...
```

---

## 🛡️ Spam Protection

The form includes:
- Honeypot field (invisible checkbox that bots fill out)
- Web3Forms has built-in spam filtering
- reCAPTCHA can be added if needed (in Web3Forms dashboard)

---

## ❓ Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify access key is correct
- Make sure email in Web3Forms matches your email

**Form not submitting?**
- Check browser console for errors (F12)
- Ensure all required fields are filled
- Try different browser

**Want multiple recipient emails?**
- Add them in Web3Forms dashboard under "Settings"

---

## 📞 Need Help?

- Web3Forms Docs: https://docs.web3forms.com
- Web3Forms Support: support@web3forms.com
- Common issue: Make sure to remove quotes around the access key

---

That's all! Your contact form is now fully functional and sending emails! 🎉