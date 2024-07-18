import '../stylesheets/page.css'
import '../stylesheets/resume.css'

import { BackToTop } from './BackToTop'

function Resume() { 
    return (
        <div className='main_container'>
            <div className="header">Resume</div>

            <div className='sub_container'>
                <div className='subheader'>Jacqueline Lee</div>
                <div className='content'>
                    (437) 993-0823<br/>
                    jacquelinelee23.work@gmail.com<br/>
                    Gloucester, ON, Canada
                </div>
            </div>

            {/* Work Experience */}
            <div className='sub_container'>
                <div className='subheader'>Work Experience</div>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Freelance Graphic Designer & Illustrator 
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Dueling Nexus</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Dec 2023 - Present</th>
                        </tr>
                    </table>
                    • &nbsp; Created stylized banner illustrations for website visuals and buttons <br/>
                    • &nbsp; Provided a character reference sheet for a plush design of website mascot
                </div>
<br/>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Retail Salesperson
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Team Aquatic Supplies - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Sept 2022 - 2024</th>
                        </tr>
                    </table>
                    • &nbsp; Assisted customers to find the right fit and what they need<br/>
                    • &nbsp; Created and printed infographics about product knowledge using Canva
                </div>
            </div>

            {/* Applicable Projects */}
            <div className='sub_container'>
                <div className='subheader'>Applicable Projects</div>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Backend Web Developer
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Carleton University - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Sept 2023 - April 2024</th>
                        </tr>
                    </table>
                    Collaborative project to develop an interactive website that advertises a fictitious car brand.<br/>
                    • &nbsp; Discussed and planned the structure of the website and the components of each page<br/>
                    • &nbsp; Implemented game mechanics for the minigame section using React JS 
                </div>
<br/>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Video Editor
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Carleton University - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Nov 2022 - Dec 2022</th>
                        </tr>
                    </table>
                    Group project to create a short film about living in a VR world.<br/>
                    • &nbsp; Planned out a script and storyboard of the video with group members<br/>
                    • &nbsp; Assembled footage and audio clips, applied colour grading, and included voice overs using Premiere Pro
                </div>
<br/>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Video Editor
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Algonquin College - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Nov 2020 - Dec 2020</th>
                        </tr>
                    </table>
                    Joint project to create a short film about the daily life of a university student in quarantine.<br/>
                    • &nbsp; Discussed and planned video treatment, storyboard, and shot list with team partner<br/>
                    • &nbsp; Assembled footage and audio clips, applied colour grading, and added motion graphics using Premiere Pro<br/>
                    • &nbsp; Revised video drafts with the course instructor to receive feedback and discuess changes for the final edit
                </div>
<br/>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Database Developer & Web Designer
                                <group style={{textAlign: 'right', fontWeight: 400}}>
                                &nbsp; |&nbsp; Carleton University - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Sept 2020 - Dec 2020</th>
                        </tr>
                    </table>
                    Collaborative project to develop a database website for a fictitious chocolate company.<br/>
                    • &nbsp; Coded the main structure of the database to store company information using SQL<br/>
                    • &nbsp; Created branding and website wireframes using Adobe Illustrator
                </div>
            </div>

            {/* Education */}
            <div className='sub_container'>
                <div className='subheader'>Education</div>
                <div className='content'>
                    <table>
                        <tr>
                            <th className='a'>Carleton University
                                <group style={{textAlign: 'right', fontWeight: 400}}> - Ottawa, ON</group>
                            </th>
                            <th style={{textAlign: 'right', fontWeight: 400}}>Sept 2019 - April 2024</th>
                        </tr>
                    </table>
                    Bachelor of Information Technology - Interactive Multimedia & Design <br/>
                    In collboration with Algonquin College Co-operative Education <br/>
                    CGPA: 8.22
                </div>
            </div>

            {/* Skills & Qualifications */}
            <div className='sub_container'>
                <div className='subheader'>Skills & Qualifications</div>
                <div className='content'>
                    • &nbsp; Proficient in using Google apps and Microsoft apps<br/>
                    • &nbsp; Experienced in using Adobe apps, Canva, Figma, and Procreate<br/>
                    • &nbsp; Knowledgeable in web development &#40; HTML, CSS, JavaScript, React, Vite &#41;<br/>
                    • &nbsp; Excellent communication, cooperation, and organization<br/>
                    • &nbsp; Quick to adapt and solve problems<br/>
                    • &nbsp; Eager to meet new people and learn new technologies<br/>
                    • &nbsp; Languages: English, French, Korean
                </div>
            </div>

            <div className='sub_container'><BackToTop/></div>

        </div>
    )
}

export default Resume