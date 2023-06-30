import React from 'react'

export default function Contact(props) {
  return (
    <div className='container'>
      <h1 className='mt-3' style={{textAlign: "center"}}>Contact Us</h1>
            <div className="details mt-5" style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                <div className="text-details">
                    <div className="knowus"><b>Contact Us</b>
                        <ul className='mt-2' style={{listStyle: "none"}}>
                            <li><i className="fa-solid fa-user"></i> Mohamed Aashir</li>
                            <li><i className="fa-solid fa-phone"></i> +91 7358728447</li>
                            <li><i className="fa-solid fa-envelope"></i> tmohamedaashir@gmail.com</li>
                        </ul>
                    </div>
                    <div className="followus"><b>Follow Us</b>
                        <ul className='mt-2' style={{listStyle: "none"}}>
                            <li><a href='https://www.instagram.com/mohamed_aashir_/' style={{textDecoration: 'none', color: props.mode==='dark'?'white':'black'}} target='blank'><i className="fa-brands fa-instagram"></i> @mohamed_aashir_</a></li>
                            <li><a href='https://www.linkedin.com/in/aashxx/' style={{textDecoration: 'none', color: props.mode==='dark'?'white':'black'}} target='blank'><i className="fa-brands fa-linkedin"></i> @aashxx</a></li>
                            <li><a href='https://github.com/aashxx' style={{textDecoration: 'none', color: props.mode==='dark'?'white':'black'}} target='blank'><i className="fa-brands fa-github"></i> @aashxx</a></li>
                        </ul>
                    </div>
                </div>
                <div className="maps">
                    <div><b>Visit Us</b></div>
                    <iframe className='mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11463249853!2d79.92880682245223!3d13.048043802725362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1681135107262!5m2!1sen!2sin" width="370" height="250" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
                </div>
            </div>
    </div>
  );
}
