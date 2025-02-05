import './Header.css';
const Header=()=>{
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" className="h-logo" width={100}/>

                <div className="flexCenter h-menu">
                    <a href="#" className="h-link">Residences</a>
                    <a href="#" className="h-link">Our values</a>
                    <a href="#" className="h-link">Get Started</a>
                    <button  className="button"><a href="#" >Contact Us</a></button>
                </div>
            </div>
        </section>
    )
}
export default Header;