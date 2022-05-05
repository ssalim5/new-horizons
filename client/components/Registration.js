import React, { Component } from "react";
import { createUser } from "../store/allUsersStore";
import { connect } from "react-redux";
import { Link, Dropdown} from "react-router-dom";


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
    const { name, password, email, dateOfBirth } = this.state;
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
              <div >
                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
              </div>

          </form>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch, { history }) => ({
  createUser: (user) => dispatch(createUser(user, history)),
});

export default connect(null, mapDispatchToProps)(Registration);
