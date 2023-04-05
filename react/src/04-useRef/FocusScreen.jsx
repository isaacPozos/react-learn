import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();
  onClick = ()=> inputRef.current.select();
  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input ref={inputRef} type="text" placeholder="ingrese su nombre" />
        <button className="btn btn-info mt-2" onClick={onClick()}>Set focus</button>
    </>
  )
}
