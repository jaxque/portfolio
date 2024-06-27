import '../../stylesheets/page.css'
import '../../stylesheets/modal.css'

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

import React, { useRef, useEffect, useState } from 'react';
import { BackToTop } from '../BackToTop'
import { Modal } from '../Modal'

function Illustrations() {
    const [loadedImages, setLoadedImages] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const observer = useRef(null);

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
            <div className="header">Illustrations</div>
            
            <div className='sub_container'>
                {/* Headshots */}
                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[paladin] ? 'loaded' : ''}`}
                             data-src={paladin} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(paladin)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[lum] ? 'loaded' : ''}`}
                             data-src={lum} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(lum)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[naki] ? 'loaded' : ''}`}
                             data-src={naki} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(naki)}/>
                    </div>
                </div>

                {/* Busts */}
                <div className='grid_container2' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[cyno] ? 'loaded' : ''}`} 
                             data-src={cyno} 
                             style={{width: 440, cursor: 'pointer'}}
                             onClick={() => openModal(cyno)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[alhaitham] ? 'loaded' : ''}`} 
                             data-src={alhaitham} 
                             style={{width: 440, cursor: 'pointer'}}
                             onClick={() => openModal(alhaitham)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[personaMura] ? 'loaded' : ''}`}
                             data-src={personaMura} 
                             style={{width: 440, cursor: 'pointer'}}
                             onClick={() => openModal(personaMura)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[zarya] ? 'loaded' : ''}`}
                             data-src={zarya}
                             style={{width: 440, cursor: 'pointer'}}
                             onClick={() => openModal(zarya)}/>
                    </div>
                </div>

                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[soma] ? 'loaded' : ''}`} 
                             data-src={soma} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(soma)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[paletteChallenge] ? 'loaded' : ''}`} 
                             data-src={paletteChallenge} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(paletteChallenge)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[satoryu] ? 'loaded' : ''}`} 
                             data-src={satoryu} 
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(satoryu)}/>
                    </div>
                </div>

                {/* <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}}>
                    <div className='grid_item'><img src={tanne} style={{width: 290}}/></div>
                </div> */}

                <div className='grid_container' style={{columnGap: 10, alignItems: 'center'}} >
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[mia] ? 'loaded' : ''}`} 
                             data-src={mia}
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(mia)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[vio_tagteam] ? 'loaded' : ''}`} 
                             data-src={vio_tagteam}
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(vio_tagteam)}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[miku] ? 'loaded' : ''}`} 
                             data-src={miku}
                             style={{width: 290, cursor: 'pointer'}}
                             onClick={() => openModal(miku)}/>
                    </div>
                </div>
            </div>

            <div className='sub_container'><BackToTop/></div>
            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    )
}

export default Illustrations