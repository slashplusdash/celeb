import './Entry.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Entry = () => {
    const [showButton, setShowButton] = useState(false);

    const handleCheckboxClick = () => {
      // Toggle the showButton state when the checkbox is clicked
      setShowButton(!showButton);
    };

    return (
        <div className="Entry">
          <main>
            <div class="birthday-gift">
                <div class="gift">
                    <input id='click' type='checkbox' onChange={handleCheckboxClick}/>
                    <label class='click' for='click'></label>
                    <div class="wishes">Happy Birthday!</div>
                    <div class="sparkles">
                        <div class="spark1"></div>
                        <div class="spark2"></div>
                        <div class="spark3"></div>
                        <div class="spark4"></div>
                        <div class="spark5"></div>
                        <div class="spark6"></div>
                    </div>
                </div>
            </div>
          </main>

        {showButton && (
            <Link to="/main" className="myButton">
                See Birthday Present
            </Link>
        )}
        </div>
      );
}

export default Entry;