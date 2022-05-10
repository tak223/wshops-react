import { ListProduct } from "./components/ListProduct";


function App() {
  const list=[
    {   
        img:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        name:'p1',
        prix:50,
        catg:'cat1',
    },
    {   
        img:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        name:'p2',
        prix:52,
        catg:'cat2',
    },
    {   
        img:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        name:'p3',
        prix:50,
        catg:'cat3',
    },
]
const handelprix=(prix)=>{
 return alert(`le prix de prod est ${prix}`)
}

  return (
    <div className="App">
      <button> femme</button><button>all</button>
      <ListProduct list ={list} handelprix ={handelprix}/>
    </div>
  );
}

export default App;
