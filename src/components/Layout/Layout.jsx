import { Button } from "../../UX/Button"
import textContent from "../../assets/data/text.json";
import { TextBlock } from "../TextBlock/TextBlock";
import "./Layout.css"

export const Layout = (props) => {
    return (
        <div className={`layout ${props.class}`} id={props.id}>
            {props.main ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
            {props.description && <p>{props.description}</p>}
            {!props.main && <div className="layout__content"> {props.children} </div>}
            <Button 
                text={"Попробовать бесплатно"} 
                setIsModal={props.setIsModal}
            />
            {props.class === "layout_choise" && <div>
                <h2>Точно подойдет для:</h2>
                {textContent
                    .filter(el => el.section === 4)
                    .splice(2)
                    .map((el, i) => <TextBlock key={i} title={el.title} text={el.text} />
                )}
            </div>}
        </div>
    )
}