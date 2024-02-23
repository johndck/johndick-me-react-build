import accData from "../accordian.json";
import AccordianItem from "./accordianItem";
import { useState } from "react";

console.log(accData);

function Accordian() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="container">
      <div className="accordianContentHolder">
        {accData.map((item) => {
          return (
            <AccordianItem
              curOpen={curOpen}
              onOpen={setCurOpen}
              key={item.id}
              id={Number(item.id)}
              title={item.title}
            >
              {item.answer}
            </AccordianItem>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;
