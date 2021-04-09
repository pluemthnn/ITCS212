import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      age: '',
      nation:'',
      disa:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.type === 'special'){
        alert(`Hello, ${this.state.fname} ${this.state.lname}\nYour nationality is ${this.state.nation}`);
    }else{
      alert(`Hello, ${this.state.fname} ${this.state.lname}\nYour age is ${this.state.age}`);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input name="fname" type="text" value={this.state.fname} onChange={this.handleChange} />
        </label><br />
        <label>
          Last name:
          <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange} />
        </label><br />
        <label>
          Age:
          <input name="age" type="text" value={this.state.age} onChange={this.handleChange} />
        </label><br />
        {this.props.type === 'special' && <><label>
          Pick your nationality:
          <select name="nation" value={this.state.nation} onChange={this.handleChange}>
            <option value="wakandian">Wakandian</option>
            <option value="martian">Martian</option>
            <option value="ninja">Ninja</option>
          </select>
        </label><br />
          <label>
            Disability:
            <select name="disa" value={this.state.disa} onChange={this.handleChange}>
            <option value="no" >No</option>
            <option value="yes">Yes</option>
          </select>
          </label><br /> </>}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
//if want normal just replace to special or dont type anythings.
ReactDOM.render(
  <NameForm type='special'/>,
  document.getElementById('root')
);