import "./main.css"
import Banner from "./banner/banner"
import "../container.css"
import PopularSection from "./popularSection/popularSection"
import Library from "./librarySection/librarySection"



export default function Main() {
  return (

    <div className="main">
      <div className="container">
      <div className="wrapper">
      <Banner/>

      <PopularSection/>

      <Library/>

      
      </div>


      </div>

        
        
        
        
        
        
    </div>
  )
}
