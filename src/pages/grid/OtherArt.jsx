import '../../stylesheets/page.css'
import '../../stylesheets/modal.css'

import landscapes from '../../assets/other-art/practice_landscapes.png'
import childe from '../../assets/other-art/vector_childe.png'
import megumi from '../../assets/other-art/vector_megumi.png'
import cardinal from '../../assets/other-art/winter_redcardinal_illust.png'
import wolf from '../../assets/other-art/winter_wolf_illust.png'

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'
import { Modal } from '../Modal'


function OtherArt() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [loadedImages, setLoadedImages] = useState({});
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

    return (
        <div className='main_container'>
            <div className="header">Other Art</div>
            
            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10, alignItems: 'center'}}>
                    <div className='grid_item'><img src={childe}    style={{width: 445}} onClick={() => openModal(childe)}/></div>
                    <div className='grid_item'><img src={megumi}    style={{width: 445}} onClick={() => openModal(megumi)}/></div>
                    <div className='grid_item'><img src={cardinal}  style={{width: 445}} onClick={() => openModal(cardinal)}/></div>
                    <div className='grid_item'><img src={wolf}      style={{width: 445}} onClick={() => openModal(wolf)}/></div>
                </div>
                <img src={landscapes} style={{width: 900, cursor: 'pointer'}} onClick={() => openModal(landscapes)} />
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    )
}

export default OtherArt