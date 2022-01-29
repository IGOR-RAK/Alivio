import HomePage from "../components/HomePage"
import HowItWorks from "../components/HowItWorks"
// import OurProduct from "../components/OurProduct"
import Story from "../components/Story"


export default function Home() {
  return (
    <div className="main">
       <HomePage/>
       <HowItWorks/>
       <Story/> 
       {/* <OurProduct/>    */}
    </div>
  )
}
