import '../stylesheets/page.css'

import PortfolioGrid from './grid/PortfolioGrid'

function Portfolio() { 
    return (
        <div className='main_container'>
            <div className="header">Portfolio</div>
            <PortfolioGrid/>
        </div>
        
    )
}

export default Portfolio