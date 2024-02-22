import accData from "../accordian.json";
import AccordianItem from "./accordianItem";

console.log(accData);

function Accordian() {
  return (
    <div className="container">
      <div className="accordianContentHolder">
        {accData.map((item) => {
          return <AccordianItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Accordian;
