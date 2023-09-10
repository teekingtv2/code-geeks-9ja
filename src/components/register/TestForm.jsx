import { useState, useEffect } from "react";

const TestForm = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log("Name is: ", e);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }, []);

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit}
        className="justify-content-center align-items-center"
      >
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            style={{ width: "50%", fontSize: "20px" }}
            className="p-3"
            placeholder="Name"
          />
        </div>

        <div className="text-light fw-bold fs-xlarge my-3">Name is: {name}</div>

        <div className="w-50">
          <button type="submit" className="btnn btnn4 p-3">
            Submit test
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
