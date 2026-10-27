export default function FAQ({ question, answer, isOpen, onToggle }) {
  return (
    <details className="FAQ-content" open={isOpen}>
      <summary
        className="FAQ-question"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {question}
      </summary>
      <p className="FAQ-answer">{answer}</p>
    </details>
  );
}
