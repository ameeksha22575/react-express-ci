import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/") // backend endpoint
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <h1>{message || "Loading..."}</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
