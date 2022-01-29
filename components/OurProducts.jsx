import Image from "next/image";
import image from "../public/img/Image.jpg"
import avatar from "../public/img/Avatar.jpg"



const OurProduct=() => {
    
 
    return (  
    <section className="product">
        <div className="container">
            <div className="product-row">
                <div className="product-img">
                    <Image src={image} width={639} height={573} alt="logo" />   
                </div>
                <div className="product-container">
                        <div className="product-subtitle">Our product</div>
                        <div className="product-title">You tell us your stress,
                                                    We make your diary</div>
                        <div className="product-text">Everyone experiences it, and in different ways.
                                    Let Alivio guide you, in a personalized journal experience, to overcome your stress.</div>
                        <a className="btn big" href="#">Find Your Way</a>
                </div>
                <div className="product-cart">
                    <div className="product-cart--title">Customized For</div>
                    <div className="product-cart--empty"></div>
                    <div className="product-cart--img-box">
                    <Image src={avatar} width={57} height={57} alt="logo" />  
                        <div className="product-cart--name">Mikayla</div>

                    </div>
                    <div className="product-cart--custom">Your custom contents</div>
                    <ul>
                        <li>Understand Your Stress</li>
                        <li>Anger Management</li>
                    </ul>
                </div>
                
            </div>       
        </div>
    </section>);
}

export default OurProduct;