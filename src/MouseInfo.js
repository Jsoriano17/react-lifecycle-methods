import React from 'react'

export default class MouseInfo extends React.Component {
    state = {
        posX: 0,
        posY: 0
    }
    updateMouse = (e) => {
        this.setState({
            posX: e.screenX,
            posY: e.screenY
        })
    }
    componentDidMount() { 
        window.addEventListener('mousemove', this.updateMouse)
      }
    render() {
        const {posX, posY} = this.state
        return(
            <div>
                <p>Mouse Position x: {posX}</p>
                <p>Mouse Position y: {posY}</p>
            </div>
        )
    }
}