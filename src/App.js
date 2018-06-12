import React, { Component } from 'react';
import "./App.css";
import Xyz from './props_use';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {hello:"helloooo"};
  }*/
  state = {
           hello:"helloooo",
           req: [{name : "swth", age : 20},{name : "tej", age : 30},{name : "ji", age : 80}],
           litext : ''
           };
  
  /* state = {hello:"helloooo"};
  obj1 = [ 
      { name : "swth", age : 20},{name : "tej", age : 30}
    ];*/
  render() {
  let a=[];
  for(let i=0;i<5;i++){
      a[i]=i+1;
  }

  function HelloName() {
    this.setState({hello:"hello baby am changed!!!!!"})
  }
  function addli(){
    alert("hey");
    this.setState({litext: "New text: " + this.state.litext})
  }
  function updateInput(e){
    this.setState({litext : e.target.value})
  }
    return (
      <div className="App">
        <div>
          {a}
        </div>
        <div className="sub-sec">
          <p className="hello-name" onClick={HelloName.bind(this)}>{this.state.hello}</p>          
        </div>
        {/* <Xyz name={this.obj1[0].name} age={this.obj1[0].age}/> */}
        {/* <Xyz name={this.state.req[0].name} age={this.state.req[0].age}/>
        <Xyz name="hari" age="30"/> */}
        <ul>
          {this.state.req.map((ele,i) => {
            return <li key={i}><Xyz name={this.state.req[i].name} age={this.state.req[i].age}/></li>
          })}
          <li>{this.state.litext}</li>
        </ul>
        <input type="text" onChange={updateInput.bind(this)}/>
        <button type="button" onClick={addli.bind(this)}>Click Me!</button>
      </div>
    );
  }
}

export default App;