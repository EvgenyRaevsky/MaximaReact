import MyButton from "../../../UX/MyButton/MyButton";

const ForFree = () => {
    return (
        <div className="fourth__content">
            <div>
                <h1 className="fourth__title">Запустите свою онлайн-школу</h1>
                <p className="fourth__text">Или разверните корпоративный учебный портал уже сегодня.</p>
            </div>
            <div>
                <h2 className="fourth__title fourth__title_smallgreen">Цена 250 рублей за 1 ученика в месяц</h2>
                <p className="fourth__text fourth__text_small">Все готово для запуска. Попробуйте 7-дневный демо-доступ.</p>
            </div>
            <MyButton />
        </div>
    )
}

export default ForFree;