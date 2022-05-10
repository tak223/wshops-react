import React from 'react'

export const Projectlist = (props) => {
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
    <div style={{ display :'flex',flexWrap:'wrap',width:'300px'}}>
    <p>*************************************************</p>
    <p> {props.title}</p>
{
    props.listprop.map(
        (el,i)=>
         <div>
         <h1> {el.project.name}</h1>
         <p> {el.project.des}</p>

        </div>
    
    )
}

    </div>
  )
}
