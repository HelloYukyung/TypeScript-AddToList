import React from "react";
import { IState as IProps } from "../App";

//const List = ({ people }: IProps) => {
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    //: JSX.Element[] 무엇을 return 해줄지 지정해주어야 함
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};
export default List;
