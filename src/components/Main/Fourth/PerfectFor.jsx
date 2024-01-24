import illustrationFourth from "../../../images/illustrationFourth.svg";

const arrPerfectFor = [
    { "Любых онлайн школ": "Быстрый запуск, легкое управление, все инструменты в одной платформе." },
    { "Образовательных курсов": "Статистика по всем образовательным процессам позволяет постоянно улучшать ваш продукт." },
    { "Корпоративных учебных порталов": "Надежная защита, бесперебойная работа и высокая производительность системы позволит наслаждаться процессом обучения." }
];

const PerfectFor = () => {
    return (
        <div className="fourth__content fourth__content_bottom">
            <div>
                <h1 className="fourth__title">Точно подойдет для:</h1>
                {arrPerfectFor.map((el, i) => {
                    return <div key={i}>
                        <h2 className="fourth__title fourth__title_smallergreen">{Object.keys(el)}</h2>
                        <p className="fourth__text fourth__text_small">{Object.values(el)}</p>
                    </div>
                })}
            </div>
            <div>
                <img src={illustrationFourth} alt="Illustration" />
            </div>
        </div>
    )
}

export default PerfectFor;