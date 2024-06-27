import '../../stylesheets/page.css'
import '../../stylesheets/modal.css'

import albumBack from '../../assets/graphic-design/album_back.png'
import albumCover from '../../assets/graphic-design/album_cover.png'
import albumSpine from '../../assets/graphic-design/album_spine.png'
import catbot from '../../assets/graphic-design/catbot_icon.png'
import cherii_banner from '../../assets/graphic-design/cherii_banner.png'
import cherii_icon from '../../assets/graphic-design/cherii_icon.png'
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
import { Modal } from '../Modal'

function GraphicDesign() {
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

    return (
        <div className='main_container'>
            <div className="header">Graphic Design</div>
            
            <div className='sub_container'>
                <div className='subheader'>Twitch Panels</div>
                
                <div className='grid_container2' style={{gap: 10, marginLeft: 2}}>
                    <div className='grid_item'><img src={floopPanels}   style={{width: 466}} onClick={() => openModal(floopPanels)}/></div>
                    <div className='grid_item'><img src={mura2_panels}  style={{width: 420}} onClick={() => openModal(mura2_panels)}/></div>
                    <div className='grid_item'><img src={soma2_panels}  style={{width: 420}} onClick={() => openModal(soma2_panels)}/></div>
                    <div className='grid_item'><img src={soma1_panels}  style={{width: 420}} onClick={() => openModal(soma1_panels)}/></div>
                </div>
            </div>

            <div className='sub_container'>
                <div className='subheader'>Logos & Icons</div>

                <div className='grid_container2' style={{gap: 20, alignItems: 'center'}} >
                    <div className='grid_item'><img src={catbot}     style={{width: 350}} onClick={() => openModal(catbot)}/></div>
                    <div className='grid_item'><img src={cherii_icon} style={{width: 350}} onClick={() => openModal(cherii_icon)}/></div>
                </div>
                <img src={genshin_icons} style={{width: 800}}  onClick={() => openModal(genshin_icons)} />
            </div>

            <div className='sub_container'><BackToTop/></div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    )
}

export default GraphicDesign