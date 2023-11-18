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
            <>
              <div>
                <Link to="/main" className="myButton">
                  See Birthday Present
                </Link>
              </div>
              <div className="message">
                <p>
                  Happy 22nd birthday babyyyy! You are a blessing to this world and to me. <br>
                  </br>
                  I really hope that you would keep striving to be the best version of you and to not ever <br>
                  </br>
                  give up on your dreams,<br>
                  </br>
                  I created this as one of the gifts I have for you and I hope you would like it!!
                </p>
              </div>
            </>
          )}

        </div>
      );
}

export default Entry;