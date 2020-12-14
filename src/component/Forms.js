import React, { Component } from 'react'

class Forms extends Component {
    state = {
        inputValue: ""
    };
    onHandleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            inputValue:event.target.value
        });
    };
    onSubmit = () => {
        console.log(this.state.inputValue)
    }
    render() {
        return (
        <form>
                <h2>Form Component</h2>
           <input type="text" value={this.state.inputValue} onChange={this.onHandleChange} />
       <button type="button" onClick={this.onSubmit}> Submit </button>   
        </form>
        );
    }
}
export default Forms;

