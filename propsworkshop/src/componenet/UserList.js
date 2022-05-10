import React from 'react'
import { UserCart } from './UserCart'

export const UserList = (props) => {
    // const list =[
    //     {
    //         name :'u1',
    //         adress: 'gafsa',
    //         email:'src',
    //         project: {
    
    //             name :'p1',
    //             des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
    //             rate:2
    
    
    //         }
    //     },
    //     {
    //         name :'u2',
    //         adress: 'gafsa',
    //         email:'src',
    //         project: {
    
    //             name :'p2',
    //             des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
    //             rate:5
    
    
    //         }
    //     },
    //     {
    //         name :'u3',
    //         adress: 'gafsa',
    //         email:'src',
    //         project: {
    
    //             name :'p3',
    //             des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
    //             rate:8,
    
    
    //         }
    //     }
    
    // ]

  return (
    <div>
<table border ="1">
    <tr>
        <td>name</td>
        <td>adress</td>
        <td> email</td>
    </tr>
    {
        props.listprop.map(
            (el,i)=> <UserCart el={el} handlename={props.handlename} i={i}/>
        )
    }
</table>

    </div>
  )
}
