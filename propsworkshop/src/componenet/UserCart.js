import React from 'react'

export const UserCart = ({el,handlename,i}) => {
  return (
    <div><tr key={i}>
    <td> {el.name}  </td>
    <td> {el.adress} </td>
    <td>{ el.email}</td>
    <button onClick={()=>handlename(el.name,el.project.name)}> my name is </button>
    
     </tr></div>
  )
}
