import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { Card } from "./components/Card/Card";
import { TextList } from "./components/TextList/TextList";
import textContent from "./assets/data/text.json";
import { TextBlock } from "./components/TextBlock/TextBlock";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";

function App() {
    const [isModal, setIsModal] = useState(false);
    return (
        <>
            <Header />
            <Layout 
                title="Ed Space Ваши знания и экспертность обретут здесь форму"
                main={true}
                class="layout_main"
                description="Мощный инструмент для организации обучения. Ваши ученики будут в восторге!"
                setIsModal={setIsModal}
            />
            <Layout 
                title="Точно подойдет для:"
                main={false}
                class="layout_suitable"
                setIsModal={setIsModal}
            >
                <Card num={2}/>
            </Layout>
            <Layout 
                title="Возможности Ed Space"
                main={false}
                class="layout_card"
                description="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
                setIsModal={setIsModal}
            >
                <Card num={3}/>
            </Layout>
            <Layout 
                title="Выбирайте Ed Space сегодня и вы получите"
                main={false}
                class="layout_choise"
                setIsModal={setIsModal}
            >
                <TextList />
                {textContent
                    .filter(el => el.section === 4)
                    .slice(0, 2)
                    .map((el, i) => <TextBlock key={i} title={el.title} text={el.text} />
                )}
            </Layout>
            <Footer />
            <Modal 
                isModal={isModal} 
                setIsModal={setIsModal}
            />
        </>
    );
}

export default App;
