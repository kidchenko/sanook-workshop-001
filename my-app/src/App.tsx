import React, { Component } from 'react';
import './App.css';
import { ContactForm } from "./components/ContactForm";
import { Layout } from "./components/Layout";


class App extends Component {

  render() {
    return (
      <Layout>
        <ContactForm title="Hey! I'm Jose." />
      </Layout>
    );
  }
}

export default App;
