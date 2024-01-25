import { TextBlock } from "../TextBlock/TextBlock";
import textContent from '../../assets/data/text.json';
import attendingClasses from "../../assets/images/attendingClasses.svg";
import creatingTraining from "../../assets/images/creatingTraining.svg";
import forStudents from "../../assets/images/forStudents.svg";
import homework from "../../assets/images/homework.svg";
import learningProcess from "../../assets/images/learningProcess.svg";
import managingClasses from "../../assets/images/managingClasses.svg";
import onlineCourses from "../../assets/images/onlineCourses.svg";
import records from "../../assets/images/records.svg";

const arrImg = [onlineCourses, creatingTraining, learningProcess, managingClasses, homework, forStudents, attendingClasses, records]

export const Card = ({ num }) => {
    return (
        <>
            {textContent.filter(el => el.section === num).map((el, i) => {
                return <div key={i}>
                    {num === 2 ? <img src={arrImg.slice(0, 2)[i]} alt="" /> : <img src={arrImg.slice(2)[i]} alt="" />}
                    <TextBlock title={el.title} text={el.text} />
                </div>
            })}
        </>
    )
}