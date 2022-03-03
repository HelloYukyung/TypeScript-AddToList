import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "sally",
      url: "https://w.namu.la/s/7bebfcd4a61c9a4e7f3b0898eff08e7e3373be846379c7564a1fd123eb68cba210b367e817c52278ab93009d9a967b1af7a170b4d1381b1f15480ae995e60f3d1617bd9006124ccef0088ba51dd31b8e9e2f99154a0f9115c414337090aaf165",
      age: 10,
      note: "라인프렌즈의 등장 캐릭터. 귀엽고 앙증맞은 외모와는 달리 의외로 과격하다.",
    },
  ]);

  return (
    <div className="App">
      <h1>people invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
