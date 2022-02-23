import React,{useState} from 'react'
import data from './data.json'
import List from './List';
import './Task.scss'
const Task = (props :any) => {
    
        const DataFilter = data.response.data.filter((ol)=>{
            if(props.input === ""){
                return ol;
            }
            else{
                return ol.description.toLowerCase().includes(props.input)
            }
        })
    
   const[Input , setInput] = useState("");
   let InputHandle = (e: React.ChangeEvent<any>) =>{
       var LowerCase = e.target.value.toLowerCase();
       setInput(LowerCase);
   }
    const GetDataTask = () =>{ 
        const [data , setData] = useState([]);
        fetch('data.json'
        ,{
            headers: {
             'Content-Type': 'application/json',
             'Accept' : 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(JsonData){
            console.log(JsonData);
            setData(JsonData);
        })
    }
    
  return (
    <div className='task-container'>
       
       
        <input 
        type="text"
        className='task-search-description'
        onChange={InputHandle}
        placeholder="Search Description"
        />
        <List input={Input}/>
    </div>
  )
}

export default Task