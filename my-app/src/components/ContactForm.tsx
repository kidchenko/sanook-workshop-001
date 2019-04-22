import React, { useState } from 'react';

type Props = { title: string }

export const ContactForm = ({ title }: Props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`
    Hi, ${name} sen't you a message.
    Email: ${email}
    Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section>
      <h3 className="title">{title}</h3>
      <form onSubmit={submitForm}>
        <input type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          id="name"
          placeholder="Name"
          className="form-field"
          required
          autoFocus />
        <input type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
          className="form-field"
          required />
        <textarea
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
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