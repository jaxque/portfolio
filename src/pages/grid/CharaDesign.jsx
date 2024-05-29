import '../../stylesheets/page.css'

import chara01 from '../../assets/chara-design/chara_01.png'
import chara02 from '../../assets/chara-design/chara_02.png'
import chara03 from '../../assets/chara-design/chara_03.png'
import chara04 from '../../assets/chara-design/chara_04.png'

import React, { useRef, useEffect, useState } from 'react';

function CharaDesign() {
    const [loadedImages, setLoadedImages] = useState({});

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

    return (
        <div className='main_container'>
            <div className="header">Character Design</div>

            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10, marginLeft: 40}}>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara01] ? 'loaded' : ''}`}
                             data-src={chara01} style={{width: 400}}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara02] ? 'loaded' : ''}`}
                             data-src={chara02} style={{width: 400}}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara03] ? 'loaded' : ''}`}
                             data-src={chara03} style={{width: 400}}/>
                    </div>
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[chara04] ? 'loaded' : ''}`}
                             data-src={chara04} style={{width: 400}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CharaDesign