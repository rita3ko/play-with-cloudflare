document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-post-form');
    form.addEventListener('submit', submitNewPost);
});

async function submitNewPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            alert('Post created successfully!');
            window.location.href = 'blog.html';
        } else {
            throw new Error('Failed to create post');
        }
    } catch (error) {
        console.error('Error creating new post:', error);
        alert('Failed to create post. Please try again.');
    }
}