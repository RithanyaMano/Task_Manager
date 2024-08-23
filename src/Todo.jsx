import React, { useEffect } from "react";
import { useState } from "react";
export default function Todo() {
  const [name, setValue] = useState("");
  const fun = () => {
  const n = prompt("enter a name");
    setValue(n);
};
  if (name) {
    localStorage.setItem("username", name);
  }
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        setValue(storedName);
    }
  }, [name]);
  return (
    <div>
      <button onClick={fun}>change</button>
      <h1>{name}</h1>
    </div>
  );
}
