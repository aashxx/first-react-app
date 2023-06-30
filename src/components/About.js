import React from 'react';

export default function About(props) {
    return (
        <div className='container'>
            <h1 className='my-3' style={{textAlign: 'center'}}>About Us</h1>
            <p className='container mb-5'><strong>textion.netlify.app</strong> is a website that helps in manipulating text operations. It can convert text into uppercase and lowercase. It can also show you the analytics of the text like reading time, no. of words etc. It also allows the user to copy the text after the operation is performed. It is absolutely free of cost and is developed using frameworks like React JS and Bootstrap.</p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What can this website do?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>textion.netlify.app</strong> This is a website that helps in manipulating text operations. It can convert text into uppercase and lowercase. It can also show you the analytics of the text like reading time, no. of words etc. It also allows the user to copy the text after the operation is performed.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is it free?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>textion.netlify.app</strong> is absolutely free of cost.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: props.mode==='dark'?'rgb(3 4 18)':'white', color: props.mode==='dark'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Tech Stack?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>textion.netlify.app</strong> is developed using React and Bootstrap.
                    </div>
                    </div>
                </div>
                </div>   
        </div>
    );
}
