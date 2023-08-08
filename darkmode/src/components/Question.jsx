import { useState } from "react";

const Question = (question) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <div className={isOpen ? "Open" : "close"}>
          <h2>{question.title}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {isOpen && <p>{question.info}</p>}
      </section>
    </>
  );
};

export default Question;
