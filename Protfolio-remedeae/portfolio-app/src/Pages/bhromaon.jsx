import explore1 from '../assets/bhromaon/explore_image1.png';
import explore2 from '../assets/bhromaon/explore_image2.png';
import tourist from '../assets/bhromaon/tourist_image.png';

function Bhromaon() {
    return (
        <div className="bhromaon">
            <header>
                <div className="header">
                    <h1>Bhromaon</h1>
                    <p>Safe Travel Anywhere</p>
                    <form action="">
                        <input type="text" placeholder="Search Your Travel Destination" required />
                        <button submit>
                            <p>Search</p>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div>
                        <p>Scroll Down</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </header>
            <nav>
                <h2>Bhromaon</h2>
                <ul>
                    <li className="nav-icon" onclick="mobileMenu()">
                        <a href="#">
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="who">Who we are</a>
                    </li>
                    <li>
                        <a href="#" id="what">what we do</a>
                    </li>
                    <li>
                        <a href="#" id="travel">travel with us</a>
                    </li>
                    <li>
                        <a href="#" id="contact">contact us</a>
                    </li>
                </ul>
            </nav>
            <section className="explore">
                <div>
                    <div className="explore__text">
                        <h3>Why Choose Us</h3>
                        <p>Tion and dislike men who are so beguiled ad demoralized by desire
                            by the charms of pleasure of the moment, so blinded by desire, that
                            they cannot foresee
                        </p>
                        <p>Ddislike men who are so beguiled ad demoralized by desire
                            by the charms of pleasure of the moment, so blinded by desire, that</p>
                        <a href="#">
                            <button>explore places</button>
                        </a>
                    </div>
                    <div className="explore__img">
                        <img src={explore1} alt="Cabin by the Water" />
                        <img src={explore2} alt="Mountain Landscape" />
                    </div>
                </div>
            </section>
            <section className="booking-steps">
                <div>
                    <div className="booking-steps__item">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <h3 className="booking-steps__search">Search Places</h3>
                    </div>
                    <div className="booking-steps__item">
                        <i className="fa-regular fa-circle-check"></i>
                        <h3 className="booking-steps__select">Select Places</h3>
                    </div>
                    <div className="booking-steps__item">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <h3 className="booking-steps__book">Book & Enjoy</h3>
                    </div>
                </div>
            </section>
            <section className="book spain1">
                <div>
                    <div className="spain-info">
                        <h6>Spain</h6>
                        <h4>Grand spain madrid</h4>
                        <p>But I must explain to you how all this mistaken idea of account
                            to denouncing pleasure and praising pain was account  born and
                            I account will give you a complete account of the system</p>
                        <a href="#">
                            <button>book now</button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="book spain2">
                <div>
                    <div className="spain-info spain-info_2">
                        <h6>Spain</h6>
                        <h4>Grand spain madrid</h4>
                        <p>But I must explain to you how all this mistaken idea of account
                            to denouncing pleasure and praising pain was account  born and
                            I account will give you a complete account of the system</p>
                        <a href="#">
                            <button>book now</button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="tourist">
                <div>
                    <h3>What Our  Tourist Say</h3>
                    <div className="tourist__text">
                        <img src={tourist} alt="Man Overlooking Mountains" />
                        <div>
                            <h4>sam sumon</h4>
                            <p><i className="fa-solid fa-quote-left"></i>
                                  But I must explain to you how all this mistaken idea of
                                account to denouncinpleasure and praising pain  But I must
                                explain to you how all this mistaken idea of account to
                                nai denouncing pleasure and praising pain was account
                                born and I account will give you a complete account of
                                the system was account  born and I account will give you
                                a nai the complete account of the system
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div>
                    <div className="footer__content">
                        <h5>Bhromaon</h5>
                        <p>Safe Travel Anywhere</p>
                        <div>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Bhromaon;