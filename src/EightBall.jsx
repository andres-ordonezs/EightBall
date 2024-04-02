import {useState} from "react";

import "./EightBall.css";

/**
 *
 */
function EightBall(answers) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  const styles = {
    backgroundColor: color,
  };

  return (
    <div className="EightBall" style={styles}>
      <div className="EightBall-message">
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default EightBall;
