import './BottomActions.css';

const BottomActions = (props) => {
  return (
    <div className="bottom_actions">
      <button
        className="action-btn btn_left"
        onClick={props.previous}
        disabled={props.contentIndex === 0 ? true : false}
      >
        &larr; Previous
      </button>

      <button
        className="action-btn btn_right"
        onClick={props.next}
        disabled={props.contentLength - props.contentIndex === 1 ? true : false}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default BottomActions;
