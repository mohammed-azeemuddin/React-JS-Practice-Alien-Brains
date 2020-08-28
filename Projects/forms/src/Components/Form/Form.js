import React from "react";

import "./style.css";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPhone: "",
      userPassword: "",
      userGender: ""
    };
  }

  onFieldChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
  }

//    executed when something changes in name input field
//   onNameChange = (e) => {
//     this.setState({
//       name: e.target.value
//     });
//   };

//    executed when something changes in email input field
//   onEmailChange = (e) => {
//     this.setState({
//       email: e.target.value
//     });
//   };

//    executed when something changes in phone input field
//   onPhoneChange = (e) => {
//     this.setState({
//       phoneNumber: e.target.value
//     });
//   };

//    executed when something changes in password input field
//   onPasswordChange = (e) => {
//     this.setState({
//       password: e.target.value
//     });
//   };

//    executed when something changes in gender select field
//   onGenderChange = (e) => {
//     this.setState({
//       gender: e.target.value
//     });
//    };

  //  executed when user click on submit button to submit the form
  onSubmit = () => {

    // if(this.state.phoneNumber === '' ||
    // this.state.phoneNumber.length !== 10){
    //     window.alert("Invalid Phone number")
    //     return;
    // }

    const data = `
    Name: ${this.state.userName},
    Email: ${this.state.userEmail},
    Phone: ${this.state.userPhone},
    Gender: ${this.state.userGender},
    Password: ${this.state.userPassword},
    `;

    window.alert(data);
    this.clearForm();
  };

  //  clears the form
  clearForm = () => {
    this.setState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userPassword: "",
        userGender: ""
    });
  };

  render = () => {
    return (
      <div className="container">
        <div className="form-container">
          <p className="title">-------- User Form -----------</p>
          <input
            name = "userName"
            onChange={this.onFieldChange}
            value={this.state.name}
            type="text"
            placeholder="Enter name"
          />
          <input
            name = "userEmail"
            onChange={this.onFieldChange}
            value={this.state.email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            name = "userPhone"
            onChange={this.onFieldChange}
            value={this.state.phoneNumber}
            type="text"
            placeholder="Enter Phone number"
          />

          <select 
            name = "userGender"
            onChange={this.onFieldChange} value={this.state.gender}>
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            name = "userPassword"
            onChange={this.onFieldChange}
            value={this.state.password}
            type="password"
            placeholder="Enter Password"
          />

          <button onClick={this.onSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    );
  };
}

export default Forms;