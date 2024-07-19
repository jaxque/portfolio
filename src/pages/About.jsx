import '../stylesheets/page.css'

import selfie from '../assets/selfie.jpeg'

import React, { useRef, useEffect, useState } from 'react';

function About() { 
    const [loadedImages, setLoadedImages] = useState({});
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

    return (
        <div className="main_container">
            <div className="header">About Me</div>

            <div className='sub_container'>
                <div className='subheader'>Background</div>
                <div className='grid_container2' style={{gap: 30}}>
                    <div className='grid_item' style={{cursor: 'auto'}}>
                        <div className='content'>
                            Jacqueline graduated from Carleton University located in Ottawa, ON with a Bachelor's degree
                            in Information Technology, majored in Interactive Multimedia & Design.
                            Currently living with family in Gloucester, ON.
<br/><br/>
                            Experienced in digital illustration, grahpic design, web design and full-stack web development.
<br/><br/>
                            Preferred name: Jacque <br/>
                            Pronouns: they/them <br/>
                            Ethnicity: Korean
<br/><br/><br/>
                            <table className='table'>
                                <tr>
                                    <th> <div className='subheader'>Hobbies</div> </th>
                                    <th> <div className='subheader'>Interests</div> </th>
                                </tr>

                                {/* Row 1 */}
                                <tr>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Journaling        </td>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Biology           </td>
                                </tr>

                                {/* Row 2 */}
                                <tr>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Live streaming     </td>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Custsom keyboards  </td>
                                </tr>

                                {/* Row 3 */}
                                <tr>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Video editing      </td>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Graphic Design     </td>
                                </tr>

                                {/* Row 4 */}
                                <tr>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Learning languages </td>
                                    <td style={{paddingBottom: 15}}> • &nbsp; Web & UX/UI Design </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div className='grid_item'>
                        <img className={`lazy-load fade-in ${loadedImages[selfie] ? 'loaded' : ''}`}
                             data-src={selfie} style={{width: 380, cursor: 'auto'}}
                             alt='selfie'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About