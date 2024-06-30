import '../../stylesheets/page.css'
import '../../stylesheets/modal.css'

import custom_games from '../../assets/dnx/custom_games_banner.png'
import dark_banner from '../../assets/dnx/featured_dark_banner.png'
import divine_banner from '../../assets/dnx/featured_divine_banner.png'
import earth_banner from '../../assets/dnx/featured_earth_banner.png'
import fire_banner from '../../assets/dnx/featured_fire_banner.png'
import light_banner from '../../assets/dnx/featured_light_banner.png'
import spell_banner from '../../assets/dnx/featured_spell_banner.png'
import trap_banner from '../../assets/dnx/featured_trap_banner.png'
import water_banner from '../../assets/dnx/featured_water_banner.png'
import wind_banner from '../../assets/dnx/featured_wind_banner.png'
import quickplay from '../../assets/dnx/quick_play_banner.png'
import ranked from '../../assets/dnx/ranked_banner.png'
import nyx_fumo from '../../assets/dnx/nyx_fumo_sheet.png'

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'
import { Modal } from '../Modal'

function DNX() {
    const [loadedImages, setLoadedImages] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [slideIndex, setSlideIndex] = useState(0);
    const observer = useRef(null);

    // Lazy load images
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
    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const currentSlide = (index) => {
        setSlideIndex(index);
    };

    // Images in slideshow
    const slides = [
        <img key={1} src={fire_banner} style={{ width: 900 }} />,
        <img key={2} src={water_banner} style={{ width: 900 }} />,
        <img key={3} src={earth_banner} style={{ width: 900 }} />,
        <img key={4} src={wind_banner} style={{ width: 900 }} />,
        <img key={5} src={light_banner} style={{ width: 900 }} />,
        <img key={6} src={dark_banner} style={{ width: 900 }} />,
        <img key={7} src={divine_banner} style={{ width: 900 }} />,
        <img key={8} src={spell_banner} style={{ width: 900 }} />,
        <img key={9} src={trap_banner} style={{ width: 900 }} />,
    ];

    return (
        <div className='main_container'>
            <div className="header">Dueling Nexus</div>
            
            <div className='sub_container'>
                <div className='content'>
                    Freelance work for Dueling Nexus (<a href={'https://duelingnexus.com/'} target='_blank'>duelingnexus.com</a>).
                </div>
<br/>
                <div className='content'>
                    <img className={`lazy-load fade-in ${loadedImages[ranked] ? 'loaded' : ''}`}
                             data-src={ranked} 
                             style={{width: 900}}
                             onClick={() => openModal(ranked)}
                             alt='Ranked Banner'/>

                    <img className={`lazy-load fade-in ${loadedImages[custom_games] ? 'loaded' : ''}`}
                                data-src={custom_games} 
                                style={{width: 900}}
                                onClick={() => openModal(custom_games)}
                                alt='Custom Games Banner'/>

                    <img className={`lazy-load fade-in ${loadedImages[quickplay] ? 'loaded' : ''}`}
                                data-src={quickplay} 
                                style={{width: 900}}
                                onClick={() => openModal(quickplay)}
                                alt='Quickplay Banner'/>

                    {/* Slideshow */}
                    <div className='slideshow' style={{textAlign: 'center'}} >
                        {slides.map((slide, index) => (
                            <div key={index} className='slide' 
                                    style={{ display: index === slideIndex ? 'block' : 'none' }}
                            > {slide} </div>
                        ))}

                        <a className='prev' style={{backgroundColor: '#00000099', left: '0px'}} 
                           onClick={prevSlide}>&#8249;</a>

                        <a className='next' style={{backgroundColor: '#00000099', right: '0px'}} 
                           onClick={nextSlide}>&#8250;</a>

                        <div>
                            {slides.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === slideIndex ? 'active' : ''}`}
                                    onClick={() => currentSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
<br/>
                    <img className={`lazy-load fade-in ${loadedImages[nyx_fumo] ? 'loaded' : ''}`}
                             data-src={nyx_fumo} 
                             style={{width: 900}}
                             onClick={() => openModal(nyx_fumo)}
                             alt='Nyx Fumo Plush Design'/>
                </div>           

                    
            </div>

            <div className='sub_container'><BackToTop/></div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    )
}

export default DNX