import React from 'react'

export const ButtonApp = ({children, onClick, className}) => {
  return (
    <>
    
    <button className={className} onClick={onClick}>{children}</button>

    </>
  )
}
