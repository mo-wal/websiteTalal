import React from 'react';
import OurworksCard from '../OurworksCards/OurworksCard';
import '../OurworksCards/OurworksCards.css';
export default function OurworksCards() {
    return (
        
            
        <div className="Cards">
         <h2>our Works</h2>
         <div className="CardsGroup">
         <OurworksCard
         image={require('../../assets/ourworkswebsite1.jpg')}
         />
         <OurworksCard
         image={require('../../assets/ourworkswebsite2.png')}
         />
         <OurworksCard
         image={require('../../assets/ourworkswebsite3.jpg')}
         />
         <OurworksCard
         image={require('../../assets/ourworkswebsite4.jpg')}
         />
         <OurworksCard
         image={require('../../assets/ourworkswebsite5.jpg')}
         />
         <OurworksCard
         image={require('../../assets/ourworkswebsite6.jpg')}
         />
         </div>
         </div>
       
    )
}
