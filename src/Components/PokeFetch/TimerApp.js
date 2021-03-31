import React, { Component } from 'react';

class TimerApp extends Component {
  constructor(props) {
      super(props) 
          this.state = {
              timerOn: false,
              timerTime: 10,
            //   timerStart:0,
          }
      }
startTimer = () => {
    this.setState ({
        timerOn:true,
        timerTime: this.state.timerTime,
        timerStart: this.state.timerTime
    })
    this.timer = setInterval(() => {
        const newTime = this.state.timerTime - 1;
        if (newTime >= 0) {
            this.setState({
                timerTime:newTime
            });
        } else {
            clearInterval(this.timer);
            this.setState ({ timerOn:false});
            alert ('Pokemon Name Here')
        }
    })
};

resetTimer = () => {
    this.setState ({
        timerOn: false,
        timerTime: 0,
        timerStart:0,
    });
};
    render () {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
      return (
          <div>{timerTime}</div>
      )
  }    
}

export default TimerApp;