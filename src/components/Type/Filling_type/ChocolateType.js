import { images } from "../../../assets/images";

const ChocolateType = (props) => {
  return (
    <div className="chocolate-content">
      <div className="chocolate-img">
        <img src={images.ovalChocolate} alt="" />
      </div>
      <h4>
        {props.name}
      </h4>
    </div>
  );
};

export default ChocolateType;
