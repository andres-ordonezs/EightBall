import {useState} from "react";

import "./EightBall.css";
import {choice, updateCounter} from "./eightball";

const POSSIBLE_ANSWERS = [
  {msg: "It is certain.", color: "green"},
  {msg: "It is decidedly so.", color: "green"},
  {msg: "Without a doubt.", color: "green"},
  {msg: "Yes - definitely.", color: "green"},
  {msg: "You may rely on it.", color: "green"},
  {msg: "As I see it, yes.", color: "green"},
  {msg: "Most likely.", color: "green"},
  {msg: "Outlook good.", color: "green"},
  {msg: "Yes.", color: "green"},
  {msg: "Signs point to yes.", color: "goldenrod"},
  {msg: "Reply hazy, try again.", color: "goldenrod"},
  {msg: "Ask again later.", color: "goldenrod"},
  {msg: "Better not tell you now.", color: "goldenrod"},
  {msg: "Cannot predict now.", color: "goldenrod"},
  {msg: "Concentrate and ask again.", color: "goldenrod"},
  {msg: "Don't count on it.", color: "red"},
  {msg: "My reply is no.", color: "red"},
  {msg: "My sources say no.", color: "red"},
  {msg: "Outlook not so good.", color: "red"},
  {msg: "Very doubtful.", color: "red"},
];

/** Eightball generates random answers and colors
 *
 * Props:
 * - answers (an array of objects with color and msg)
 *
 * State:
 * - color
 * - message
 *
 * App --> EightBall
 */

function EightBall({answers = POSSIBLE_ANSWERS}) {
  const [answer, setAnswer] = useState({
    color: "black",
    msg: "Think of a Question",
  });

  const [counter, setCounter] = useState([
    {label: "Green", counter: 0},
    {label: "Goldenrod", counter: 0},
    {label: "Red", counter: 0},
  ]);

  const styles = {
    backgroundColor: answer.color,
  };

  const randomAnswer = answers[choice(answers.length)];

  function handleClick(evt) {
    setAnswer(randomAnswer);
    setCounter(updateCounter(answer.color, counter));
  }

  console.log("answer: ", answer);

  return (
    <div className="container">
      <div className="EightBall" style={styles} onClick={handleClick}>
        <div className="EightBall-message">
          <h2>{answer.msg}</h2>
        </div>
      </div>
      <div className="EightBall-counter">
        <ul>
          {counter.map((c) => (
            <li>
              {c.label}: {c.counter}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="EightBall-button"
        onClick={() => {
          setAnswer({
            color: "black",
            msg: "Think of a Question",
          });
          setCounter([
            {label: "Green", counter: 0},
            {label: "Goldenrod", counter: 0},
            {label: "Red", counter: 0},
          ]);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default EightBall;
