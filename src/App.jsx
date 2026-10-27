import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import Footer from "./Components/Footer.jsx";
import FAQData from "./Components/FAQ_data.js";
import FAQ from "./Components/FAQ.jsx";
import { useState } from "react";

export default function App() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const QuestionsElements = FAQData.map((faq) => (
    <FAQ
      key={faq.id}
      question={faq.question}
      answer={faq.answer}
      isOpen={openId === faq.id}
      onToggle={() => handleToggle(faq.id)}
    />
  ));

  return (
    <main>
      <Header />
      <MainContent />
      <section className="FAQ-section">
        <h2 className="FAQ-title">Frequently Asked Questions</h2>
        {QuestionsElements}
      </section>
      <Footer />
    </main>
  );
}
