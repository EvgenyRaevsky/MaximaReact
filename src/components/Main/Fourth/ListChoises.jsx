import OkCircle from "../../../images/ok-circle.svg";

const list = [
    "Неограниченное колличество учеников",
    "Трансляции",
    "Точную статистику",
    "Производительную видеосвязь с учениками",
    "Продукт с ежемесячной подпиской",
    "Лучшую конфиденциальность и защиту",
    "Готовый шаблон для организации обучения",
    "Сообщества",
    "Любое количество уроков и учебных программ"
]

const ListChoises = () => {
    return (
        <div className="fourth__list">
            {list.map((el, i) => {
                return <div key={i}>
                    <p>{el}</p>
                    <img src={OkCircle} alt="Ok" />
                </div>
            })}
        </div>
    )
}

export default ListChoises;