import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import ChocolateType from "./Filling_type/ChocolateType";

const FillingType = () => {


  const { cart } = useSelector((state) => state);

  return (
    <div className="border-section">
      {cart.chocolate_type.map((type, i) => (
        <ChocolateType
          type={type}
          key={`chocolate-type${i}`}
        />
      ))}
    </div>
  );
};

export default FillingType;
