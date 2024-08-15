import "./libraryItem.css"


export default function LibraryItem() {

    return(

        <div className="library__box">
            <div className="library__box-left">
                <img src="./images/game/game-01.jpg" alt="game img" className="library-box__img" />
                <div className="library-box__details">

                    <span className="library-box__details-title library-box__title">Dota2</span>
                    <span className="library-box__details-subtitle library-box__subtitle">Sandbox</span>
                </div>


            </div>



            
            <div className="library__box-middle">
                <div className="library-box__date">

                    <span className="library-box__date-title library-box__title">Date Added</span>
                    <span className="library-box__date-time library-box__subtitle">24/08/2036</span>
                    
                </div>

                <div className="library-box__hour">

                    <span className="library-box__hour-title library-box__title">Hours Played</span>
                    <span className="library-box__hour-time library-box__subtitle">634 H 22 Mins</span>
                    
                </div>

                <div className="library-box__status">

                    <span className="library-box__status-title library-box__title">Currently</span>
                    <span className="library-box__status-download library-box__subtitle">Downloaded</span>
                    
                </div>
            </div>



            <div className="library__box-right">
            <a href="#" className="library-box__link">Downloaded</a>
            </div>
            
            
        </div>
        
        
    )
    
    
}