# sanook-workshop-001

# CodeSanook Workshop 001: React, TypeScript and VS Code.

## Create an App with React and Typescript `react-create-app` 

Run in your terminal: 

`$ npx create-react-app APP_NAME --typescript`

> Replace APP_NAME for the name of your app

The output will be like that:

```
You can now view contact-final in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.8:3000/

Note that the development build is not optimized.
To create a production build, use yarn build (or npm run build).
```

Links: [react-create-app](https://github.com/facebook/create-react-app)

## Add the CSS and Delete Generated Code

Open `App.css` and read the code is a small css code. 

Now Replace `./contact/src/App.css` by `./App.css`

and, 

Delete the generated code inside the `return` in `App.tsx`, your file should be like that:

`App.tsx`
```
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
    </div>
  );
}

export default App;
```

## Create a Contact Form

Create a contact form with: Name, Email and Message (long text).

`App.tsx`
```
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <section>
        <h3 className="title">Hi, there!</h3>
        <form>
          <input type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form-field"
            required
            autoFocus />
          <input type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-field"
            required />
          <textarea
            name="message"
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

export default App;
```


