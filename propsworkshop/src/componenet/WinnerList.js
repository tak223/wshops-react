import React from 'react'

export const WinnerList = (props) => {
    // const list =[
    //     {
    //         name :'u1',
    //         adress: 'gafsa',
    //         email:'src',
    //         project: {
    
    //             name :'p1',
    //             des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
    //             rate:10
    
    
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
   const list2 = props.listprop.sort(function (a, b) {
        return a.project.rate - b.project.rate ;
      })
  return (
    <div>
 <div>
        <p>*******************************</p>
        {props.children}
        {props.title}
         <h1> {list2[0].project.name}</h1>
         <p> </p>

        </div>
    </div>
  )
}
WinnerList.defaultProps={
    title : 'hello am a difolt props',
}
//fama zedat props type !
