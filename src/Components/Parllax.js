import React from 'react';
import { Parallax, Background } from 'react-parallax';
import {Link} from 'react-router-dom';
 
const Parllax = () => (
    <div>
        
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={require('../assets/image1.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            
            <div style={{ height: '500px',
                          background: 'rgba(0, 0, 0, 0.1)',
                          
        }}/>
         
        </Parallax>
 
 
        
            
    </div>
);
export default Parllax;
