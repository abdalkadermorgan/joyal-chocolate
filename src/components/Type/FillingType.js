import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import ChocolateType from "./Filling_type/ChocolateType";

const FillingType = ({fillingType, merge}) => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="box-type filling-box">
      {cart.types.map((type, i) => (
        <ChocolateType type={type} key={`chocolate-type${i}`} fillingType={fillingType} merge={merge} />
      ))}
    </div>
  );
};

export default FillingType;
