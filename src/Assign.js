import React, { useState } from 'react'
import './Assign.css'
import { db, auth } from './firebase';
import { where, query, getDocs, collection } from 'firebase/firestore';
import { DatePicker, Input, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function Assign() {
  const [state, setState] = useState(true);
  function ramisbadatcoding(){
    console.log("ram is bad at coding")
  }
  const [data, setData] = useState([])
  async function fetchDataWithFilter() {
  try{
  const docData = []
  const q = query(collection(db, 'Classes'), where("teachers", "array-contains", 'Ryker Son'));
  const querySnapshot = await getDocs(q)
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    docData.push({id: doc.id, ...doc.data()})
  });
  setData(docData);
      console.log(docData)
} catch (error) {
  console.error('Error fetching data:', error);
}
  }
  if (state === true){
    fetchDataWithFilter()
    setState(false)
  }
  return (
    <div id="assign">
      <h1>Add assignment</h1>
        <Input id="assignmentName" size="large" placeholder="Assignment Name" />
        {data.map((item) => (
      <div id="assignment">
      <h1>{item.name}</h1>
      <h3>{item.class}</h3>
      </div>
    ))}
        <DatePicker id="AssignmentDue"/>
        <TimePicker id="assignmentDueTime"/>
        <TextArea id="assignmentDescription" rows={4} disa placeholder="Assignment Description" showCount maxLength={1000} style={{resize: "none"}}/>
      
    
    <button onClick={ramisbadatcoding()}>Submit</button>
    </div>
  )
}

export default Assign