// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
  const usernameInputRef = React.useRef();

  function handleSubmit(event){
    event.preventDefault();
    const value = usernameInputRef.current.value
    onSubmitUsername(username);
  }
 
  function handleChange(event) {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input value={username} onChange={handleChange} ref={usernameInputRef} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
