import './Main.css';
import React from 'react';
import { useEffect } from 'react';
import { Element } from 'react-scroll';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';
import image12 from '../images/12.jpg';
import image13 from '../images/13.jpeg';



const Main = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.memory-image');

    const fadeInOnScroll = () => {
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        if (rect.top >= 0 && rect.top <= viewHeight) {
          // If the image is in the viewport, reapply animation
          image.classList.remove('fadeIn');
          void image.offsetWidth; // Trigger reflow to restart the animation
          image.classList.add('fadeIn');
        }
      });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);

  const memories = [
      // Add image URLs for memories here
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13
    ];
    

    return (
      <div className="App">
        <header>
          <h1>Memories</h1>
        </header>
        <main>
          {memories.map((memory, index) => (
            <Element key={index} name={`memory${index}`}>
              <img
                src={memory}
                alt={`Memory ${index + 1}`}
                className="memory-image fadeIn" // Apply fadeIn class
              />
            </Element>
          ))}
          <h1>
            Happy Birthday & I LOVE YOU!
          </h1>
        </main>
      </div>
    );
  };

export default Main;