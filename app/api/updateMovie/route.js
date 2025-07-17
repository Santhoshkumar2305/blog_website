import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function POST(req){
  try{
    const updatedMovie=await req.json();
    const filePath=path.join(process.cwd(),"avengers.json");
    const fileData=await readFile(filePath,"utf-8");
    const movies=JSON.parse(fileData);
    const index=movies.findIndex(m=>m.id===updatedMovie.id);
    movies[index]=updatedMovie;
    await writeFile(filePath,JSON.stringify(movies,null,2));
    return new Response(JSON.stringify({message:"Movie updated successfully"}),{status:200});
  }catch(err){
    return new Response(JSON.stringify({error:"Failed to update movie"}),{status:500});
  }
}