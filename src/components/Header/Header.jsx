import "./Header.css";
import tab from "../../assets/data/header.json";
import down from "../../assets/images/down.svg";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
    const getLink = (i) => {
        if (i === 0) {
            return "#opportunities"
        } else return i === 1 ? "#price" : "#contacts"
    }
    return (
        <div className="header">
            <img src={logo} alt="Лого" />
            <ul>
                {tab.map((el, i) => {
                  return <li key={i}><a href={getLink(i)}>{el.name}</a></li>
                })}
            </ul>
            <div>
                <p>RU</p>
                <img src={down} alt="Развернуть" />
            </div>
        </div>
    )
}