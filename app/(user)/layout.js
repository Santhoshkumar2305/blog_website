'use client'
import { useRouter } from "next/navigation";
const BuyerLayout = ({children}) => {
  const router = useRouter()
  return (
    <div>
         <div className="Nav-Bar" key={"nav-user"}>
            <div className="nav-left">
                <img src="buyer-logo.png" alt="seller image" className="nav-img"></img>
            </div>
            <div className="nav-right">
                <p onClick={ () => {
                  router.push('/login')
                }}
                >Admin Login</p>
            </div>
        </div>
        {children}
    </div>
  )
}
export default BuyerLayout;