
import React from 'react';
import { ReactDOM } from 'react';
import "./App.js";
import './calendar.css';
function Calendar(){
   const today=new Date();

   let datelist=[]
   let daylist=[]
   let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   let indexlist=[0,1,2,3,4,5,6]
   for(let i=0;i<7;i++){
        var datetoday=new Date(today.getFullYear(),today.getMonth(),today.getDate()+i);
        datelist.push(datetoday.getDate());
        daylist.push(datetoday.getDay());
        }
    let return_val=indexlist.map((n)=><th>{datelist[n]}<br/>{week[daylist[n]]}</th>)
    return return_val;
    
}
export default Calendar;