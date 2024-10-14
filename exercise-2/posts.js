export async function onRequest(context) {
    const { request, env } = context;
  
    // Check if DB is defined
    if (!context.env.DB) {
      console.error('Database binding is not defined');
      return new Response('Internal Server Error', { status: 500 });
    }
  
    if (request.method === 'GET') {
      return getPosts(env);
    } else if (request.method === 'POST') {
      return createPost(request, env);
    } else {
      return new Response('Method Not Allowed', { status: 405 });
    }
  }
  
  async function getPosts(env) {
    try {
      const { results } = await env.DB.prepare(
        'SELECT * FROM posts ORDER BY created_at DESC'
      ).all();
  
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  
  async function createPost(request, env) {
    try {
      const { title, content } = await request.json();
  
      if (!title || !content) {
        return new Response('Title and content are required', { status: 400 });
      }
  
      const { success } = await env.DB.prepare(
        'INSERT INTO posts (title, content) VALUES (?, ?)'
      )
        .bind(title, content)
        .run();
  
      if (success) {
        return new Response('Post created successfully', { status: 201 });
      } else {
        return new Response('Failed to create post', { status: 500 });
      }
    } catch (error) {
      console.error('Error creating post:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }