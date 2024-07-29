import '../../stylesheets/page.css'
import '../../stylesheets/slideshow.css'
import '../../stylesheets/modal.css'

import mura1_banner from '../../assets/vtuber/mura1_banner.png'
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

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'
import { Modal } from '../Modal'

function Vtuber() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [loadedImages, setLoadedImages] = useState({});
    const observer = useRef(null);
    
    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen)
    // }

    // Lazy load
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
        observer.current = new IntersectionObserver(handleIntersection, options);

        document.querySelectorAll('.lazy-load').forEach(img => {
            observer.current.observe(img);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.current.unobserve(lazyImage);
                setLoadedImages(prevState => ({
                    ...prevState,
                    [lazyImage.dataset.src]: true
                }));
            }
        });
    };

    // Enlarge image when clicked on
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage(null)
    }

    // Slideshow logic
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const slides = [
        <img key={1} src={mura2_fullbody01} style={{ width: 450, cursor: 'pointer' }} onClick={() => openModal(mura2_fullbody01)}/>,
        <img key={2} src={mura2_fullbody02} style={{ width: 450, cursor: 'pointer' }} onClick={() => openModal(mura2_fullbody02)}/>,
        <img key={3} src={mura2_fullbody03} style={{ width: 450, cursor: 'pointer' }} onClick={() => openModal(mura2_fullbody03)}/>,
    ];

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
                {/* Mura V1 */}
                <div className='subheader'>January 2021 - September 2021</div>
                <div className='content'>
                    In early 2021, I spent about five months designing my VTuber and creating
                    assets for streaming and for the associated social media accounts.<br/><br/>
                    
                    <img className={`lazy-load fade-in ${loadedImages[mura1_ref] ? 'loaded' : ''}`}
                         data-src={mura1_ref} 
                         style={{width: 900, cursor: 'pointer'}}
                         onClick={() => openModal(mura1_ref)}
                         alt='First design of Murase Lune'
                         />
                </div>

                <div className='grid_container' style={{gap: 8, alignItems: 'center'}}>
                    <div className='grid_item'><img src={mura1_emotes} style={{width: 295}} onClick={() => openModal(mura1_emotes)}/></div>
                    <div className='grid_item'><img src={mura1_fullbody} style={{width: 295}} onClick={() => openModal(mura1_fullbody)}/></div>
                    <div className='grid_item'><img src={mura1_pride} style={{width: 295}} onClick={() => openModal(mura1_pride)}/></div>
                </div>
                
            </div>

            {/* Mura V2 */}
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
                <div className='grid_container2' style={{gap: 8}}>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[mura2_vector] ? 'loaded' : ''}`}
                             data-src={mura2_vector} 
                             style={{width: 440}}
                             onClick={() => openModal(mura2_vector)}
                             alt='Vector Portrait'
                             />
                    </div>
                    {/* slidehow */}
                    <div className='grid_item'>
                        <div className='slideshow'>
                            {slides.map((slide, index) => (
                                <div key={index} className='slide fade' 
                                     style={{ display: index === slideIndex ? 'block' : 'none' }}
                                > {slide} </div>
                            ))}

                            <a className='prev' onClick={prevSlide}>&#8249;</a>
                            <a className='next' onClick={nextSlide}>&#8250;</a>
                        </div>
                    </div>
                </div>

                <div className='grid_container2' style={{rowGap: 10, columnGap: 8}}>
                    <div className='grid_item'><img src={mura2_emotes} style={{width: 445}} onClick={() => openModal(mura2_emotes)}/></div>
                    <div className='grid_item'><img src={mura2_screen} style={{width: 445}} onClick={() => openModal(mura2_screen)}/></div>
                    <div className='grid_item'><img src={mura2_schedule01} style={{width: 445}} onClick={() => openModal(mura2_schedule01)}/></div>
                    <div className='grid_item'><img src={mura2_schedule02} style={{width: 445}} onClick={() => openModal(mura2_schedule02)}/></div>
                </div>
            </div>

            <div className='sub_container'><BackToTop/></div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
        )
}

export default Vtuber