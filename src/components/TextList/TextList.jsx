import textList from "../../assets/data/list.json";
import ok from "../../assets/images/ok.svg";

export const TextList = () => {
    return (
        <div className="list">
            {textList.map((el, i) => {
                return <div className="list__component" key={i}>
                    <p>{el.text}</p>
                    <img src={ok} alt="" />
                </div>
            })}
        </div>
    )
}