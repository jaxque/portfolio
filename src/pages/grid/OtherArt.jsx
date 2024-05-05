import '../../stylesheets/page.css'

import nyxFumo from '../../assets/other-art/nyx_fumo_sheet.png'
import landscapes from '../../assets/other-art/practice_landscapes.png'
import cardinal from '../../assets/other-art/winter_redcardinal_illust.png'
import wolf from '../../assets/other-art/winter_wolf_illust.png'

function OtherArt() {
    return (
        <div className='main_container'>
            <div className="header">Other Art</div>
            
            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10, alignItems: 'center'}}>
                    <div className='grid_item'><img src={nyxFumo} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={landscapes} style={{width: 490}}/></div>
                    <div className='grid_item'><img src={cardinal} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={wolf} style={{width: 400}}/></div>
                </div>
            </div>
        </div>
    )
}

export default OtherArt