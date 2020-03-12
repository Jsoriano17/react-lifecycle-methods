import React, { Component, useImperativeHandle } from "react";
export default class Animation extends Component {
    state = {
        xPos: 185,
        dx: 4,
        yPos: 185,
        dy: 4,
        inputValue: ''
    };
    /////////////////////////////////////////////

    handleUp = () => {
        this.setState({
            inputValue: 'up'
        })
        console.log(this.state.inputValue)
    }

    handleLeft = () => {
        this.setState({
            inputValue: 'left'
        })
        console.log(this.state.inputValue)
    }



    /////////////////////////////////////////////

    componentDidMount() {
        this.ticker = setInterval(() => {
            this.nextStep()
        }, 30)
    }
    componentDidUpdate(prevProps, prevState) {

        ///////////////////////////////////////////////////////////////////////////////////////
        if (this.state.inputValue === 'left') {
            if (prevState.xPos > this.props.width - boxWidth) {
                this.setState({
                    dx: -4,
                    xPos: this.props.width - boxWidth - 1
                    // xPos: 599
                })
            }
            if (prevState.xPos < 0) {
                this.setState({
                    dx: 4,
                    xPos: 1
                })
            }
        }
        if (this.state.inputValue === 'up') {
            if (prevState.yPos > this.props.height - boxHeight) {
                this.setState({
                    dy: -4,
                    yPos: this.props.height - boxHeight - 1
                    // xPos: 599
                })
            }
            if (prevState.yPos < 0) {
                this.setState({
                    dy: 4,
                    yPos: 1
                })
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////
    }
    nextStep() {
        const { xPos, dx, yPos, dy } = this.state
        if (this.state.inputValue === 'left') {
            this.setState({
                xPos: xPos + dx
            })
        }
        if (this.state.inputValue === 'up') {
            this.setState({
                yPos: yPos + dy
            })
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////
    render() {
        const { width, height } = this.props;
        const { xPos, yPos } = this.state;
        return (
            <>
                <button onClick={this.handleUp}>up and down</button>
                <button onClick={this.handleLeft}>left and right</button>
                <div style={{ ...styles.container, width, height }}>
                    <div style={{ ...styles.moveMe, left: xPos, top: yPos }}></div>
                </div>
            </>
        );
    }
}
const colors = ['green', 'red', 'purple', 'pink', 'orange', 'yellow', 'blue', 'brown', 'grey']
const randomColor = colors[Math.floor(Math.random() * colors.length)]
const boxWidth = 35
const boxHeight = 35
const styles = {
    container: {
        border: `3px ${randomColor} solid`,
        backgroundColor: "#f1f1f1",
        position: "relative"
    },
    moveMe: {
        position: "absolute",
        height: `${boxHeight}px`,
        width: `${boxWidth}px`,
        backgroundColor: `${randomColor}`,
        borderRadius: "50%"
    }
};