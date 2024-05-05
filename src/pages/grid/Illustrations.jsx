import '../../stylesheets/page.css'

import paladin from '../../assets/illustrations/bust_paladin.png'
import soma from '../../assets/illustrations/bust_soma.png'
import ereshkigal from '../../assets/illustrations/fullbody_ereshkigal.png'
import miku from '../../assets/illustrations/fullbody_miku_redraw.png'
import tanne from '../../assets/illustrations/fullbody_neapolitanne.png'
import alhaitham from '../../assets/illustrations/halfbody_alhaitham.png'
import cyno from '../../assets/illustrations/halfbody_cyno.png'
import mia from '../../assets/illustrations/halfbody_mia.png'
import satoryu from '../../assets/illustrations/halfbody_render_satoryu.png'
import lum from '../../assets/illustrations/headshot_lum.png'
import naki from '../../assets/illustrations/headshot_nakiajisai.png'
import paletteChallenge from '../../assets/illustrations/headshot_palette_challenge.png'
import personaMura from '../../assets/illustrations/persona_mura.png'
import vio_tagteam from '../../assets/illustrations/vio_tagteam_nocard.png'
import zarya from '../../assets/illustrations/zarya_thumbnail.png'

function Illustrations() {
    return (
        <div className='main_container'>
            <div className="header">Illustrations</div>
            
            <div className='sub_container'>
                {/* Headshots */}
                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'><img src={paladin} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={lum} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={naki} style={{width: 290}}/></div>
                </div>

                {/* Busts */}
                <div className='grid_container2' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'><img src={cyno} style={{width: 440}}/></div>
                    <div className='grid_item'><img src={alhaitham} style={{width: 440}}/></div>
                    <div className='grid_item'><img src={personaMura} style={{width: 440}}/></div>
                    <div className='grid_item'><img src={zarya} style={{width: 440}}/></div>
                </div>

                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'><img src={soma} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={paletteChallenge} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={satoryu} style={{width: 290}}/></div>
                </div>

                {/* <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}}>
                    <div className='grid_item'><img src={tanne} style={{width: 290}}/></div>
                </div> */}

                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'><img src={mia} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={vio_tagteam} style={{width: 290}}/></div>
                    <div className='grid_item'><img src={miku} style={{width: 290}}/></div>
                </div>
            </div>

            {/* add button to go back to top */}
        </div>
    )
}

export default Illustrations