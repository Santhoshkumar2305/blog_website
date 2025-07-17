'use client'
import { useRouter } from "next/navigation";
const SellerLayout = ({children}) => {
  const router = useRouter();
  return (
    <div>
        <div className="Nav-Bar">
            <div className="nav-left">
                <img src="seller-logo.png" alt="seller image" className="nav-img"></img>
            </div>
            <div className="nav-right">
                <p onClick={() => {
                  router.push('/blog')
                }}>Home</p>
                <p onClick={() => {
                  router.push('/create')
                }}>Create Blog</p>
                <p onClick={() => {
                  router.push('/update')
                }}>Update blog</p>
                <p onClick={() => {
                  router.push('/delete')
                }}>Delete Blog</p>
                <p onClick={() => {
                  router.push('/bloguser');
                  localStorage.removeItem("username");
                  localStorage.removeItem("password");
                }}>Log out</p>
            </div>
        </div>
        {children}
    </div>
  )
}
export default SellerLayout;