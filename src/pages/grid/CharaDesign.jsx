import '../../stylesheets/page.css'

import chara01 from '../../assets/chara-design/chara_01.png'
import chara02 from '../../assets/chara-design/chara_02.png'
import chara03 from '../../assets/chara-design/chara_03.png'
import chara04 from '../../assets/chara-design/chara_04.png'

function CharaDesign() {
    return (
        <div className='main_container'>
            <div className="header">Character Design</div>

            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10, marginLeft: 40}}>
                    <div className='grid_item'><img src={chara01} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={chara02} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={chara03} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={chara04} style={{width: 400}}/></div>
                </div>
            </div>

        </div>
    )
}

export default CharaDesign