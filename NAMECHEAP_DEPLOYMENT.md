# Namecheap Deployment Guide for Guggu Creations

This website is designed and optimized as a high-performance, modern web application ready for deployment on **Namecheap Shared Hosting, Stellar / Stellar Plus, EasyWP, or cPanel hosting**.

---

## 1. Quick Deployment to Namecheap cPanel (Static / Single Page Application)

1. **Build the Production Assets:**
   Run the standard build command in the terminal:
   ```bash
   npm run build
   ```
   This compiles and optimizes all TypeScript, Tailwind styles, and bespoke imagery into the `/dist` directory.

2. **Zip the Contents of `dist/`:**
   Open the `/dist` folder on your computer and compress its contents into a `.zip` file (e.g. `guggu-website.zip`). 
   *Note: Zip the files inside `dist/` directly, so `index.html` is at the root of the archive.*

3. **Log In to Namecheap cPanel:**
   - Log in to your Namecheap account and navigate to your **cPanel** dashboard.
   - Click on **File Manager**.
   - Navigate to `public_html` (or your addon domain directory, e.g., `public_html/guggucreations.com`).

4. **Upload and Extract:**
   - Click **Upload** in the top toolbar and upload your `guggu-website.zip`.
   - Once uploaded, select the file and click **Extract**.
   - Ensure that `index.html`, `robots.txt`, `sitemap.xml`, and the `assets/` directory reside directly inside `public_html`.

5. **Configure URL Routing & SSL (Optional `.htaccess`):**
   If you want Apache/cPanel to gracefully route all subpaths and enforce HTTPS, create or edit `.htaccess` in `public_html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 2. Inquiries & Contact Form Routing

The inquiry form is configured to easily connect with your preferred mail handler:
- **Formspree / Basin / Getform**: Replace the form submit handler in `src/components/ContactSection.tsx` with your endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`).
- **cPanel Webmail**: Forward inquiries to `guggucreationsstudio@gmail.com` using Namecheap cPanel Email Forwarders.

---

## 3. SEO Verification

- Google Search Console: Upload your verification HTML tag or file into `public_html`.
- Sitemap location: `https://guggucreations.com/sitemap.xml`
- Robots file: `https://guggucreations.com/robots.txt`
