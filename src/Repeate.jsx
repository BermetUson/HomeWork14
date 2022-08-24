import React, { useState } from "react";

function Repeate() {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);

  const inputHandlere = (e) => {
    setState(e.target.value);
  };

  const addHandlere = () => {
    setValue([
      ...value,
      {
        value: state,
        id: Math.random()
      },
    ]);
    setState('')
  };
  
  const deleteHandlere = (id) =>{
    let filterHandlere = value.filter((el) => el.id !== id)
    setValue(filterHandlere)
  }

  return (
    <div>
      <input value={state} onChange={inputHandlere} />
      <button onClick={addHandlere}>Add</button>
      {value.map((el) => (
        <>
          <li>{el.value}</li>
          <button onClick={() => deleteHandlere(el.id)}>Delete</button>
        </>
      ))}
    </div>
  );
}

export default Repeate;
