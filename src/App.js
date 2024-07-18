import React, { useState } from 'react';
import './homepagestyle.css'; // Import your CSS file
import swiper from './swiper';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderNav = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <header>
        <img
          src={require('./assets/HOPE_BRIDGE_LOGO.png').default}
          className="main"
          alt="Hope Bridge Logo"
        />
        <div className="navigation">
          <div className="navigation-items">
            <a href="aboutUs.html">About us</a>
            <a href="volunteerpage2.html">Volunteer</a>
            <a href="donate.html">Donate</a>
          </div>
        </div>
      </header> 

      <section className="home">
        {/* Video slides */}
        <video
          className={`video-slide ${activeIndex === 0 ? 'active' : ''}`}
          src={require('./assets/videos/video-1.mp4').default}
          autoPlay
          muted
          loop
        ></video>
        <video
          className={`video-slide ${activeIndex === 1 ? 'active' : ''}`}
          src={require('./assets/videos/video-2.mp4').default}
          autoPlay
          muted
          loop
        ></video>
        <video
          className={`video-slide ${activeIndex === 2 ? 'active' : ''}`}
          src={require('./assets/videos/video-3.mp4').default}
          autoPlay
          muted
          loop
        ></video>
        <video
          className={`video-slide ${activeIndex === 3 ? 'active' : ''}`}
          src={require('./assets/videos/video-4.mp4').default}
          autoPlay
          muted
          loop
        ></video>
        <video
          className={`video-slide ${activeIndex === 4 ? 'active' : ''}`}
          src={require('./assets/videos/video-5.mp4').default}
          autoPlay
          muted
          loop
        ></video>

        {/* Content blocks */}
        <div className={`content ${activeIndex === 0 ? 'active' : ''}`}>
          <h1>Disaster <br />Response</h1>
          <p>
            Efficient coordination between disaster relief resources and
            affected communities. <br /> Get all the information you need
            on specific disasters in one location. with you help, we
            strive to be able to quickly and effectively help those
            impacted by tragedies.
          </p>
          <a href="prep.html">Be Prepared</a>
        </div>
        <div className={`content ${activeIndex === 1 ? 'active' : ''}`}>
          <h1>
            Clean Water <br />
            And Food Aid
          </h1>
          <p>
            About a 33 children die of hunger per minute in Kenya. <br />
            Hope Bridge sets out to help the families settled in famine
            stricken-lands in Noerthern Kenya. There we work to ensure
            that such communities have access to a borehole and delivered
            food aid.
          </p>
          <a href="aboutUs.html">Read More</a>
        </div>
        <div className={`content ${activeIndex === 2 ? 'active' : ''}`}>
          <h1>Fostering <br />Community </h1>
          <p>
            {' '}
            Members of the community are vital to the rescue efforts,
            healthy recovery and <br />information updates that Hope Bridge
            relies on. Therefore, we greatly encourage a sense of
            togetherness and family in the society.
          </p>
          <a href="aboutUs.html">Read More</a>
        </div>
        <div className={`content ${activeIndex === 3 ? 'active' : ''}`}>
          <h1>Education <br /> Initiatives</h1>
          <p>
            The first step in disaster preparedness and tragedy prevention
            is education. <br /> We also visit rural schools that are
            severely stricken by poverty and lack proper sanitation. <br />
            There we dig boreholes and give children a healthy and
            conducive learning environment.
          </p>
          <a href="aboutUs.html">Read More</a>
        </div>
        <div className={`content ${activeIndex === 4 ? 'active' : ''}`}>
          <h1>Donate <br />and Volunteer</h1>
          <p>
            We need your help! As a non-profit organization, we need all
            the help we can get! Help the members of your community by
            volunteering at any of our centers, <br />donating whatever
            extra you don't need or giving us any useful information that
            may help someone.
          </p>
          <a href="donate.html">Read More</a>
        </div>

        {/* Slider navigation */}
        <div className="slider-navigation">
          <div
            className={`nav-btn ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => sliderNav(0)}
          ></div>
          <div
            className={`nav-btn ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => sliderNav(1)}
          ></div>
          <div
            className={`nav-btn ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => sliderNav(2)}
          ></div>
          <div
            className={`nav-btn ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => sliderNav(3)}
          ></div>
          <div
            className={`nav-btn ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => sliderNav(4)}
          ></div>
        </div>
      </section>

      <section className="values">
        {/* Core values content */}
        <h1>Our Core Values</h1>
        <div className="row">
          {/* Value columns */}
          <div className="valuecolumn">
            <h3>Unity</h3>
            <p>
              {' '}
              At Hope Bridge, we value the togetherness and unity of a
              society. To be of help to one another it is crucial to work
              in harmony.
            </p>
          </div>
          <div className="valuecolumn">
            <h3>Equality</h3>
            <p>
              {' '}
              All human beings should be of same dignity. We do not
              discriminate in any form whether age, sex, race or
              ethnicity.
            </p>
          </div>
          <div className="valuecolumn">
            <h3>Humanity</h3>
            <p>
              {' '}
              We do our best to alleviate human suffering wherever it is
              found. If they can be helped, Hope Bridge wastes no time in
              providing aid to affected communities.
            </p>
          </div>
        </div>
      </section>

      <section className="projects">
        {/* Recent projects content */}
        <div className="row">
          <div className="content-col">
            <h1>RECENT PROJECTS</h1>
            <p>
              {' '}
              From flood rescues in Nairobi to aid initiatives in Lodwar,
              Hope Bridge has been working hand in hand with local
              communities for societal benefits just this 2024. The other
              major projects these year were: borehole drilling in famine
              stricken land and public safety education initiatives.
            </p>
          </div>
          <div className="image-col">
            <div className="image-gallery">
              {/* Images */}
              <img
                src={require('./assets/borehole_photo.jpg').default}
                alt="Borehole"
              />
              <img
                src={require('./assets/floods.jpg').default}
                alt="Floods"
              />
              <img
                src={require('./assets/food_aid.jpg').default}
                alt="Food Aid"
              />
              <img
                src={require('./assets/public_safety.jpeg').default}
                alt="Public Safety"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="update">
        {/* News updates content */}
        <h1>NEWS UPDATES</h1>
        <div className="container swiper">
          {/* SwiperJS slider */}
          <div className="slider-wrapper">
            <div className="card-list swiper-wrapper">
              {/* News cards */}
              <div className="card-item swiper-slide">
                <img
                  src={require('./assets/floods.jpg').default}
                  alt="Floods"
                  className="user-image"
                />
                <h2 className="user-name">Nairobi</h2>
                <p className="user-profession">Flood warning</p>
                <button className="message-button">Learn more</button>
              </div>
              <div className="card-item swiper-slide">
                <img
                  src={require('./assets/earthquake.jpg').default}
                  alt="Earthquake"
                  className="user-image"
                />
                <h2 className="user-name">Kajiado</h2>
                <p className="user-profession">Tremors reported</p>
                <button className="message-button">Learn more</button>
              </div>
              <div className="card-item swiper-slide">
                <img
                  src={require('./assets/drought.jpg').default}
                  alt="Drought"
                  className="user-image"
                />
                <h2 className="user-name">Turkana</h2>
                <p className="user-profession">Drought crisis</p>
                <button className="message-button">Learn more</button>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section className="footer">
        {/* Footer content */}
        <p>
          254 Madaraka Avenue, Nairobi, Kenya | Phone: 0722 12345 | Email:
          info@hopebridge.org
        </p>
        <p> Address: P.O Box 12345-00100 Nairobi, Kenya</p>
      </section>
    </div>
  );
};

export default App;
