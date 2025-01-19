import About from '../components/home/About.jsx';
import Skills from '../components/home/Skills.jsx';
import Works from '../components/home/Works.jsx';

function Home() {

    return (
        <div className="home">
            <div className="home__banner">
                <div>
                    <h1>Remedeae</h1>
                    <h3>Sanna-Maya Blomdahl</h3>
                    <h3>Artist and Front End Developer</h3>
                </div>
            </div>
            <div className="home__main">
                <About/>
                <Skills />
                <Works/>

            </div>
        </div>
    )
};

export default Home;