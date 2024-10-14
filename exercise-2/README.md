# Exercise 2: Add a Visitor Counter with Cloudflare Workers and KV

In this exercise, you'll enhance your personal site by adding a real-time visitor counter using Cloudflare Workers and KV (Key-Value) storage.

## Step 1: Set up KV Namespace

1. Log in to your Cloudflare dashboard.
2. Go to "Workers & Pages" > "KV".
3. Click "Create a namespace".
4. Name your namespace (e.g., "visitor-counter").
5. Note down the namespace ID for later use.

## Step 2: Create a Worker

1. In the Cloudflare dashboard, go to "Workers & Pages" > "Create application".
2. Choose "Create Worker".
3. Give your worker a name (e.g., "visitor-counter-worker").
4. Replace the default code with the following:

```javascript
export default {
  async fetch(request, env) {
    // Get the current count
    let count = await env.VISITOR_COUNTER.get("visits");
    count = count ? parseInt(count) : 0;

    // Increment the count
    count++;

    // Store the new count
    await env.VISITOR_COUNTER.put("visits", count.toString());

    // Return the count as plain text
    return new Response(count.toString(), {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
```

5. Click "Save and deploy".

## Step 3: Bind KV Namespace to Worker

1. Go to your worker's settings.
2. Under "Variables", find "KV Namespace Bindings".
3. Click "Add binding".
4. Set "Variable name" to `VISITOR_COUNTER`.
5. Choose the KV namespace you created earlier.
6. Save the changes.

## Step 4: Update Your Website

1. Open your `index.html` file.
2. Add the following HTML where you want the counter to appear:

```html
<p>Visitor count: <span id="visitor-count">Loading...</span></p>
```

3. Add the following JavaScript to the bottom of your HTML file, just before the closing `</body>` tag:

```html
<script>
export default {
  async fetch(request, env) {
    console.log('Worker received request:', request.url);

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      console.log('Handling CORS preflight request');
      return handleOptions(request);
    }

    // Get the current count
    let count = await env.VISITOR_COUNTER.get("visits");
    count = count ? parseInt(count) : 0;
    console.log('Current count:', count);

    // Increment the count
    count++;

    // Store the new count
    await env.VISITOR_COUNTER.put("visits", count.toString());
    console.log('Updated count:', count);

    // Return the count as plain text with CORS headers
    console.log('Sending response');
    return new Response(count.toString(), {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*", // Allow all origins for now
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
    });
  },
};

function handleOptions(request) {
  // Handle CORS preflight request
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins for now
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
</script>
```

4. Replace `your-subdomain` in the fetch URL with your actual workers.dev subdomain.

## Step 5: Deploy Updated Site

1. Go back to your Cloudflare Pages project.
2. Upload your updated `index.html` file.
3. Deploy the changes.

## Step 6: Test Your Visitor Counter

1. Visit your website and refresh the page a few times.
2. You should see the visitor count incrementing with each page load.

Congratulations! You've now added a real-time visitor counter to your personal site using Cloudflare Workers and KV storage.

## How it Works

- The Worker increments and stores the visitor count in KV storage.
- Each time your page loads, it fetches the current count from the Worker.
- The count is displayed on your page and updates in real-time.

This exercise demonstrates how you can use Cloudflare's edge computing capabilities to add dynamic features to a static website.