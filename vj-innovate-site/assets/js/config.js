// Configuration file for VJ Innovate Software Solutions
// Edit this file to update contact information across the entire website

const COMPANY_CONFIG = {
    // Company Basic Information
    name: "VJ Innovate Software Solutions Pvt Ltd",
    tagline: "Empowering the next generation of developers",
    
    // Contact Information
    address: {
        street: "123 Tech Street, Innovation Hub",
        city: "Software City, State 12345",
        country: "India",
        full: "123 Tech Street, Innovation Hub<br>Software City, State 12345<br>India"
    },
    
    // Phone Numbers
    phones: [
        "+91 9440436178",
        "+91 9440436178"
    ],
    
    // Email Addresses
    emails: {
        main: "sksam3680@gmail.com",
        courses: "patansayedbasha786@gmail.com.com",
        internship: "internship@vjinnovate.com"
    },
    
    // Business Hours
    businessHours: {
        weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
        saturday: "Saturday: 10:00 AM - 5:00 PM",
        sunday: "Sunday: Closed"
    },
    
    // Social Media Links (update with your actual social media URLs)
    social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
    },
    
    // Google Maps Configuration
    // To get your Google Maps embed code:
    // 1. Go to Google Maps (maps.google.com)
    // 2. Search for your business address
    // 3. Click "Share" -> "Embed a map"
    // 4. Copy the src URL from the iframe and paste it below
    googleMaps: {
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.986!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUyLjgiTiA3M8KwNTknMDkuNiJX!5e0!3m2!1sen!2sus!4v1234567890",
        // Alternative: You can also provide coordinates for a simple map
        coordinates: {
            lat: 40.7488,
            lng: -73.9857
        }
    }
};

// Export for use in other JavaScript files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMPANY_CONFIG;
}