import { useEffect, useState } from "react";
import Container from "./components/Container";

let timer1: NodeJS.Timeout;
let timer2: NodeJS.Timeout;
let timer3: NodeJS.Timeout;
let timer4: NodeJS.Timeout;

export default function App() {
  const [glow, setGlow] = useState<string>("green");
  const [validate, setValidate] = useState<boolean>(true);
  const [turn, setTurn] = useState<number>(1);
  const [data, setData] = useState<number>(0);
  const [time, setTime] = useState<number>(3000);

  const red: string[] = ["red", "black", "black"];
  const colors: string[] = ["red", "yellow", "green"];

  const changeTurn = (n: number) => {
    setTimeout(() => {
      setTurn(n);
      setGlow("green");
    }, 1000);
  };

  useEffect(() => {
    if (turn === 1) {
      timer1 = setTimeout(() => {
        setGlow("yellow");
        timer1 = setTimeout(() => {
          setGlow("red");
          changeTurn(2);
        }, 2000);
      }, time);
    } else if (turn === 2) {
      timer2 = setTimeout(() => {
        setGlow("yellow");
        timer2 = setTimeout(() => {
          setGlow("red");
          changeTurn(3);
        }, 2000);
      }, time);
    } else if (turn === 3) {
      timer3 = setTimeout(() => {
        setGlow("yellow");
        timer3 = setTimeout(() => {
          setGlow("red");
          changeTurn(4);
        }, 2000);
      }, time);
    } else if (turn === 4) {
      timer4 = setTimeout(() => {
        setGlow("yellow");
        timer4 = setTimeout(() => {
          setGlow("red");
          changeTurn(1);
        }, 2000);
      }, time);
    }
  }, [turn]);

  const handleStart = () => {
    const newTime = data * 1000;
    if (data <= 0 || isNaN(data) || data >= 20) {
      setValidate(false);
    } else {
      setValidate(true);
      setTime(newTime);
      setTurn(1);
      setGlow("green");
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    }
  };
  const handleReset = () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    setGlow("green");
    setTime(2000);
    setTurn(1);
  };

  const handleTurnBtn = (e: Event, name: string) => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    setTurn(parseInt(name));
    setGlow("green");
  };

  return (
    <>
      <div style={{ display: "flex", height: "600px" }}>
        <Container
          isTurn={turn === 1 ? true : false}
          glow={glow}
          colors={turn !== 1 ? red : colors}
          red={red}
          handleTurnBtn={handleTurnBtn}
          name="1"
        />
        <Container
          isTurn={turn === 2 ? true : false}
          glow={glow}
          colors={turn !== 2 ? red : colors}
          red={red}
          handleTurnBtn={handleTurnBtn}
          name="2"
        />
        <Container
          isTurn={turn === 3 ? true : false}
          glow={glow}
          colors={turn !== 3 ? red : colors}
          red={red}
          handleTurnBtn={handleTurnBtn}
          name="3"
        />
        <Container
          isTurn={turn === 4 ? true : false}
          glow={glow}
          colors={turn !== 4 ? red : colors}
          red={red}
          handleTurnBtn={handleTurnBtn}
          name="4"
        />
      </div>
      <div className="start">
        <input
          type="text"
          placeholder="Enter time in sec"
          onChange={(e) => setData(parseInt(e.target.value))}
        ></input>
        <button onClick={handleStart}>Start</button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      {validate ? null : <span>data should be number and between 1-20</span>}
    </>
  );
}
