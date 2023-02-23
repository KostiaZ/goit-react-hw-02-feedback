export const Feedback = ({ title, options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>{title}</h2>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
