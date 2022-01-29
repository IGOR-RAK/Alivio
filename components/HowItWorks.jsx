import { FC } from "react";
import Image from "next/image";
import item1 from "../public/img/item1.jpg";
import item2 from "../public/img/item2.jpg";
import item3 from "../public/img/item3.jpg";





const HowItWorks= () => {
  
      
    return (
      <section id="why_alvio" className="how">
         <div className="container">
            <div className="how-subtitle">
                 How it works
            </div>
            <div className="how-header">
                <div className="how-header__title">Understand & Release 
                            the stress in 3 steps</div>
                <div className="how-header__text">
                        Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
                </div>
            </div>
            <div className="how-content">
                <div className="how-content__item">
                    <div className="how-content__item--box1">
                        <div className="how-content__header">
                            <div className="how-content__number">01</div>
                            <div className="how-content__title">Personalize</div>
                        </div>
                        <div className="how-content__text">Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!</div>
                        <div className="how-content__img"><Image src={item1} width={390} height={492} alt="logo" /></div>
                     
                    </div>
                </div>
                <div className="how-content__item">
                <div className="how-content__item--box2">
                        <div className="how-content__header">
                            <div className="how-content__number">02</div>
                            <div className="how-content__title">Write & Understand</div>
                        </div>
                        <div className="how-content__text">Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</div>
                        <div className="how-content__img"><Image src={item2} width={390} height={492} alt="logo" /></div>
                     
                    </div>
                </div>
                <div className="how-content__item">
                <div className="how-content__item--box3">
                <div className="how-content__header">
                            <div className="how-content__number">03</div>
                            <div className="how-content__title">Alivio!</div>
                        </div>
                        <div className="how-content__text">Now you are aware, and have a way to manage and overcome your own stress.
                            What are you waiting for? Alivio today!</div>
                        <div className="how-content__img"><Image src={item3} width={390} height={492} alt="logo" /></div>
                       
                    </div>
                </div>
            </div>

         </div>
               
      
      </section>
    );
  };
  
  export default HowItWorks;