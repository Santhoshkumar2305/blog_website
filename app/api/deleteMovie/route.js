import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function DELETE(req){
  try{
    const {id}=await req.json();
    const filePath=path.join(process.cwd(), "avengers.json");
    const fileData=await readFile(filePath, "utf-8");
    const movies=JSON.parse(fileData);
    const updatedMovies=movies.filter(m => m.id !== id);
    if (movies.length===updatedMovies.length) {
      return new Response(JSON.stringify({ error: "Movie not found" }),{status: 404 });
    }
    await writeFile(filePath, JSON.stringify(updatedMovies, null, 2));
    return new Response(JSON.stringify({ message: "Movie deleted successfully" }),{status: 200 });
  }catch(err){
    return new Response(JSON.stringify({ error: "Failed to delete movie" }),{status: 500 });
  }
}