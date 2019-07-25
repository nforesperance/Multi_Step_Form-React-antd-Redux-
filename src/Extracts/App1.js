import React from 'react'
import Step1 from './Form1'
import Step2 from './Form2'
import Step3 from './Form3'
import Form1 from './Step1'
import Form2 from './Step2'
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <Step1/>,
  },
  {
    title: 'Second',
    content: <Step2 />,
  },
  {
    title: 'Last',
    content: <Step3 />,
  },
];

export class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    if (this.state.current == 0) {
      this.props.form.validateFieldsAndScroll(["picture"], (err, values) => {
        if (!err) {
          const current = this.state.current + 1;
          // console.log(current)
          this.setState({ current });
        }
      });
    }      
    const current = this.state.current + 1;
    this.setState({ current });
    
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className = "steps">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
		 {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} className = "but">
              Precedent
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()} className = "but">
              Suivant
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}  className = "but">
              Done
            </Button>
          )}
         
        </div>
      </div>
    );
  }
}
export default App1;