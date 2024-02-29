import React, {useState} from 'react';
import './Main.css';
import Field from './Field';

const Main = () => {
  const [ isHovered, setIsHovered] = useState(false);
  const [fields, setFields] = useState([
    { name: 'Holding Cost', value: [] },
    { name: 'Minor Cost', value: [] },
    { name: 'Setup Cost', value: [] },
    { name: 'Demand', value: [] },
  ]);

  const handleRun = () => {
    return <p1> you have clicked me</p1>;
  }

  return (
    <div className="main">
      <h1>Enter the values of the necessary parameters</h1>
      {fields.map((field, index) => (
        <Field
          key={field.name}
          Text={field.name}
          index={index}
          fields={fields}
          setFields={setFields}
        />
      ))}
      <button className={`button ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleRun} > Run </button>
    </div>
  )
}
export default Main