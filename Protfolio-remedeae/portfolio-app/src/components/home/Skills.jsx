import SkillIll from '../../assets/skill-illustration.jpg'

function Skills() {

    return (
        <div className="home__skills">
            <div>
                <div className='img-container'>
                    <img src={SkillIll} alt="" />
                </div>
                <div className="skills__list">
                    <h2 className="titel">Skills</h2>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                        <ul>
                            <li>Illustration</li>
                            <li>Costume construction</li>
                            <li>Propmaking</li>
                            <li>Sewing & embriodery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="skills__experience">
                    <h2 className="titel">Experience</h2>
                    <div className="skills__experience-container">
                        <div className="skills__experience-education">
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <h5>Tech for Women</h5>
                                    <h6>Sundsgårdens Folkhögskola, one semester</h6>
                                    <p>Beginners coarse in front end development. HTML, CSS and Javascript</p>
                                </li>
                                <li>
                                    <h5>Apothecary</h5>
                                    <h6>University of Gothenburg, 8 out of 10 semesters</h6>
                                    <p>Anatomy & Cellbiology, Pharmacy with specilisation in pharmaco kinetics and galenic pharmacy.</p>
                                </li>
                                <li>
                                    <h5>Self-Care Advisor</h5>
                                    <h6>Apoteket AB</h6>
                                    <p>Guidelines for self-care products and destiction of when one should turn to proffesionals.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="skills__experience-work">
                            <h3>Work Experience</h3>
                            <ul>
                                <li>
                                    <h5>Caretaker</h5>
                                    <p>Marks Kommun, Göteborgs Stad and Backaterrassen AB</p>
                                    <p>Taking care of the need residents in community homes. Worked mainly with autism and psycosis disorders, but also with other disorders and drug problems.</p>
                                </li>
                                <li>
                                    <h5>Self-Care Advisor</h5>
                                    <p>Apoteket AB</p>
                                    <p>Advisor and cashier for non-prescription drugs and other self-care products in the pharmacy.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;