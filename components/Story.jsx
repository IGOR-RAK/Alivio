
import Image from "next/image";
import video from "../public/img/Video.png"



const Story=() => {
    
 
    return (  
    <section className="story">
        <div className="story-container">
            <div className="story-row">
               
                <div className="story-video">
                    <Image src={video} width={896} height={516} alt="logo" />   
                </div>
            </div>       
        </div>
    </section>);
}

export default Story;