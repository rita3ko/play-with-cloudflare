# Exercise 1: Deploy a Simple Personal Site to Cloudflare Pages

In this exercise, you'll download a pre-designed simple personal site, deploy it to Cloudflare Pages, and then personalize it with your own content.

## Step 1: Download the Exercise Files

1. Go to the GitHub repository containing the exercise files.
2. Navigate to the `exercise-1` directory.
3. If you see a "Download" button, click it to download the directory.
4. If there's no "Download" button:
   - Copy the current URL of the `exercise-1` directory page.
   - Go to [https://download-directory.github.io/](https://download-directory.github.io/)
   - Paste the URL into the input field and click "Download".
5. Once downloaded, extract the ZIP file to a location on your computer.

## Step 2: Review the Files

In the extracted `exercise-1` folder, you should see:
- `index.html`: The main (and only) page of the site
- `styles.css`: The stylesheet for the site
- `profile-picture.jpg`: A sample profile picture

Take a moment to open and review these files in a text editor.

## Step 3: Deploy to Cloudflare Pages

1. Log in to your Cloudflare account and go to the Pages section.
2. Click "Create a project" then "Upload assets".
3. Give your project a name (e.g., "my-personal-site").
4. Drag and drop the contents of the `exercise-1` folder (not the folder itself) into the upload area.
5. Click "Deploy site".
6. Cloudflare will provide you with a URL for your site (e.g., https://your-project-name.pages.dev).
7. Visit the URL to see your deployed site.

## Step 4: Personalize Your Site

Now, let's personalize the site with your own content:

1. Replace `profile-picture.jpg` with your own photo (keep the filename the same).
2. Open `index.html` in a text editor and make the following changes:
   - Replace "Hi, I'm [Your Name]" with your actual name.
   - Update the introduction paragraph with your own text.
   - Update the social media links with your own profiles:
     - Replace `https://www.linkedin.com/in/yourusername` with your LinkedIn URL.
     - Replace `https://twitter.com/yourusername` with your Twitter URL.
     - Replace `your.email@example.com` with your email address.
3. Save your changes.

## Step 5: Re-deploy Your Personalized Site

1. Go back to your Cloudflare Pages project.
2. Click "Upload assets" again.
3. Drag and drop your updated files (index.html and your new profile picture) into the upload area.
4. Click "Deploy site".
5. Once deployment is complete, visit your site's URL again to see your personalized version.

Congratulations! You've now deployed a personalized, minimalist personal site to Cloudflare Pages.

## Design Notes

Your site features:
- An ultra-clean design with no frames or shadows, emphasizing content and whitespace.
- High-contrast black text on a white background for maximum readability.
- A round, black and white profile picture on the left side.
- Your name, introduction, and social media links on the right side, all left-aligned.
- Responsive design that adjusts for smaller screens.

The stark black and white color scheme, including the grayscale profile picture, creates a bold, timeless design that puts the focus on your content.