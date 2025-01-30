import './stylesheets/main.css'

import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    const isActive = (to) => { return location.pathname === to }
    const handleClick = () => { window.location.reload() }

    return (
        <div className='nav_container'>
            {/* Home */}
            <NavLink to='/portfolio/portfolio' >
                <div className='my_name'>Jacqueline Lee</div>
            </NavLink>

            <br/><br/>
            
            {/* About */}
            <NavLink to='/portfolio/about' >
                <div className='heading'>About Me</div>
            </NavLink>

            {/* Resume */}
            <NavLink to='/portfolio/resume' >
                <div className='heading'>Resume</div>
            </NavLink>

            <br/><br/>

            {/* Portfolio */}
            <NavLink to='/portfolio/portfolio' >
                <div className='heading'>Portfolio</div>
            </NavLink>

            {/* Subheadings */}
            <NavLink to='/portfolio/chara'>
                <div className='subheading_container'>
                    <span className='subheading'>Character Design</span>
                </div>
            </NavLink>

            <NavLink to='/portfolio/graphic'>
                <div className='subheading_container'>
                    <span className='subheading'>Graphic Design</span>
                </div>
            </NavLink>

            <NavLink to='/portfolio/illust'>
                <div className='subheading_container'>
                    <span className='subheading'>Illustrations</span>
                </div>
            </NavLink>

            <NavLink to='/portfolio/video'>
                <div className='subheading_container'>
                    <span className='subheading'>Video Editing</span>
                </div>
            </NavLink>

            <br/><br/>

            {/* Contact Info */}
            <NavLink to='/portfolio/contact' >
                <div className='heading'>Contact</div>
            </NavLink>
        </div>
    )
}

export default Navbar