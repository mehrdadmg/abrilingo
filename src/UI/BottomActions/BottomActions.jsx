import './BottomActions.css';

const BottomActions = (props) => {
  return (
    <div className="bottom_actions">
      <button className="action-btn btn_left" onClick={props.previous}>
        &larr; Previous
      </button>

      <button className="action-btn btn_right" onClick={props.next}>
        Next &rarr;
      </button>
    </div>
  );
};

export default BottomActions;
