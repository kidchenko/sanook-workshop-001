import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;

    this.setState({
      [name]: value
    })
  }

  submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent.');
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div className="container">
        <section>
          <h3 className="title">Hey! I'm Jose.</h3>
          <form onSubmit={this.submitForm}>
            <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id="name"
              placeholder="Name"
              className="form-field"
              required
              autoFocus />
            <input type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              id="email"
              placeholder="Email"
              className="form-field"
              required />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              id="message"
              placeholder="Message"
              rows={4}
              className="form-field"
              required>
            </textarea>
            <input type="submit" value="Send Message" className="btn"></input>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
