# Contact Form Setup Guide for NView Media

## Method 1: Google Forms (Easiest - 5 minutes)

### Step 1: Create Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with these fields:
   - Name (Short answer, Required)
   - Email (Short answer, Required)
   - Phone (Short answer, Optional)
   - Service (Dropdown with options: Corporate Video, Marketing & Promotional, Event Documentation, Post-Production, Other)
   - Message (Paragraph, Required)

### Step 2: Link to Google Sheets
1. In Google Forms, click the "Responses" tab
2. Click the Google Sheets icon (green spreadsheet icon)
3. Create a new spreadsheet - this will auto-collect all submissions

### Step 3: Get Email Notifications
1. In Google Forms, click the three dots menu → "Get email notifications for new responses"
2. You'll get an email every time someone submits

### Step 4: Style to Match Your Site
1. In Google Forms, click the palette icon (Customize Theme)
2. Set header color to #ff4500 (your industrial orange)
3. Set background to #2d2d2d (steel gray)
4. Choose a clean font

### Step 5: Embed in Your Site
1. Click "Send" button → Click the embed icon (<>)
2. Copy the iframe code
3. Replace your current form with this iframe

---

## Method 2: Web3Forms (Professional - Free up to 250/month)

This keeps your custom HTML form but adds backend functionality:

### Step 1: Get Access Key
1. Go to [Web3Forms](https://web3forms.com)
2. Enter your email to get a free access key
3. You'll receive the key via email

### Step 2: Update Your HTML Form
Replace your current form in index.html with this:

```html
<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
    <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you">
    
    <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
    </div>
    <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
    </div>
    <div class="form-group">
        <input type="tel" name="phone" placeholder="Your Phone">
    </div>
    <div class="form-group">
        <select name="service" required>
            <option value="">Select a Service</option>
            <option value="corporate">Corporate Video Production</option>
            <option value="marketing">Marketing & Promotional</option>
            <option value="events">Event Documentation</option>
            <option value="post-production">Post-Production</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div class="form-group">
        <textarea name="message" rows="5" placeholder="Tell us about your project" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### Step 3: Connect to Google Sheets (Optional)
Web3Forms can webhook to Zapier/Make.com which then adds to Google Sheets:
1. In Web3Forms dashboard, set up a webhook
2. Use Zapier (free tier) to connect to Google Sheets
3. Each submission goes to both email AND spreadsheet

---

## Method 3: Google Apps Script (Most Control - Free)

This is the most customizable but requires more setup:

### Step 1: Create Google Sheet
1. Create a new Google Sheet with columns: Timestamp, Name, Email, Phone, Service, Message

### Step 2: Create Apps Script
1. In Google Sheets: Extensions → Apps Script
2. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.service,
    data.message
  ]);
  
  // Send email notification
  MailApp.sendEmail({
    to: "info@nviewmedia.com",
    subject: "New Contact Form: " + data.service,
    htmlBody: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong><br>${data.message}</p>
    `
  });
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy as Web App
1. Click "Deploy" → "New Deployment"
2. Type: Web App
3. Execute as: Me
4. Who has access: Anyone
5. Copy the Web App URL

### Step 4: Update JavaScript
Update your script.js to send to Apps Script:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('YOUR-APPS-SCRIPT-URL', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Show success message
        alert('Thank you! We\'ll be in touch soon.');
        contactForm.reset();
    } catch (error) {
        alert('There was an error. Please try again.');
    }
});
```

---

## Recommended Approach

**For immediate setup:** Use Web3Forms (Method 2)
- Keeps your custom design
- Free for small sites
- Email notifications built-in
- Can add Google Sheets via Zapier

**For Google ecosystem:** Use Google Apps Script (Method 3)
- Everything stays in Google
- Direct to Google Sheets
- Custom email formatting
- No third-party services

---

## Testing Your Form

1. Always test with your own email first
2. Check spam folder for notifications
3. Verify data appears in Google Sheets
4. Test on mobile devices
5. Add a thank you page or message

Need help implementing any of these? Let me know which method you prefer!