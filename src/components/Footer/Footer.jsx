import "./Footer.css";
import nav from "../../assets/data/footer.json";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import tg from "../../assets/images/tg.svg";


export const Footer = () => {
    return (
        <div className="footer" id="contacts">
            <div className="footer__links">
                <div>
                    <img src={logo} alt="Лого" />
                </div>
                <div>
                    {nav.map((elem, it) => {
                        return <div key={it} ><h3>{elem.name}</h3>{elem.list.map((el, i) => <a href={nav[it].links[i]} key={i}>{el}</a>)}</div>
                    })}
                </div>
            </div>
            <div className="footer__info">
                <p>2022 Ed Space. Все права защищены</p>
                <div>
                    <a href="https://vk.com"><img src={vk} alt="Вк" /></a>
                    <a href="https://web.telegram.org"><img src={tg} alt="Тг" /></a>
                </div>
            </div>
        </div>
    )
}