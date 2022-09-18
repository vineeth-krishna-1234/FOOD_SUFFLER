import React from 'react';
import Calendar from './calendar.js';
import './inputcomponent.css'
import './App.js';
class InputComponent extends React.Component {
   constructor(props) {
       super(props);
       this.state={Breakfast_items:"",Lunch_items:"",Dinner_items:""}
       
       this.Submit_items=this.Submit_items.bind(this)
       this.Lunch_onchange=this.Lunch_onchange.bind(this)
       this.Brkfast_onchange=this.Brkfast_onchange.bind(this)
       this.Dinner_onchange=this.Dinner_onchange.bind(this)
       this.TableData=this.TableData.bind(this)
       this.TableView=this.TableView.bind(this)
   }
   Submit_items(event){  
        event.preventDefault(); 
   }
   Brkfast_onchange(e){
       this.setState({Breakfast_items: e.target.value})
       console.log(this.state.Breakfast_items)
   }
   Lunch_onchange(event){
       this.setState({Lunch_items: event.target.value})
       console.log(this.state.Lunch_items)
   }
   Dinner_onchange(event){
       this.setState({Dinner_items: event.target.value})
       console.log(this.Dinner_items)
   }
   TableData(arg){
       let itemlist=""
       if (arg=="Breakfast"){
           itemlist=this.state.Breakfast_items.split(",")
       }
       else{
           if(arg=="Lunch"){
               itemlist=this.state.Lunch_items.split(",")
        
           }
           else{
               itemlist=this.state.Dinner_items.split(",")
           }
       }
       let sorteditems=itemlist.sort(()=>{return(0.5-Math.random())})
       return(<tr><td>{arg}</td>
       <td>{sorteditems[0]}</td>
       <td>{sorteditems[1]}</td>
       <td>{sorteditems[2]}</td>
       <td>{sorteditems[3]}</td>
       <td>{sorteditems[4]}</td>
       <td>{sorteditems[5]}</td>
       <td>{sorteditems[6]}</td>
      </tr>);
   }
   TableView() {
    return (
            <table>
            <thead>
            <tr><th>serve</th>
                <Calendar />
            </tr>
            </thead>
            <tbody>
            {this.TableData("Breakfast")}
            {this.TableData("Lunch")}
            {this.TableData("Dinner")}
            </tbody>
        </table>);
}
    render() {
            return(<div id="display_view">
                
                <form id="input_form" onSubmit={this.Submit_items}>
                    <label for="morninng_items" >Enter Items for Breakfast</label>
                    <input type="text" value={this.state.Breakfast_items} name="morninng_items" className="input_area" id="morning_items" onChange={this.Brkfast_onchange}   required></input>
                    <label for="Lunch_items">Enter Items for Lunch</label>
                    <input type="text" value={this.state.Lunch_items} name="Lunch_items" className="input_area" id="Lunch_items" onChange={this.Lunch_onchange} required></input>
                    <label for="dinner_items">Enter Items for Dinner</label>
                    <input type="text" value={this.state.Dinner_items} name="dinner_items" className="input_area" id="dinner_items" onChange={this.Dinner_onchange} required></input>
                </form>
                <div>
                {this.TableView()}
                </div>
            </div>)
    }
}
  export default InputComponent;