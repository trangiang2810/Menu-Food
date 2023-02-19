import React, { useRef, useState } from 'react'
import './evaluate.scss'
import { BsDot } from 'react-icons/bs'
import icon1 from '../../assets/img/sakura_l.png'
import icon2 from '../../assets/img/sakura_r.png'

const Evaluate = () => {
    const evaluteData = [
        {
            // id: 1,
            name: 'Safwan Morris',
            content: 'Everything is delicious and fresh, the fish from Japan. Great selection of soups and noodles, lots of authentic Japanese snacks. We also go here for business lunches, there is plenty to choose, bento lunches and the price is very pleasant. There are always a lot of Japanese people in the restaurant for us this is an indicator of quality!'
        },
        {
            // id: 2,
            name: 'Katy Galloway',
            content: 'We ordered udon noodles, plum wine, a set of rolls with sashimi, a dish that is cooked in broth right in front of us, desserts. We ate too much and were happy with the freshness of the food, everything just melted in our mouth! Thanks to the chef, who has kept his restaurant up to date for so many years. We will definitely come back here!'
        },
        {
            // id: 3,
            name: 'Eduardo Santos',
            content: "We were literally an hour ago. Wonderful atmosphere. Courteous and friendly staff. The case when care is felt right at the entrance. I'm not a big fan of sushi, even in Japan I ate them a couple of times. But the rest of the menu is beyond praise. And, not the most important, but the most revealing one is the ability to cook rice."
        },
    ]
    const [slideNumber, setSlideNumber] = useState(0)
 
    const handleActive = (direction)=>{
        let newSlideNumber
        if(direction === '1'){
            newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }

    setTimeout(handleActive, 3000);


  return (
    <section>
            <div className='icon__bg-sakura'>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
            </div>
        <div className='evalute__wrapper'>
            <h3>{evaluteData[slideNumber].name}</h3>
            <span>RESTAURANT VISITOR</span>
            <span>
               {evaluteData[slideNumber].content}
            </span>
        </div>
    </section>
  )
}

export default Evaluate