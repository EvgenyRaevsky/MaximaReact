import "./Button.css"

export const Button = ({text, setIsModal}) => {
    const openModal = () => {
        setIsModal(true);
        document.body.style.overflow = "hidden";
    }
    return (
        <button 
            className="btn"
            onClick={() => openModal()}
        >
            {text}
        </button>
    )
}