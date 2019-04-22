import * as React from 'react';

type Props = { title: string }

type State = {
  name: string,
  email: string,
  message: string,
  [key: string]: any; // or the type of your input
}

export class ContactForm extends React.Component<Props, State> {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;

    this.setState({
      [name]: value
    });
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
      <section>
        <h3 className="title">{this.props.title}</h3>
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
    )
  }
}