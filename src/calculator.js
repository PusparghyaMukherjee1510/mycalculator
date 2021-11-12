import React from "react";
class CalculaTor extends React.Component{
    constructor(props){
        super(props);
        this.state={ num1:"",
                     num2:"",
                     result:""
                   };
            }
    add=(num1,num2)=>{
        this.setState({result:this.state.num1+num2}); 
    };
    sub=(num1,num2)=>{
         this.setState({result:this.state.num1-num2});
   };
    mul=(num1,num2)=>{
         this.setState({result:this.state.num1*num2});
};
    diV=(num1,num2)=>{
        this.setState({result:this.state.num1/num2});
};

    render(){
        return(<div>
            <div>
                <p>Num1:</p>
                <input type="number" value={this.state.num1}/>
                <p>Num2:</p>
                <input type="number" value={this.state.num2}/>
                <p>Result:</p>
                <textarea type="number" value={this.state.result}/>
            </div>
            <div>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.sub}>SUB</button>
                <button onClick={this.mul}>MUL</button>
                <button onClick={this.diV}>DIV</button>
            </div>
            
        </div>);
    }
}
export default CalculaTor;