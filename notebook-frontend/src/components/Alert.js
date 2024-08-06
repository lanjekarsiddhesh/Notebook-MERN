import React, { useContext } from 'react'
import MessageContext from "../context/notes/noteContext";

export default function Alert() {
  const MSGcontext = useContext(MessageContext)
  const {alert} = MSGcontext
  return (
   <>
        {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show text-center p-2 m-0`} role="alert">
        <strong>{alert.message}</strong>
        </div>}

        </>
  
  )
}
