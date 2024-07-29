import '../../stylesheets/page.css'

import chara01 from '../../assets/chara-design/chara_01.png'
import chara02 from '../../assets/chara-design/chara_02.png'
import chara03 from '../../assets/chara-design/chara_03.png'
import chara04 from '../../assets/chara-design/chara_04.png'

import React, { useRef, useEffect, useState } from 'react';
import { Modal } from '../Modal'

function CharaDesign() {
    const [loadedImages, setLoadedImages] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
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

    return (
        <div className='main_container'>
            <div className="header">Character Design</div>

            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10, marginLeft: 40}}>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara01] ? 'loaded' : ''}`}
                             data-src={chara01} style={{width: 400}}
                             onClick={() => openModal(chara01)}
                             alt='Ribbon Priest'/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara02] ? 'loaded' : ''}`}
                             data-src={chara02} style={{width: 400}}
                             onClick={() => openModal(chara02)}
                             alt='Lunchbox Bear Kid'/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara03] ? 'loaded' : ''}`}
                             data-src={chara03} style={{width: 400}}
                             onClick={() => openModal(chara03)}
                             alt='Butterfly Model'/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara04] ? 'loaded' : ''}`}
                             data-src={chara04} style={{width: 400}}
                             onClick={() => openModal(chara04)}
                             alt='Ice Cream Prince'/>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />

        </div>
    )
}

export default CharaDesign