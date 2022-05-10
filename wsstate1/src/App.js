import React,{Component} from "react";
import Compo from "./component/Compo";
export default class App extends Component {
  state = { 
   text : 'welcome g f2'

   } 
    changetext=()=>{
     this.setState({text:'welcome everyone '})
   }
   changetext2=(text)=>{
    this.setState({text:text})
  }
  render() { 
    return (
      <div>
      <Compo  changetext2={ this.changetext2}/>
      <button onClick={()=>this.changetext()} > change</button>
        {this.state.text}
      </div>
    );
  }
}
 

