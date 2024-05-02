import React, { useState } from 'react'
import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Assignments() {
    const [data, setData] = useState([])
    const [fetch, setFetch] = useState(true);
    const [value, setValue] = useState('');
    const fetchDataWithFilter = async () => {
        try {
          const docData = []
          // Construct a query to filter documents
          const q = query(
            collection(db, 'Assignments'),
            where('Ryker Son', '==', true) // Filter by 'class' field
          );
      
          // Execute the query and get the query snapshot
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot)
      
          // Iterate over the documents in the query snapshot
          querySnapshot.forEach((doc) => {
            docData.push({id: doc.id, ...doc.data()})
              setData(docData);
              console.log(docData)
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      if(fetch){
        fetchDataWithFilter()
        setFetch(false)
      }
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = ['data.name'];

    const handleChange = (event) => {
        setValue(event.target.value);
        setShowSuggestions(true);
    };

    const handleSelect = (selectedValue) => {
        setValue(selectedValue);
        setShowSuggestions(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            // If Escape key is pressed, clear the input field
            setValue('');
            setShowSuggestions(false);
        }
    };
    
  return (
    <div>
        <div className="schedule-creator-container">
            <div className="autocomplete-container">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search Assignments"
                />
                {showSuggestions && (
                    <ul className="suggestions-list">
                        {suggestions
                            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
                            .map((item) => (
                                <li key={item} onClick={() => handleSelect(item)}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
            </div>
        {data.map((item) => (
            <div id="assignment">
            <h1>{item.name}</h1>
            <h3>{item.class}</h3>
            </div>
        ))}
    </div>
  )
}

export default Assignments