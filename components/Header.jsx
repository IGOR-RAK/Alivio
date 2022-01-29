import Image from "next/image";
import logo from "../public/svg/Logo.svg"



const Header=() => {
    
 
    return (  
    <header className="header">
        <div className="container">
            <div className="header-row">
                <div className="header-logo">
                    <a href="#">
                         <Image src={logo} width={80} height={23} alt="logo" /> 
                    </a>
                </div>
                <div className="header-nav">
                   <ul>
                       <li><a href="#">Why Alivio</a></li>
                       <li><a href="#">Solutions</a></li>
                       <li><a href="#">Community</a></li>
                       <li><a href="#">Pricing</a></li>
                   </ul>
                </div>
                <div className="header-login">
                   <a href="#">Sign in</a>                  
                   <a className="btn" href="#">Start Trial</a>
                </div>
            </div>       
        </div>
    </header>);
}

export default Header;