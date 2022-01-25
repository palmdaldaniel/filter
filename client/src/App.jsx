import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

const data = [
  {
    partitionId: "1",
    enqueueTime: "2022-01-18T14:52:48Z",
  },
  {
    partitionId: "3",
    enqueueTime: "2022-01-18T15:05:28Z",
  },
  {
    partitionId: "2",
    enqueueTime: "2022-01-18T16:57:58Z",
  },
  {
    partitionId: "0",
    enqueueTime: "2022-01-18T16:00:28Z",
  },
];

console.log(data);
function App() {
  const [text, setText] = useState("");

  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    if (text === "") {
      setFilterData(data);
      return;
    }

    const filteredData = filterData.filter((item) => item.partitionId === text);

    setFilterData(filteredData);
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container className="mx-auto text-center">
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="d-sm-flex" controlId="search">
          <Form.Control
            style={{ width: "80%" }}
            value={text}
            className="m-1"
            type="text"
            placeholder="Search by partition id"
            value={text}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
      </Form>
      {filterData &&
        filterData.map((item, i) => {
          return (
            <li key={i}>
             ID: {item.partitionId}, Enqueuetime: {item.enqueueTime}
            </li>
          );
        })}
    </Container>
  );
}

export default App;
