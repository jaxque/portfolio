import '../../stylesheets/page.css'

function VideoEdit() {
    return (
        <div className='main_container'>
            <div className="header">Video Editing</div>
            
            <div className='sub_container'>
                <div className='content'>
                    All videos were edited using Adobe Premiere Pro.
                </div>
<br/>
                <div className='grid_container2' style={{gap: 10}}>
                    {/* Geo - Hello-Sol */}
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/dO8UVltBteg'></iframe>
                    </div>
                    {/* VR Short Film */}
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/sQ0IDPTl7RU'></iframe>
                    </div>
                    {/* Urban Sounds */}
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/mNJrKrToMHo'></iframe>
                    </div>
                    {/* Quarantine Short Film */}
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/EM-A3xdj_J8'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoEdit