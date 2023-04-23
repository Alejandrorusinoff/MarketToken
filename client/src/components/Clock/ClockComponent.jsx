import * as React from "react";
import { format } from "../../utils/functions";
import '../../styles/questionStyles.css'

const ClockComponent = ({ time = 0 }) => {
  return (
    <div className="clockContainer clock">
        <div className="question">{format(time)}</div>
    </div>
  );
}

export default ClockComponent

