export const Statistics = ({ title, good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {total}</li>
        <li>positive: {positive}</li>
      </ul>
    </div>
  );
};
