const SelectTitle = (props) => {
  return (
    <div className="choose-title">
      <div className="title-content">
        <span>{props.number}</span>
        <h2 className={props.class}>{props.title}</h2>
      </div>
    </div>
  );
};

export default SelectTitle;
