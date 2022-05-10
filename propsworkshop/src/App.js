
import { UserList } from './componenet/UserList';
import { Projectlist } from './componenet/Projectlist';
import { WinnerList } from './componenet/WinnerList';

function App() {
  const list =[
    {
        name :'u1',
        adress: 'gafsa',
        email:'src',
        project: {

            name :'p1',
            des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
            rate:10


        }
    },
    {
        name :'u2',
        adress: 'gafsa',
        email:'src',
        project: {

            name :'p2',
            des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
            rate:5


        }
    },
    {
        name :'u3',
        adress: 'gafsa',
        email:'src',
        project: {

            name :'p3',
            des:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas ut ',
            rate:8,


        }
    }

]
const handlename=(name,project)=> {
  alert(`my name is ${name} and my project is ${project} ` )
}
  return (
    <div className="App">
      <UserList listprop ={list}  handlename={ handlename} />
      <Projectlist listprop ={list} title ='project list'/>
      <WinnerList listprop ={list}  >
           <p>hello am child</p>
      </WinnerList>
    </div>
  );
}

export default App;
