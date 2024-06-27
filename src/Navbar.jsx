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

            <br/>

            <NavLink to='/portfolio/chara'>
                <div className='subheading'>Character Design</div>
            </NavLink>
            
            <NavLink to='/portfolio/dnx'>
                <div className='subheading'>Dueling Nexus</div>
            </NavLink>
            
            <NavLink to='/portfolio/capstone'>
                <div className='subheading'>Geo: Hello-Sol</div>
            </NavLink>

            <NavLink to='/portfolio/graphic'>
                <div className='subheading'>Graphic Design</div>
            </NavLink>

            <NavLink to='/portfolio/illust'>
                <div className='subheading'>Illustrations</div>
            </NavLink>

            <NavLink to='/portfolio/pawfee'>
                <div className='subheading'>Pawfee Beans</div>
            </NavLink>

            <NavLink to='/portfolio/reynbow'>
                <div className='subheading'>Reynbow</div>
            </NavLink>

            <NavLink to='/portfolio/video'>
                <div className='subheading'>Video Editing</div>
            </NavLink>

            <NavLink to='/portfolio/vtuber'>
                <div className='subheading'>VTuber: Murase Lune</div>
            </NavLink>

            <NavLink to='/portfolio/other'>
                <div className='subheading'>Other Art</div>
            </NavLink>

            <br/><br/><br/>

            {/* Contact Info */}
            <NavLink to='/portfolio/contact' >
                <div className='heading'>Contact</div>
            </NavLink>
        </div>
    )
}

export default Navbar