// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {display1: false, display2: false}

  displayingFirstName = () => {
    const {display1} = this.state
    this.setState({display1: !display1})
  }

  displayingLastName = () => {
    const {display2} = this.state
    this.setState({display2: !display2})
  }

  render() {
    const {display1, display2} = this.state
    return (
      <div className="main-container">
        <h1>Show/Hide</h1>
        <div className="inner-container">
          <div className="button-container">
            <button type="button" onClick={this.displayingFirstName}>
              Show/Hide Firstname
            </button>
            {display1 ? <p>Joe</p> : ' '}
          </div>
          <div className="button-container">
            <button type="button" onClick={this.displayingLastName}>
              Show/Hide Lastname
            </button>
            {display2 ? <p>Jonas</p> : ' '}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
