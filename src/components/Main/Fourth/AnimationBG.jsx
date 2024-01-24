import "./AnimationBG.css";

const img = [
    "./bg/BlueBall.svg",
    "./bg/VioletBall.svg",
    "./bg/Stick.svg",
    "./bg/BlueRing.svg",
    "./bg/BlueBall2.svg",
    "./bg/BlueBall2.svg",
    "./bg/VioletBall.svg",
    "./bg/HalfRing.svg",
    "./bg/Stick.svg",
    "./bg/HalfRingGold.svg",
    "./bg/VioletBall.svg",
    "./bg/Disk.svg",
    "./bg/BlueBall2.svg",
    "./bg/VioletBall.svg",
    "./bg/Stick.svg",
    "./bg/VioletBall.svg",
    "./bg/BlueBall.svg",
    "./bg/BlueBall2.svg",
    "./bg/VioletRing.svg",
    "./bg/HalfRingGold.svg",
    "./bg/BlueBall.svg",
    "./bg/VioletBall.svg"
]

const AnimationBG = () => {
    return (
        <div className="bg">
            {img.map((el, i) => <img key={i} src={el} alt="bg" />)}
        </div>
    ) 
}

export default AnimationBG;