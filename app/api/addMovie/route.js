import { writeFile, readFile } from 'fs/promises';
import path from 'path';
export async function POST(req) {
try {
    const newMovie=await req.json();
    const filePath=path.join(process.cwd(), 'avengers.json');
    const fileData=await readFile(filePath, 'utf-8');
    const movies=JSON.parse(fileData);
    movies.push(newMovie);
    await writeFile(filePath, JSON.stringify(movies, null, 2));
    return new Response(JSON.stringify({ message: 'Movie added successfully' }),{status: 200 });
} 
catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to write data'}),{status: 500 });
  }
}