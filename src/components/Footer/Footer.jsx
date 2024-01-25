import "./Footer.css";
import nav from "../../assets/data/footer.json";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import tg from "../../assets/images/tg.svg";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <div>
                    <img src={logo} alt="Лого" />
                </div>
                <div>
                    {nav.map((el, i) => {
                        return <div key={i} ><h3>{el.name}</h3>{el.list.map((el, i) => <p key={i}>{el}</p>)}</div>
                    })}
                </div>
            </div>
            <div className="footer__info">
                <p>2022 Ed Space. Все права защищены</p>
                <div>
                    <img src={vk} alt="Вк" />
                    <img src={tg} alt="Тг" />
                </div>
            </div>
        </div>
    )
}