import './styles/global.css';

import { Habit } from "./components/Habit";

export function App() {

  return (
    <>
      <Habit completed={1}/>
      <Habit completed={2}/>
    </>
  );
}