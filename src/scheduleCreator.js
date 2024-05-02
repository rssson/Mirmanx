import React, { useState, useEffect } from 'react';
import './scheduleCreator.css'; // Import CSS file for stylings

function ScheduleCreator() {
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];

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
    
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="schedule-creator-container">
            <div className="autocomplete-container">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Student Name"
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
                <div className='radio-input grade'>
                    <input type="radio" name="grade" id="grade-5"/>
                    <label htmlFor='grade-5'>5th</label>
                    <input type="radio" name="grade" id="grade-6"/>
                    <label htmlFor='grade-6'>6th</label>
                    <input type="radio" name="grade" id="grade-7"/>
                    <label htmlFor='grade-7'>7th</label>
                    <input type="radio" name="grade" id="grade-8"/>
                    <label htmlFor='grade-8'>8th</label>
                </div>
                <h2>Core Class</h2>
                <div className="radio-group core">
                    <input type="radio" id="core-5C" name="core" />
                    <label htmlFor="core-5C">5C</label>
                    <input type="radio" id="core-5B" name="core"/>
                    <label htmlFor="core-5B">5B</label>
                    <input type="radio" id="core-5A" name="core" />
                    <label htmlFor="core-5A">5A</label>
                </div>
            <br />
                <h2>Math Group</h2>
                <div className="radio-group math">
                    <input type="radio" id="math-Inno-3" name="Math" />
                    <label htmlFor="math-Inno-3">Innovations 3</label>
                    <input type="radio" id="math-Inno-2" name="Math" />
                    <label htmlFor="math-Inno-2">Innovations 2</label>
                </div>
                <h2>Art / Digital Literacy Color</h2>
                <div className="radio-group arts">
                    <input type="radio" id="arts-blue" name="Art" />
                    <label htmlFor="arts-blue">Blue</label>
                    <input type="radio" id="arts-red" name="Art" />
                    <label htmlFor="arts-red">Red</label>
                    <input type="radio" id="arts-purple" name="Art" />
                    <label htmlFor="arts-purple">Purple</label>
                    <input type="radio" id="arts-yellow" name="Art" />
                    <label htmlFor="arts-yellow">Yellow</label>
                </div>
                <h2>World Language</h2>
                <div className="radio-group arts">
                    <input type="radio" id="language-mandarin" name="language" />
                    <label htmlFor="language-mandarin">Mandarin</label>
                    <input type="radio" id="language-spanish-b" name="language" />
                    <label htmlFor="language-spanish-b">Spanish B</label>
                    <input type="radio" id="language-spanish-a" name="language" />
                    <label htmlFor="language-spanish-a">Spanish A</label>
                    <input type="radio" id="language-latin" name="language" />
                    <label htmlFor="language-latin">Latin</label>
                </div>
                <h2>Theatre / Music Color</h2>
                <div className="radio-group arts">
                    <input type="radio" id="language-mandarin" name="language" />
                    <label htmlFor="language-mandarin">Mandarin</label>
                    <input type="radio" id="language-spanish-b" name="language" />
                    <label htmlFor="language-spanish-b">Spanish B</label>
                    <input type="radio" id="language-spanish-a" name="language" />
                    <label htmlFor="language-spanish-a">Spanish A</label>
                    <input type="radio" id="language-latin" name="language" />
                    <label htmlFor="language-latin">Latin</label>
                </div>
        </div>
    );
}

export default ScheduleCreator;
