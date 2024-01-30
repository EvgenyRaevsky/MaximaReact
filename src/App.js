import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { Card } from "./components/Card/Card";
import { TextList } from "./components/TextList/TextList";
import textContent from "./assets/data/text.json";
import { TextBlock } from "./components/TextBlock/TextBlock";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { Banner } from "./components/Banner/Banner";

function App() {
    const [isModal, setIsModal] = useState(false);
    return (
        <>
            <Header />
            <Banner 
                class="layout_main"
                setIsModal={setIsModal}
            />
            <Layout 
                title="Точно подойдет для:"
                class="layout_suitable"
                setIsModal={setIsModal}
            >
                <Card num={2}/>
            </Layout>
            <Layout 
                title="Возможности Ed Space"
                class="layout_card"
                id="opportunities"
                description="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
                setIsModal={setIsModal}
            >
                <Card num={3}/>
            </Layout>
            <Layout 
                title="Выбирайте Ed Space сегодня и вы получите"
                class="layout_choise"
                id="price"
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
