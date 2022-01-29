import { FC } from "react";
import Image from "next/image";
import alvio from "../public/svg/Alivio.svg"



const Footer=() => {
    return (  
        
        <footer className="footer"> 
             <div className='container'> 
                    <div className='footer-content'>
                        <div className="footer-logo">
                             <Image src={alvio} width={100} height={31} alt="logo" />   
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#">Why Alivio</a></li>
                                <li><a href="#">Solutions</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                
            </div>      
        </footer>   
            
    );
}

export default Footer;