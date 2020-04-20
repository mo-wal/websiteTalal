import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const Parllax = () => (
    <div>
        
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../assets/image1.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            
            <div style={{ height: '350px' }} />
        </Parallax>
 
 
        
            
    </div>
);
export default Parllax;
