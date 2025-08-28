// app/api/blogs/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'list.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(fileData);

    return new Response(JSON.stringify({ payload: blogs }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error reading the local JSON file:", error);
    return new Response(JSON.stringify({ error: 'Error fetching blogs' }), {
      status: 500,
    });
  }
}
