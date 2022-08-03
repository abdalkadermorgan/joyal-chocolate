import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../../store/store";

const Marge = ({ marge, type_id }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log("mm",marge);
  const addNewMergeType = (marge) => {
    dispatch(Action.setAddedMerge({ marge, type_id }));
  };

  return (
    <div className="marge-with">
      <span>Marge With: </span>

      {marge?.map((marge, i) => (
        <div
          // className="marge-content"
          className={`marge-content 
              ${
                cart.types.filter(
                  (e) =>
                    e.chocolate_type_id === type_id && e.merge_id.id === marge.id
                ).length
                  ? "active"
                  : ""
              }`}
          key={`marge-${i}`}
          onClick={() => {
            addNewMergeType(marge);
          }}
        >
          <p>{marge.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Marge;
