import React,{useState} from 'react'
import data from './data.json'
import './Task.scss'
const List = (props: any) => {
   const DataFilter = data.response.data.filter((ol)=>{
       if(props.input === ""){
           return ol;
       }
       else{
           return ol.description.toLowerCase().includes(props.input)
       }
   })

  return (
    <table> 
        <tbody>
            {DataFilter.map((item)=>
                <tr key={item.work_order_id}>
                    <td>{item.description}</td>
                    <td>{item.received_date}</td>

            {item.assigned_to.map((items, assign)=>
                <tr key={assign}>
                    <td>{items.person_name}</td>
                    <td>{items.status}</td>
                </tr>
            )}
                    <td>{item.status}</td>
                    <td>{item.priority}</td>
                </tr>
            )}   
        </tbody>
    </table>
  )
}

export default List