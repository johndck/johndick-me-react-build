function AccordianItem({ item }) {
  return (
    <div className="accordianItem">
      <div className="accordTitle">
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>-</p>
      </div>
      <div>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default AccordianItem;
