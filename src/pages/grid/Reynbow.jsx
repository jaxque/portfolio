import '../../stylesheets/page.css'

import reyRef from '../../assets/reynbow/rey_refsheet.png'
import gameplay from '../../assets/reynbow/reynbow_gameplay.png'
import icon01 from '../../assets/reynbow/reynbow_icon_01.png'
import icon02 from '../../assets/reynbow/reynbow_icon_02.png'
import storyboard01 from '../../assets/reynbow/reynbow_storyboard_01.png'
import storyboard02 from '../../assets/reynbow/reynbow_storyboard_02.png'

function Reynbow() {
    return (
        <div className='main_container'>
            <div className="header">Reynbow</div>
            
            <div className='sub_container'>
                <div className='content'>
                    Reynbow is a game where the user plays as the main character named Rey.
                    The goal of the game is to bring back colour to a dystopian futuristic world
                    using colourful spray cans. Some game inspirations include de Blob, Splatoon, and Jet Set Radio.
                    <br/><br/>
                    Disclaimer: This is only a game concept.<br/><br/>

                    <img src={reyRef} width={800} />
                </div>

                <div className='grid_container2' style={{columnGap: 10}}>
                    <div className='grid_item'> <img src={icon01} style={{width: 395}}/> </div>
                    <div className='grid_item'> <img src={icon02} style={{width: 395}}/> </div>
                </div>
                
                {/* image carousel */}
            </div>
            
            
        </div>
    )
}

export default Reynbow