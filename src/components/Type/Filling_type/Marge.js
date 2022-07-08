import data from "../../data.json";
const Marge = ({ marge }) => {
  const filling_type = data.filling_type;
  const merge = filling_type.map(merge => merge)
  return (
    <div className="marge-with">
      <span>Marge With: </span>
      
      {merge.map((marge, i) => (
        <div className="marge-content" key={`marge-${i}`}>
          <p>{marge.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Marge;
