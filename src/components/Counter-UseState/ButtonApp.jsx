import React from 'react'

export const ButtonApp = ({children, onClick}) => {
  return (
    <>
    
    <button onClick={onClick}>{children}</button>

    </>
  )
}
