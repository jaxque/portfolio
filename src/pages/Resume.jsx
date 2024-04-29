import '../stylesheets/page.css'

function Resume() { 
    return (
        <div className='main_container'>
            <div className="container">
                <div className="header">Resume</div>

                <div className='sub_container'>
                    <div className='subheader'>Jacqueline Lee</div>
                    <div className='content'>
                        (437) 993-0823<br/>
                        jacquelinelee23.work@gmail.com<br/>
                        Gloucester, ON
                    </div>
                </div>

                {/* Work Experience */}
                <div className='sub_container'>
                    <div className='subheader'>Work Experience</div>
                    <div className='content'>
                        <b>Retail Salesperson</b >&nbsp;|&nbsp; Team Aquatic Supplies - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        Sept 2022 - Feb 2024
                        <br/>
                        • &nbsp; Assisted customers to find the right fit and what they need<br/>
                        • &nbsp; Created and printed infographics about product knowledge using Canva
                    </div>
                </div>

                {/* Applicable Projects */}
                <div className='sub_container'>
                    <div className='subheader'>Applicable Projects</div>
                    <div className='content'>
                        <b>Backend Web Developer</b >&nbsp;|&nbsp; Carleton University - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        Sept 2023 - April 2024
                        <br/>
                        Collaborative project to develop an interactive website that advertises a fictitious car brand.<br/>
                        • &nbsp; Discussed and planned the structure of the website and the components of each page<br/>
                        • &nbsp; Implemented game mechanics for the minigame section using React JS 
                    </div>
                    <br/>
                    <div className='content'>
                        <b>Video Editor</b >&nbsp;|&nbsp; Carleton University - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &nbsp; &nbsp;
                        Nov 2022 - Dec 2022
                        <br/>
                        Group project to create a short film about living in a VR world.<br/>
                        • &nbsp; Planned out a script and storyboard of the video with group members<br/>
                        • &nbsp; Assembled footage and audio clips, applied colour grading, and included voice overs using Premiere Pro
                    </div>
                    <br/>
                    <div className='content'>
                        <b>Video Editor</b >&nbsp;|&nbsp; Algonquin College - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &nbsp;
                        Nov 2020 - Dec 2020
                        <br/>
                        Joint project to create a short film about the daily life of a university student in quarantine.<br/>
                        • &nbsp; Discussed and planned video treatment, storyboard, and shot list with team partner<br/>
                        • &nbsp; Assembled footage and audio clips, applied colour grading, and added motion graphics using Premiere Pro<br/>
                        • &nbsp; Revised video drafts with the course instructor to receive feedback and discuess changes for the final edit
                    </div>
                    <br/>
                    <div className='content'>
                        <b>Database Developer & Web Designer</b >&nbsp;|&nbsp; Carleton University - Ottawa, ON
                        &emsp; &emsp; &nbsp;
                        Sept 2020 - Dec 2020
                        <br/>
                        Collaborative project to develop a database website for a fictitious chocolate company.<br/>
                        • &nbsp; Coded the main structure of the database to store company information using SQL<br/>
                        • &nbsp; Created branding and website wireframes using Adobe Illustrator
                    </div>
                </div>

                {/* Education */}
                <div className='sub_container'>
                    <div className='subheader'>Education</div>
                    <div className='content'>
                        <b>Algonquin College</b> - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;
                        Sept 2019 - April 2024
                        <br/>
                        Advanced Diploma - Interactive Multimedia & Design
                    </div>
                    <br/>
                    <div className='content'>
                        <b>Carleton University</b> - Ottawa, ON
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;
                        Sept 2019 - April 2024
                        <br/>
                        Bachelor's Degree in Information Technology - Interactive Multimedia & Design
                    </div>
                </div>

                {/* Skills & Qualifications */}
                <div className='sub_container'>
                    <div className='subheader'>Skills & Qualifications</div>
                    <div className='content'>
                        • &nbsp; Proficient in using Google apps and Microsoft apps<br/>
                        • &nbsp; Experienced in using Adobe Photoshop and Premiere Pro<br/>
                        • &nbsp; Knowledgeable in web development &#40; HTML, CSS, JavaScript, React &#41;<br/>
                        • &nbsp; Familiar with using Figma and Canva<br/>
                        • &nbsp; Excellent communication and cooperation skills<br/>
                        • &nbsp; Bilingual &#40; English and French &#41;<br/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume