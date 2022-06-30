
const Marge = ({marge}) => {

  return (
    <div className="marge-with">
      <span>Marge With: </span>
      {marge?.map(
        (marge, i) => (
          <div
            className="marge-content"
            key={`marge-${i}`}
          >
            <p>{marge.name}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Marge;
