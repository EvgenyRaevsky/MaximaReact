import "./Modal.css"
import logoModal from "../../assets/images/logoModal.svg";
import cancel from "../../assets/images/cancel.svg";

export const Modal = ({isModal, setIsModal}) => {
    const closeModal = () => {
        setIsModal(false);
        document.body.style.overflow = "visible";
    }
    return (
        <div className={`${isModal ? "modal-wrapper active" : "modal-wrapper"}`} 
            onClick={() => closeModal()}
        >
            <form 
                className="modal" 
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <img src={logoModal} alt="Лого" />
                    <img 
                        src={cancel} alt="Назад" 
                        onClick={() => closeModal()}
                    />
                </div>
                <input type="text" placeholder="Имя Фамилия"/>
                <input type="text" placeholder="Название организации"/>
                <input type="text" placeholder="Должность"/>
                <input type="email" placeholder="Email"/>
                <input type="phone" placeholder="Телефон"/>
                <label>
                    <input type="checkbox" />
                    <p>Я согласен на обработку моих <a href="">персональных данных</a></p>
                </label>
                <button 
                    type="button"
                    onClick={() => closeModal()}
                >
                        Отправить
                </button>
            </form>
        </div>
    )
}