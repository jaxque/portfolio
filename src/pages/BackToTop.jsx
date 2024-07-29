import '../stylesheets/backTopBtn.css'

export function BackToTop() {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button className='backTopBtn' onClick={backToTop}>
            <b style={{fontSize: 26}}>&#8593;</b>
            &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;  
            Back to Top 
            &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;
            <b style={{fontSize: 26}}>&#8593;</b>
        </button>
    )
}