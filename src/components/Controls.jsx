const Controls = ({counter, setCounter}) => {
  return (
    <>
      <button onClick={() => {setCounter(counter-1)}}> - </button>
      <button onClick={() => {setCounter(counter+1)}}> + </button>
    </>
  )
}

export default Controls;