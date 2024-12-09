import { useState } from 'react';

const Button = ({ handleClick, title }) => {
  return <button onClick={handleClick}>{title}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, bad, neutral, total }) => {
  if (good || bad || neutral) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{(good - bad) / total}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{(good * 100) / total}%</td>
            </tr>
          </tbody>
        </table>
        {/* <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={good + neutral + bad} />
        <StatisticLine text="Average" value={(good - bad) / total} />
        <StatisticLine text="Positive" value={`${(good * 100) / total}%`} /> */}
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button handleClick={() => setGood(good + 1)} title="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} title="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} title="Bad" />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
      />
    </div>
  );
};

export default App;
