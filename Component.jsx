import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { DangerButton } from "./AnotherComponent";
import Database from "./Data";

export const Greet = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Hello, world it's {time}</h1>
      <div class="container">
        <Button variant="primary">Primary BUTTON</Button>
        <DangerButton></DangerButton>
        <Alert variant="success">
          Hello, this name is imported: {Database.name}
        </Alert>
      </div>
    </>
  );
};
