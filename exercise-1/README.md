# Cloudflare Pages Static Site with Blog

This repository guides you through creating a static site with Cloudflare Pages and then adding a blog functionality using Cloudflare Pages Functions and D1 database. The project is divided into three exercises, each building upon the previous one.

## Prerequisites

- A Cloudflare account
- Git installed on your local machine
- Node.js and npm installed
- A picture of yourself named "profile-picture.jpg"

## Repository Structure

```
cloudflare-pages-blog/
├── exercise-1/
│   └── assets/
│       ├── index.html
│       ├── styles.css
│       └── profile-picture.jpg
```

## Exercise 1: Deploy Static Site to Cloudflare Pages

In this exercise, you'll create a simple static site and deploy it to Cloudflare Pages using the drag-and-drop UI.

1. Navigate to the `exercise-1/assets` directory.

2. Ensure you have placed your `profile-picture.jpg` in this directory.

3. Create the following files in the `assets` directory:

   `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My Static Site</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <header>
           <nav>
               <ul>
                   <li><a href="index.html" class="active">Home</a></li>
                   <li><a href="about.html">About</a></li>
               </ul>
           </nav>
       </header>
       <main>
           <h1>Welcome to My Static Site</h1>
           <p>This is a simple static site hosted on Cloudflare Pages.</p>
       </main>
       <footer>
           <p>&copy; 2024 My Static Site. All rights reserved.</p>
       </footer>
   </body>
   </html>
   ```

   `about.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>About - My Static Site</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <header>
           <nav>
               <ul>
                   <li><a href="index.html">Home</a></li>
                   <li><a href="about.html" class="active">About</a></li>
               </ul>
           </nav>
       </header>
       <main>
           <h1>About Me</h1>
           <img src="profile-picture.jpg" alt="My Profile Picture" class="profile-picture">
           <p>This is the about page of my static site.</p>
       </main>
       <footer>
           <p>&copy; 2024 My Static Site. All rights reserved.</p>
       </footer>
   </body>
   </html>
   ```

   `styles.css`:
   ```css
   body {
       font-family: Arial, sans-serif;
       line-height: 1.6;
       color: #333;
       max-width: 800px;
       margin: 0 auto;
       padding: 20px;
   }

   header {
       background-color: #fff;
       padding: 1rem;
       margin-bottom: 2rem;
       border-bottom: 1px solid #eee;
   }

   nav ul {
       list-style-type: none;
       padding: 0;
       margin: 0;
   }

   nav ul li {
       display: inline;
       margin-right: 10px;
   }

   nav ul li a {
       text-decoration: none;
       color: #333;
       padding-bottom: 3px;
   }

   nav ul li a.active {
       border-bottom: 2px solid #333;
   }

   h1, h2, h3 {
       color: #000;
   }

   .profile-picture {
       max-width: 200px;
       border-radius: 50%;
       margin-bottom: 1rem;
   }

   footer {
       margin-top: 2rem;
       text-align: center;
       font-size: 0.8rem;
       color: #777;
   }
   ```

4. Deploy to Cloudflare Pages:
   - Log in to your Cloudflare account and go to the Pages section.
   - Click "Create a project" and then "Upload assets".
   - Give your project a name.
   - Drag and drop the contents of the `assets` folder into the upload area.
   - Click "Deploy site".

5. Once deployed, Cloudflare will provide you with a URL for your site. Visit it to confirm everything is working correctly.
