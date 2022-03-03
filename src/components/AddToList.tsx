import React, { useState } from "react";
//setPeople에 접근하기 위해
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: "", img: "", note: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // overwrite target name & value
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
  };
  return (
    <div className="AddToList">
      <input
        value={input.name}
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="name"
        className="AddToList-input"
      />
      <input
        value={input.age}
        name="age"
        onChange={handleChange}
        type="text"
        placeholder="Age"
        className="AddToList-input"
      />
      <input
        value={input.img}
        name="img"
        onChange={handleChange}
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
      />
      <textarea
        value={input.note}
        onChange={handleChange}
        name="note"
        placeholder="Note"
        className="AddToList-input"
      />
      <button className="AddToDoList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};
export default AddToList;
