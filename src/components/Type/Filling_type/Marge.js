import { useDispatch } from "react-redux";
import { Action } from "../../../store/store";

const Marge = ({ marge }) => {
  const dispatch = useDispatch();

  const addNewMergeType = (marge) => {
    dispatch(Action.setAddedMerge({ marge }));
  };

  return (
    <div className="marge-with">
      <span>Marge With: </span>

      {marge?.map((marge, i) => (
        <div
          className="marge-content"
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
