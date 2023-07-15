import react, { useState } from "react";
import accordian_Data from "../accordian_Data";

const Accordian = () => {
  const [show, setShow] = useState(null);

  const toggle = (key) => {
    if (show == key) {
      setShow(null);
    } else {
      setShow(key);
    }
  };
  return (
    <>
      {accordian_Data.map((data, key) => (
        <div key={data.id} className="accordian-body">
          <div className="accordian-q">
            {data.question}
            <span key={data.id} onClick={() => toggle(key)}>
              {show == key ? "-" : "+"}
            </span>
          </div>
          {
            <div className={show == key ? "a-show-answer" : "a-answer"}>
              {data.answer}
            </div>
          }
        </div>
      ))}
    </>
  );
};

export default Accordian;
