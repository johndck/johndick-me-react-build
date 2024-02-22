import { useState } from "react";

function AccordianItem({ item }) {
  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!isOpen);
  }

  return (
    <div className="accordianItem">
      <div
        className="accordTitle"
        onClick={() => {
          handleOpen();
        }}
      >
        <p className="accordianNumber">{item.id}</p>
        <p>{item.title}</p>
        <p className="accordianController">{isOpen === true ? "-" : "+"}</p>
      </div>
      <div
        className="accordianAnswer"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default AccordianItem;
