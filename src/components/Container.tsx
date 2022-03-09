import "./style/container.css";

interface propType {
  isTurn: boolean;
  glow: string;
  colors: string[];
  red: string[];
  handleTurnBtn: Function;
  name?: string;
}

export default function Container(props: propType) {
  return (
    <>
      <div className="box">
        <div className="container">
          {props.isTurn
            ? props.colors.map((item: string, index: number) => {
                return (
                  <div
                    className="light"
                    style={{
                      backgroundColor: item === props.glow ? item : "black",
                    }}
                    key={index}
                  ></div>
                );
              })
            : props.red.map((off, index) => {
                return (
                  <div
                    className="light"
                    style={{
                      backgroundColor: off,
                    }}
                    key={index}
                  ></div>
                );
              })}

          <button onClick={(e) => props.handleTurnBtn(e, props.name)}>
            {props.isTurn ? "Running" : "Turn On"}
          </button>
        </div>
      </div>
    </>
  );
}
