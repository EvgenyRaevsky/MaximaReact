import { useState } from "react";
import { Button } from "../../UX/Button";
import banner from "../../assets/data/banner.json";
import { within } from "@testing-library/react";

export const Banner = (props) => {
    const [calc, setCalc] = useState(0);
    const next = () => {
        let tmp = calc;
        ++tmp >= banner.length ? setCalc(0) : setCalc(calc + 1);
    }
    const prev = () => {
        let tmp = calc;
        --tmp < 0 ? setCalc(banner.length - 1) : setCalc(calc - 1);
    }
    return (
        <div className={`layout ${props.class}`}>
            <p
                className="arrows left"
                onClick={() => prev()}
            >&#8592;</p>
            <div className="banner">
                <div>
                    <h1>{banner[calc].title}</h1>
                    <p>{banner[calc].text}</p>
                    <Button
                        text={"Попробовать бесплатно"}
                        setIsModal={props.setIsModal}
                    />
                </div>
                <div>
                    <img src={banner[calc].image} alt="Фото" />
                </div>
            </div>
            <p
                className="arrows right"
                onClick={() => next()}
            >&#8594;</p>
        </div>
    )
}