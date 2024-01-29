import "./Modal.css"
import logoModal from "../../assets/images/logoModal.svg";
import cancel from "../../assets/images/cancel.svg";
import { useState } from "react";

export const Modal = ({isModal, setIsModal}) => {
    const [nameUser, setNameUser] = useState("");
    const [nameOrganization, setNameOrganization] = useState("");
    const [office, setOffice] = useState("");
    const [email, setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const closeModal = () => {
        setIsModal(false);
        document.body.style.overflow = "visible";
        setNameUser("");
        setNameOrganization("");
        setOffice("");
        setEmail("");
        setPhone("");
    }

    const rText = /^[a-z ,.'-]+$/i
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const rPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    const toSendModal = () => { 
        if (nameUser.split(' ').length == 2 && rText.test(nameUser.split(' ')[0]) && rText.test(nameUser.split(' ')[1]) && nameOrganization && rText.test(office) && rEmail.test(email) && rPhone.test(phone)) {
            setIsModal(false);
            document.body.style.overflow = "visible";
            console.log({nameUser, nameOrganization, office, email, phone});
            setNameUser("");
            setNameOrganization("");
            setOffice("");
            setEmail("");
            setPhone("");
        }
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
                <input 
                    type="text" 
                    placeholder="Имя Фамилия"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Название организации"
                    value={nameOrganization}
                    onChange={(e) => setNameOrganization(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Должность"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="phone" 
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label>
                    <input 
                        type="checkbox" 
                />
                    <p>Я согласен на обработку моих <a href="">персональных данных</a></p>
                </label>
                <button 
                    type="button"
                    onClick={() => toSendModal()}
                >
                        Отправить
                </button>
            </form>
        </div>
    )
}