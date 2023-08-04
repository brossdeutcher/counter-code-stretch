import Controls from "./Controls";

const Counter = (props) => {

  const counter = props.counter;
  const setCounter = props.setCounter;

  return (
    <>
      <h1>counter</h1>
      {counter}
      <br />
      <Controls counter={counter} setCounter={setCounter} />
    </>
  )
}

export default Counter;