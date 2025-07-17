'use client'
import { useRouter } from "next/navigation";
import Login from "./component/Login";

const Main = () => {
  const router = useRouter();
  return (
    <div className="main-cls">
        <h1 style={{color:"white"}}>Welcome To Our Blog Website</h1>
        <button onClick={() => {
          router.push("/bloguser")
        }}>View Blogs</button>
    </div>
  )
}
export default Main;