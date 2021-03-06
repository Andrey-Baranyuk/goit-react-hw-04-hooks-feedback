import { useState} from "react";
import Section from "components/Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
import Statistics from "components/Statistics/Statistics";
import styles from 'components/App/App.module.css'


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = options => {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      
      default: return;
    }
  };

  const countTotalFeedback = () => [good, neutral, bad]
    .reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round((good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  const optionName = ['good', 'neutral', 'bad'];
  const value = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <div className={styles.wrapper}>
        <section title="Please leave feedback">
          <FeedbackOptions
            options={optionName}
            onLeaveFeedback={handleIncrement}
          />
        </section>

        <Section title="Statistics" >
          {value === 0 ? (
            < Notification massage="No feedback given" />
          ) : (
            < Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}

        </Section>
      </div>

  )

};


// Component //

/* export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage() {
    const value = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const stateName = Object.keys(this.state);
    const value = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();

    console.log(value);

    return (
      <div className={styles.wrapper}>
        <section title="Please leave feedback">
          <FeedbackOptions
            options={stateName}
            onLeaveFeedback={this.handleIncrement}
          />
        </section>

        <Section title="Statistics" >
          {value === 0 ? (
            < Notification massage="No feedback given" />
          ) : (
            < Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}

        </Section>
      </div>
    );
  }

} */
