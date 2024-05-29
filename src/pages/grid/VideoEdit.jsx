import '../../stylesheets/page.css'

function VideoEdit() {
    return (
        <div className='main_container'>
            <div className="header">Video Editing</div>
            
            <div className='sub_container'>
                <div className='grid_container2' style={{gap: 10}}>
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/dO8UVltBteg'></iframe>
                    </div>
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/sQ0IDPTl7RU'></iframe>
                    </div>
                    <div className='grid_item'>
                        <iframe width='445' height='250' style={{border: 'none'}}
                                src='https://youtube.com/embed/mNJrKrToMHo'></iframe>
                    </div>
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