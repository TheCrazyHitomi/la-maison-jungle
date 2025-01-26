import "../styles/banner.css"
import logo from "../images/logo.png"
import Recommendation from "./recommendation";

const Banner = () => {
    const title = "La maison Jungle"

    return (
        <div className="lmj-banner">
            <div className="lmj-banner-row">
                <img src={logo} alt="la maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">{title}</h1>
            </div>
            <Recommendation/>
        </div>
    );
}

export default Banner