import '../../stylesheets/page.css'
import '../../stylesheets/slideshow.css'

import mura1_emotes from '../../assets/vtuber/mura1_emotes.png'
import mura1_fullbody from '../../assets/vtuber/mura1_fullbody.png'
import mura1_pride from '../../assets/vtuber/mura1_pride.png'
import mura1_ref from '../../assets/vtuber/mura1_refsheet.png'
import mura1_screen from '../../assets/vtuber/mura1_screen.png'
import mura2_emotes from '../../assets/vtuber/mura2_emotes.png'
import mura2_fullbody01 from '../../assets/vtuber/mura2_fullbody_01.png'
import mura2_fullbody02 from '../../assets/vtuber/mura2_fullbody_02.png'
import mura2_fullbody03 from '../../assets/vtuber/mura2_fullbody_03.png'
import mura2_schedule01 from '../../assets/vtuber/mura2_schedule_01.png'
import mura2_schedule02 from '../../assets/vtuber/mura2_schedule_02.png'
import mura2_screen from '../../assets/vtuber/mura2_screen.gif'
import mura2_vector from '../../assets/vtuber/mura2_vector.jpeg'

import React, { useState } from 'react'

function Vtuber() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

// Slideshow logic
    let slideIndex = 1;
    showSlides(slideIndex)

    function nextSlide(n) {
        showSlides(slideIndex += n)
    }

    function showSlides(n) {
        let i
        let slides = document.getElementsByClassName('slide')

        if (n > slides.length) { slideIndex = 1 }
        if ( n < 1) { slideIndex = slides.length }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'
        }
        slides[slideIndex-1].style.display = 'block'
    }

    return (
        <div className='main_container'>
            <div className="header">VTuber: Murase Lune</div>
            
            <div className='sub_container'>
                <div className='subheader'>Introduction</div>
                <div className='content'>
                    I created a persona named Murase Lune that I use as a virtual avatar
                    also known as a VTuber. Using this avatar, I create live streaming content
                    and share digital art online under this name.<br/><br/>
                    This is an ongoing passion project that started in January 2021.
                </div>
<br/><br/>    
                <div className='subheader'>January 2021 - September 2021</div>
                <div className='content'>
                    In early 2021, I spent about five months designing my VTuber and creating
                    assets for streaming and for the associated social media accounts.<br/><br/>
                    
                    <img src={mura1_ref} style={{marginLeft: 50, width: 800}}/>
                </div>
            </div>

            <div className='sub_container'>
                <div className='subheader'>January 2022 - Present</div>
                <div className='content'>
                    Near the end of September 2021, I felt discontent with the initial design.
                    After three months of redesigning, I returned to streaming with a design that
                    presented a more concrete character. <br/><br/>
                    I turned my avatar into a space captain who works on the Lunar Space Cruise.
                    They invite passengers to come aboard to depart on leisurely trips into different parts of space.
                    These leisurely trips are presented as streams and the passengers are the viewers. <br/>
                </div>
<br/>
                <div className='grid_container2' style={{gap: 20, marginLeft: 30}}>
                    <div className='grid_item'> <img src={mura2_vector} style={{width: 400}}/> </div>

                    <div className='grid_item'>
                        <div className='slideshow'>
                            <div className='slide fade'><img src={mura2_fullbody01} style={{width: 410}}/></div>
                            <div className='slide fade'><img src={mura2_fullbody02} style={{width: 410}}/></div>
                            <div className='slide fade'><img src={mura2_fullbody03} style={{width: 410}}/></div>

                            <a className='prev' onClick={() => nextSlide(-1)}>&#8249;</a>
                            <a className='next' onClick={() => nextSlide(1)}>&#8250;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Vtuber