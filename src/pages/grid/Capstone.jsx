import '../../stylesheets/page.css'

function Capstone() {
    return (
        <div className='main_container'>
            <div className="header">Geo: Hello-Sol</div>
            
            <div className='sub_container'>
                <div className='subheader'>Introduction</div>
                <div className='content'>
                    For my capstone project in my final year of university, my group developed an interactive microsite that
                    advertises a fictitious car brand named Geo. Our goal was to promote our concept of an electric car model as
                    gen-z as our target audience. This website includes dynamic scroll animations, a 3D car configurator, and a
                    sandbox minigame where the user may use their cutomized car.
<br/><br/>
                    Visit the website here: <a href={'https://rachelleelcn.github.io/Hello-Sol/learn'} target='_blank'>Hello-Sol</a>
<br/><br/>
                    <iframe width='630' height='350' style={{border: 'none'}}
                                    src='https://youtube.com/embed/dO8UVltBteg'></iframe>
                </div>

            </div>
        </div>
    )
}

export default Capstone