import '../../stylesheets/page.css'

import chara from '../../assets/chara-design/chara_02.png'
import graphic from '../../assets/graphic-design/catbot_icon.png'
import illust from '../../assets/illustrations/headshot_lum.png'
import geo from '../../assets/geo/geo-black.png'
import reynbow from '../../assets/reynbow/reynbow_icon_01.png'
import other from '../../assets/other-art/winter_redcardinal_illust.png'
import pawfee from '../../assets/pawfee/revision_02.png'
import mura from '../../assets/vtuber/mura2_vector.jpeg'

function PortfolioGrid() {
    return (
        <div className='sub_container'>
            <div className='grid_container' style={{gap: 30}}>
                <div className='grid_item'>
                    <a href='/portfolio/chara'><img className='grid_img' src={chara}/></a>
                    <div className='desc'>Character Design</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/graphic'><img className='grid_img' src={graphic} style={{objectFit: 'contain'}}/></a>
                    <div className='desc'>Graphic Design</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/illust'><img className='grid_img' src={illust}/></a>
                    <div className='desc'>Illustrations</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/capstone'><img className='grid_img' src={geo} style={{objectFit: 'contain'}}/></a>
                    <div className='desc'>Geo: Hello-Sol</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/reynbow'><img className='grid_img' src={reynbow}/></a>
                    <div className='desc'>Reynbow</div>
                </div>

                <div className='grid_item'>
                    <div className='desc'>Video Editing</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/other'><img className='grid_img' src={other}/></a>
                    <div className='desc'>Other Art</div>
                </div>
            </div>

            <br/><br/><br/><br/>

            <div className='subheader'>Ongoing Projects</div><br/>

            <div className='grid_container' style={{gap: 30}}>
                <div className='grid_item'>
                    <a href='/portfolio/pawfee'><img className='grid_img' src={pawfee}/></a>
                    <div className='desc'>Pawfee Beans</div>
                </div>

                <div className='grid_item'>
                    <a href='/portfolio/vtuber'><img className='grid_img' src={mura}/></a>
                    <div className='desc'>VTuber: Murase Lune</div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioGrid