import React, { Component } from "react";
import { createUser } from "../store/allUsersStore";
import { connect } from "react-redux";
import { Link} from "react-router-dom";


class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      dateOfBirth: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createUser({ ...this.state });
    this.setState({
      name: "",
      password: "",
      email: "",
      dateOfBirth: "",
    })
  }

  render() {
    const { name, password, email} = this.state;
    const { handleSubmit } = this;
    return (
        <div>
          <div>
            <div> Register User</div>
          </div>
            <form id="addUser-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input  name="name" type="text" value={name} onChange={this.handleChange} />
              </div>
              <div >
                <label htmlFor="password">Password:</label>
                <input name="password" type="password"value={password} onChange={this.handleChange} />
              </div>
              <div >
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" value={email} onChange={this.handleChange} />
              </div>
              <form onSubmit={this.handleSubmit}>
      </form>

              <div >
                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
              </div>

          </form>
          <label>
          Rate Your Interest in Creative Activities :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Athletic Activities :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Logical Activities :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Relaxing Activities :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Entertaining Activities :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0"> Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch, { history }) => ({
  createUser: (user) => dispatch(createUser(user, history)),
});

export default connect(null, mapDispatchToProps)(Registration);
