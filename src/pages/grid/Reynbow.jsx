import '../../stylesheets/page.css'
import '../../stylesheets/modal.css'

import reyRef from '../../assets/reynbow/rey_refsheet.png'
import gameplay from '../../assets/reynbow/reynbow_gameplay.png'
import icon01 from '../../assets/reynbow/reynbow_icon_01.png'
import icon02 from '../../assets/reynbow/reynbow_icon_02.png'
import storyboard01 from '../../assets/reynbow/reynbow_storyboard_01.png'
import storyboard02 from '../../assets/reynbow/reynbow_storyboard_02.png'

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'
import { Modal } from '../Modal'

function Reynbow() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [loadedImages, setLoadedImages] = useState({});
    const [slideIndex, setSlideIndex] = useState(0);
    const observer = useRef(null);

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
    const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const currentSlide = (index) => {
        setSlideIndex(index);
    };

    const slides = [
        <img key={1} src={storyboard01} style={{ width: 780, cursor: 'pointer' }} onClick={() => openModal(storyboard01)}/>,
        <img key={2} src={storyboard02} style={{ width: 780, cursor: 'pointer' }} onClick={() => openModal(storyboard02)}/>,
        <img key={3} src={gameplay} style={{ width: 780, cursor: 'pointer' }} onClick={() => openModal(gameplay)}/>,
    ];

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

                    <img src={reyRef} style={{width: 900, cursor: 'pointer'}} onClick={() => openModal(reyRef)}/>
                </div>

                <div className='grid_container2' style={{columnGap: 10}}>
                    <div className='grid_item'> <img src={icon01} style={{width: 445}} onClick={() => openModal(icon01)}/> </div>
                    <div className='grid_item'> <img src={icon02} style={{width: 445}} onClick={() => openModal(icon02)}/> </div>
                </div>
<br/><br/>                
                <div className='content'>
                    <div className='slideshow' style={{textAlign: 'center'}} >
                        {slides.map((slide, index) => (
                            <div key={index} className='slide' 
                                    style={{ display: index === slideIndex ? 'block' : 'none' }}
                            > {slide} </div>
                        ))}

                        <a className='prev' style={{backgroundColor: '#00000099', left: '-10px'}} 
                           onClick={prevSlide}>&#8249;</a>

                        <a className='next' style={{backgroundColor: '#00000099', right: '-10px'}} 
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
                </div>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    )
}

export default Reynbow