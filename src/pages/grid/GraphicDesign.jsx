import '../../stylesheets/page.css'

import albumBack from '../../assets/graphic-design/album_back.png'
import albumCover from '../../assets/graphic-design/album_cover.png'
import albumSpine from '../../assets/graphic-design/album_spine.png'
import catbot from '../../assets/graphic-design/catbot_icon.png'
import cheriiBanner from '../../assets/graphic-design/cherii_banner.png'
import cheriiIcon from '../../assets/graphic-design/cherii_icon.png'
import floopPanels from '../../assets/graphic-design/floop_panels.png'
import genshin_icons from '../../assets/graphic-design/genshin_icons.png'
import mura1_banner from '../../assets/graphic-design/mura1_banner.png'
import mura1_chibi from '../../assets/graphic-design/mura1_chibi.png'
import mura1_icon from '../../assets/graphic-design/mura1_icon.png'
import mura2_banner from '../../assets/graphic-design/mura2_banner.png'
import mura2_panels from '../../assets/graphic-design/mura2_panels.png'
import soma1_panels from '../../assets/graphic-design/soma1_panels.jpeg'
import soma2_panels from '../../assets/graphic-design/soma2_panels.png'
import moodboard01 from '../../assets/graphic-design/wedding_moodboard_01.png'
import moodboard02 from '../../assets/graphic-design/wedding_moodboard_02.png'
import moodboard03 from '../../assets/graphic-design/wedding_moodboard_03.png'

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'

function GraphicDesign() {
    return (
        <div className='main_container'>
            <div className="header">Graphic Design</div>
            
            <div className='sub_container'>
                <div className='subheader'>Twitch Panels</div>
                
                <div className='grid_container2' style={{gap: 10, marginLeft: 2}}>
                    <div className='grid_item'><img src={floopPanels} style={{width: 466}}/></div>
                    <div className='grid_item'><img src={mura2_panels} style={{width: 420}}/></div>
                    <div className='grid_item'><img src={soma2_panels} style={{width: 420}}/></div>
                    <div className='grid_item'><img src={soma1_panels} style={{width: 420}}/></div>
                </div>
            </div>

            <div className='sub_container'>
                <div className='subheader'>Logos & Icons</div>

                <div className='grid_container2' style={{gap: 10, alignItems: 'center'}} >
                    <div className='grid_item'><img src={catbot} style={{width: 300}}/></div>
                    <div className='grid_item'><img src={cheriiIcon} style={{width: 300}}/></div>
                </div>
                <img src={genshin_icons} style={{width: 800}} />
            </div>

            <div className='sub_container'><BackToTop/></div>
        </div>
    )
}

export default GraphicDesign