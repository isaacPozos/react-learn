import { useEffect } from "react"


export const Message = () => {
    useEffect(() => {
        console.log('Message Mounted');
        
        return () => {
            console.log('Message Unmounted');
        }
    }, [])
    
  return (
    <>
        <span> Usuario ya existe</span>
    </>
  )
}
