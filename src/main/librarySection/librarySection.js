import "./librarySection.css"
import "../../innerWrapper.css"
import Title from "../title/title"
import LibraryItem from "./libraryItem/libraryItem"

export default function Library(){

    return(

        <section className="library">

        <div className="inner-wrapper">

            <div className="library__header">

            <Title/>
                
                
            </div>

            <div className="library__content">


                <LibraryItem/>
                <LibraryItem/>
                <LibraryItem/>
                
                
                
            </div>

            <a href="#" className="library__link">View Your Library</a>
            
        
        </div>
        
        </section>
        
        
        
    )
    
    
}