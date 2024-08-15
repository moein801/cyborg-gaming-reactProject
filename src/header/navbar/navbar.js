import "../../container.css"
import "./navbar.css"

export default function NavBar() {

    return(

        <div className="container">
            
        <nav className="navbar">



<div className="navbar__right">


<div className="navbar__logo-wrapper">
<img src="./images/logo/logo.png" alt="logo" className="navbar__logo" />
    
    
</div>


<input type="text" name="search" id="search"  placeholder="Type Something" className="navbar__input"/>

    
</div>

<div className="navbar__left">

    <ul className="navbar__list">
        <li className="navbar__item">
        
        <a href="#" className="navbar__link active">
        Home
        </a>

        </li>
        <li className="navbar__item">
        <a href="#" className="navbar__link">
        Browse

        </a>
        </li>
        <li className="navbar__item">
        <a href="#" className="navbar__link">
        Details

        </a>
        </li>
        <li className="navbar__item">

<a href="#" className="navbar__link">
Streams

</a>
        </li>
    </ul>

    <div className="navbar__profile">

        <span className="navbar__profile-text">Profile</span>
        <img src="./images/profile/profile-header.jpg" alt="profile" className="navbar__profile-icon" />
        
        
    </div>
    
    
</div>
    
    
    
</nav>
            
            
        </div>
        
    )
    
    
}