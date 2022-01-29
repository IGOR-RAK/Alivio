import HomePage from "../components/HomePage"
import HowItWorks from "../components/HowItWorks"
import OurProducts from "../components/OurProducts"
import Story from "../components/Story"


export default function Home() {
  return (
    <div className="main">
       <HomePage/>
       <HowItWorks/>
       <Story/> 
       <OurProducts/>    
    </div>
  )
}
