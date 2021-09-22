import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from "../../constraints";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login With Username</h3>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
