# VJ Innovate Website - Contact Information Update Guide

## How to Update Contact Information

You can easily change your company's contact information by editing just one file: `assets/js/config.js`

### What Can You Change?

✅ **Company Name & Tagline**
✅ **Office Address** 
✅ **Phone Numbers**
✅ **Email Addresses**
✅ **Business Hours**
✅ **Google Maps Location**
✅ **Social Media Links**

### Step-by-Step Instructions

1. **Open the Config File**
   - Navigate to `assets/js/config.js`
   - Open it in any text editor

2. **Update Your Information**
   
   **Company Details:**
   ```javascript
   name: "Your Company Name Here",
   tagline: "Your Company Tagline",
   ```
   
   **Address:**
   ```javascript
   address: {
       street: "Your Street Address",
       city: "Your City, State ZIP",
       country: "Your Country",
       full: "Complete Address<br>Line 2<br>Line 3"
   },
   ```
   
   **Phone Numbers:**
   ```javascript
   phones: [
       "+1 234-567-8900",  // Main phone
       "+1 234-567-8901"   // Secondary phone
   ],
   ```
   
   **Email Addresses:**
   ```javascript
   emails: {
       main: "info@yourcompany.com",
       courses: "courses@yourcompany.com",
       internship: "internship@yourcompany.com"
   },
   ```
   
   **Business Hours:**
   ```javascript
   businessHours: {
       weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
       saturday: "Saturday: 10:00 AM - 4:00 PM",
       sunday: "Sunday: Closed"
   },
   ```

3. **Update Google Maps**
   
   **Option 1: Get Google Maps Embed URL**
   - Go to [Google Maps](https://maps.google.com)
   - Search for your business address
   - Click "Share" → "Embed a map"
   - Copy the `src` URL from the iframe code
   - Paste it in the config file:
   
   ```javascript
   googleMaps: {
       embedUrl: "https://www.google.com/maps/embed?pb=YOUR_MAP_URL_HERE",
   },
   ```

4. **Update Social Media Links**
   ```javascript
   social: {
       facebook: "https://facebook.com/yourpage",
       twitter: "https://twitter.com/yourhandle",
       linkedin: "https://linkedin.com/company/yourcompany",
       instagram: "https://instagram.com/yourhandle"
   },
   ```

5. **Save the File**
   - Save `config.js`
   - The website will automatically use your new information!

### Example Complete Config

```javascript
const COMPANY_CONFIG = {
    name: "ABC Software Solutions",
    tagline: "Building the future with code",
    
    address: {
        street: "456 Innovation Ave",
        city: "Tech City, CA 90210",
        country: "USA",
        full: "456 Innovation Ave<br>Tech City, CA 90210<br>USA"
    },
    
    phones: [
        "+1 555-123-4567",
        "+1 555-765-4321"
    ],
    
    emails: {
        main: "hello@abcsoftware.com",
        courses: "learn@abcsoftware.com",
        internship: "careers@abcsoftware.com"
    },
    
    businessHours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 3:00 PM",
        sunday: "Sunday: Closed"
    },
    
    social: {
        facebook: "https://facebook.com/abcsoftware",
        twitter: "https://twitter.com/abcsoftware",
        linkedin: "https://linkedin.com/company/abc-software",
        instagram: "https://instagram.com/abcsoftware"
    },
    
    googleMaps: {
        embedUrl: "https://www.google.com/maps/embed?pb=YOUR_ACTUAL_MAP_URL"
    }
};
```

### ⚠️ Important Notes

- Make sure to keep the same structure (don't remove commas or brackets)
- Use `<br>` for line breaks in addresses
- Phone numbers should include country codes
- Test your Google Maps embed URL before saving
- All social media links should start with `https://`

### Need Help?

If you need assistance updating your contact information, contact your web developer or refer to this guide.

---

*This configuration system makes it easy to update your contact information without touching any HTML code!*