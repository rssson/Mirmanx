import './Home.css';
import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { auth, db } from './firebase';
import './Home.css'; // Import CSS file for styling
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';

function Home() {
  console.log("hi")
    console.log(auth.currentUser)
  const [data, setData] = useState([]);
    const fetchDataWithFilter = async () => {
  try {
    const docData = []
    // Construct a query to filter documents
    const q = query(
      collection(db, 'Assignments'), // Replace with your collection name
      where('class', 'in', ['Innovations 3', 'ClassB', 'ClassC']) // Filter by 'class' field
    );

    // Execute the query and get the query snapshot
    const querySnapshot = await getDocs(q);

    // Iterate over the documents in the query snapshot
    querySnapshot.forEach((doc) => {
      docData.push({id: doc.id, ...doc.data()})
        setData(docData);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const [state, setState] = useState(false)
if(state){
  
fetchDataWithFilter();
setState(true)
}
// Call the function to fetch data with a filter
  return (
    <div className='fullDash'>
      <Sidebar />
      <div className="dashboard">
      <div className="leftDashboard">
        <div className="card schedule">
          <h2 className='cardTitle'>Schedule {"(A Day)"}</h2>
          <div id="scheduleBottom">
            <div id="scheduleLeft">
              <div id="scheduleItem"><h2>8:00-9:10 </h2></div>
              <div id="scheduleItem"><h2>9:10-10:10 </h2></div>
              <div id="scheduleItem"><h2>10:10-10:35 </h2></div>
              <div id="scheduleItem"><h2>10:35-11:35 </h2></div>
              <div id="scheduleItem"><h2>11:35-12:15 </h2></div>
              <div id="scheduleItem"><h2>12:15-12:55 </h2></div>
              <div id="scheduleItem"><h2>12:55-13:55 </h2></div>
              <div id="scheduleItem"><h2>13:55-14:40 </h2></div>
              <div id="scheduleItem"><h2>14:40-15:25 </h2></div>
            </div>
            <div id="scheduleRight">
              <div id="scheduleItem"><h2> Art</h2></div>
              <div id="scheduleItem"><h2> Science</h2></div>
              <div id="scheduleItem"><h2> Break</h2></div>
              <div id="scheduleItem"><h2> Theatre</h2></div>
              <div id="scheduleItem"><h2> MirmanX</h2></div>
              <div id="scheduleItem"><h2> Lunch</h2></div>
              <div id="scheduleItem"><h2> Spanish</h2></div>
              <div id="scheduleItem"><h2> English</h2></div>
              <div id="scheduleItem"><h2> PE </h2></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightDashboard">
      <div className="card assignments">
        <h2 className='cardTitle'>Due Soon</h2>
        <div id="line" />
        {data.map((assignment) => (
          <div key={assignment.id} className='assignment'>
            <h2 className='assignment-name'>{assignment.name}</h2>
            <h3 className='assignment-class'>{assignment.class}</h3>
          </div>
        ))}
      </div>
      <div className="card ai-feature">
        <h2 className='cardTitle'> AI Features</h2>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
