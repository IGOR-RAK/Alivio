import Image from "next/image";
import video from "../public/img/Video.png"



const Story=() => {
    
 
    return (  
    <section className="story">
        <div className="story-container">
            <div className="story-row">
                <div className="story-container">
                        <div className="story-title">Let's hear about Kayla's success story</div>
                        <div className="story-text">See how well Alivio works in a real customer’s life. </div>
                        <a className="btn big" href="#">Let’s get started</a>
                </div>
                <div className="story-video">
                    <Image src={video} width={896} height={516} alt="logo" />   
                </div>
            </div>       
        </div>
    </section>);
}

export default Story;