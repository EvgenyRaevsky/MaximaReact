import "./Header.css";
import tab from "../../assets/data/header.json";
import down from "../../assets/images/down.svg";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Лого" />
            <ul>
                {tab.map((el, i) => <li key={i}>{el.name}</li>)}
            </ul>
            <div>
                <p>RU</p>
                <img src={down} alt="Развернуть" />
            </div>
        </div>
    )
}