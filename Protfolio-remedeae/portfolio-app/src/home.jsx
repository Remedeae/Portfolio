

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
                <div className="home__about">
                    <h4>Hi I'm Maya, a Swedish junior front end developer currently residing in Gothenburg. For most of my life
                        I thought I was gonna work in the healthcare sector, with an almost-degree in pharmacy, I realised that this wasn't for me.
                         So I said to myself at the age of 33: "Let's try the coding thing you always said you wanted to do 
                         if you could restart." So I did, and I'm very happy about it.
                    </h4>
                    <div className="home__about-traits">
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <h3>Personality: INFP</h3>
                            <p>As an introverted, intuitive, feeling and prospecting I care for the people around me and have many
                                ideas and visions. Usually I come of as calm and sometimes shy, but once I'm comfortable with people around me I do
                                not back down from cracking pun with a mischevious smile or goof around for everyones deligth.
                            </p>
                        </div>
                        <div>
                            <i className="fa-solid fa-paintbrush"></i>
                            <h3>Artistic Flare</h3>
                            <p>Ever since I complemented the pink flowers on the wallpaper with blue ones my dear mother have nurtured my
                                artistic talent. I started out with traditional arts, with a distinct comic/tattoo kind of style, along with abstract.
                                On top of that I also make my own cosplays!
                            </p>
                            <button><a href="https://www.instagram.com/remedycosplay/">Check out more art here!</a></button>
                        </div>
                        <div>
                            <i className="fa-solid fa-people-group"></i>
                            <h3>Team Player</h3>
                            <p>From working with social and healthcare I'm used to handeling people at their best and at their worst.
                                There are days and there are DAYS, and as a support kind of team member I'll be there to listen and
                                hopefully some good input. I'm vigilant about how people around me are doing and constantly strive for
                                balance in the group.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;