import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification"
import { useState } from "react";




const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  }

  const totalFeedback = count.good + count.neutral + count.bad;

 return (
<>
     <Description />
     <Options updateFeedback={updateFeedback}
       totalFeedback={totalFeedback} />
     {totalFeedback === 0 && <Notification />}
     {totalFeedback > 0 && <Feedback  count={count}/>}
</>
);
};

export default App