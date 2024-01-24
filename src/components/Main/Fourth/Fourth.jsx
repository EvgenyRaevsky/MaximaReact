import "./Fourth.css";
import AnimationBG from "./AnimationBG";
import ListChoises from "./ListChoises";
import ForFree from "./ForFree";
import PerfectFor from "./PerfectFor";

const Fourth = () => {
    return (
        <div className="fourth-wrapper">
            <div className="fourth">
                <AnimationBG />
                <h1 className="fourth__title">Выбирайте Ed Space сегодня и вы получите</h1>
                <ListChoises />
                <ForFree />
                <PerfectFor />
            </div>
        </div>
    )
}

export default Fourth;