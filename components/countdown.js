import React, { Component } from "react";
import styles from "../styles/Home.module.css";

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0
        };
        // componentWillMount is depreciated.. will show 0-0-0 for a few seconds after loading
        // todo: find workaround 
        this.getTimeLeft();
    }

    componentDidMount() {
        setInterval(() => {
            this.getTimeLeft();
        }, 1000);
    }

    getTimeLeft() {
        const time = Date.parse("November 01, 2022") - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0 });
        } else {
            const minutes = Math.floor((time /1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days: days, hours: hours, minutes: minutes });
        }
    } 

    render() {
        return (<h3 className={styles.cd}>Only {this.state.days} days, {this.state.hours} hours, and {this.state.minutes} minutes left!</h3>);
    }
}

export default Countdown;