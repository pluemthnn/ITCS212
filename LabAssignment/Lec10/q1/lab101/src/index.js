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
    alert('A name was submitted: ' + this.state.fname + this.state.lname + this.state.age);
    event.preventDefault();
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
            <option value="">Grapefruit</option>
            <option value="">Lime</option>
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

ReactDOM.render(
  <NameForm type='special' />,
  document.getElementById('root')
);