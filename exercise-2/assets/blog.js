async function fetchBlogPosts() {
    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        displayBlogPosts(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

function displayBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted on: ${new Date(post.created_at).toLocaleDateString()}</small>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchBlogPosts);
