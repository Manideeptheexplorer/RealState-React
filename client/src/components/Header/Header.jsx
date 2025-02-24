import { useState } from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutSideHandler from 'react-outside-click-handler';
const Header=()=>{
    const [menuOpened,setmenuOpened]=useState(false);

    const getMenuStyle=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800){
            return {right: !menuOpened &&"-100%"}
        }
    }
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" className="h-logo" width={100}/>
                <OutSideHandler onOutsideClick={()=>setmenuOpened(false)}>
                <div className="flexCenter h-menu"
                    style={getMenuStyle(menuOpened)}
                >
                    <a href="#" className="h-link">Residences</a>
                    <a href="#" className="h-link">Our values</a>
                    <a href="#" className="h-link">Get Started</a>
                    <button  className="button"><a href="#" >Contact Us</a></button>
                </div>
                </OutSideHandler>
                <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </section>
    )
}
export default Header;