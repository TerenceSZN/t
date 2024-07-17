import React from 'react';
import '../styles/prep.css'; 
function Prep() {
  return (
    <div>
      <header>
        <img
          src={require('../assets/HOPE BRIDGE LOGO.png')} 
          className="main"
          alt="Hope Bridge Logo"
        />
        <div className="navigation">
          <div className="navigation-items">
            <a href="aboutUs.html">About us</a>
            <a href="volunteerpage2.html">Volunteer</a>
            <a href="prep.html">Preparedness</a>
            <a href="donate.html">Donate</a>
          </div>
        </div>
      </header>
      <div className="container">
        <section className="headerPic">
          <div id="darken"></div>
          <div id="heading">
            <h1 id="headline">Disaster Preparedness</h1>
          </div>
        </section>
        <section className="content">
          <article id="guides" className="guide">
            <h2>Guides</h2>
            <p>Click the image to learn how to prepare for various disasters with our comprehensive guides.</p>
            <div className="imgHolder">
              <div className="imgText">
                <a href="#earthquake-preparedness">
                  <img className="img" src={require("../assets/earthquake1.jpg")} alt="image showing earthquake" />
                </a>
                <div className="caption">
                  <h4>Earthquake</h4>
                </div>
              </div>
              <div className="imgText">
                <a href="#flood-preparedness">
                  <img className="img" src={require("../assets/flood.jpg")} alt="image showing flood" />
                </a>
                <div className="caption">
                  <h4>Flood</h4>
                </div>
              </div>
              <div className="imgText">
                <a href="#fire-preparedness">
                  <img className="img" src={require("../assets/fire.jpg")} alt="image showing fire" />
                </a>
                <div className="caption">
                  <h4>Fire</h4>
                </div>
              </div>
            </div>
          </article>
          <article id="survival-kits" className="survival-kits">
            <h2>Survival Kits</h2>
            <p>Make sure you have all the necessary items in your survival kit.</p>
            <a href="#basic-survival-kit">
              <img className="img" src={require("../assets/survival kit.jpeg")} alt="image showing survival kit" />
            </a>
            <div className="caption">
              <h4>Basic Survival Kit</h4>
            </div>
          </article>
          <article id="first-aid" className="first-aid">
            <h2>First Aid</h2>
            <p>Basic first aid instructions and resources for emergencies.</p>
            <div className="imgHolder">
              <div className="imgText">
                <a href="#cpr-instructions">
                  <img className="img" src={require("../assets/cpr.png")} alt="image showing CPR" />
                </a>
                <div className="caption">
                  <h4>Cardiopulmonary Resuscitation</h4>
                  <p><strong>(CPR)</strong></p>
                </div>
              </div>
              <div className="imgText">
                <a href="#wound-care">
                  <img className="img" src={require("../assets/wound care.jpg")} alt="image showing wound care treatment" />
                </a>
                <div className="caption">
                  <h4>Wound Care</h4>
                </div>
              </div>
              <div className="imgText">
                <a href="#burn-treatment">
                  <img className="img" src={require("../assets/burn treatment.jpg")} alt="image showing burn treatment" />
                </a>
                <div className="caption">
                  <h4>Burn Treatment</h4>
                </div>
              </div>
            </div>
          </article>
          {/* Add detailed sections here */}
          <section id="earthquake-preparedness">
            <h3>Earthquake Preparedness</h3>
            <h4>Before:</h4>
            <ol>
              <li>
                <h4>Understand your situation</h4>
              </li>
              <p>Earthquakes can happen anywhere, anytime. Find out if the area you live in is prone to them.</p>
              <li>
                <h4>Practice how to drop, cover and hold on</h4>
              </li>
              <p>
                During one, you should <strong>drop, cover</strong> and <strong>hold on</strong> to protect yourself
                from falling debris.
              </p>
              <p>
                <strong>DROP</strong> where you are onto your hands and knees.
              </p>
              <p>
                <strong>COVER</strong> your head and neck with your arms.
              </p>
              <p>
                <strong>HOLD ON</strong> until the shaking stops.
              </p>
              <li>
                <h4>Secure your space to prevent injuries.</h4>
              </li>
              <p>
                Identify things that might fall during shaking and secure them so they don't hurt you during an
                earthquake.
              </p>
              <li>
                <h4>Learn emergency skills.</h4>
              </li>
              <p>
                Learn <a href="#cpr-instructions">CPR</a> and such skills to help yourself and others.
              </p>
              <li>
                Gather <a href="#basic-survival-kit">emergency supplies.</a>
              </li>
            </ol>
            <h4>During:</h4>
            <ul>
              <li>
                When shaking starts, <strong>DROP</strong>, <strong>COVER</strong>, and <strong>HOLD ON</strong> to
                protect yourself.
              </li>
            </ul>
            <h4>After:</h4>
            <ol>
              <li>Stay safe.</li>
              <li>Stay connected.</li>
              <li>Take care of yourself.</li>
              <li>Check your home for safety.</li>
            </ol>
          </section>
          <section id="flood-preparedness">
            <h3>Flood Preparedness</h3>
            <h4>Before:</h4>
            <ol>
              <li>Understand your flood risk.</li>
              <p>Know your home and community's flood risk.</p>
              <li>Make plans to stay safe.</li>
              <p>Designate a place on higher ground that you can get to quickly.</p>
            </ol>
            <h4>During:</h4>
            <ul>
              <li>TURN AROUND, DON'T DROWN</li>
              <p>
                <strong>Never</strong> walk, swim or drive through floodwater.
              </p>
            </ul>
            <h4>After:</h4>
            <ol>
              <li>Prevent injuries.</li>
              <li>Protect your health.</li>
              <li>Take care of yourself.</li>
            </ol>
          </section>
          <section id="fire-preparedness">
            <h3>Fire Preparedness</h3>
            <h4>7 Ways to Prepare for a Fire</h4>
            <ol>
              <li>Install smoke alarms.</li>
              <li>Learn what smoke alarms look and sound like, and what to do when it rings.</li>
              <li>Identify at least two ways to escape.</li>
              <li>
                Establish emergency contacts like <strong>999.</strong>
              </li>
              <li>Practice escaping at least twice a year.</li>
              <li>
                Learn how to <strong>STOP</strong>, <strong>DROP</strong> and <strong>ROLL</strong>.
              </li>
            </ol>
          </section>
          <section id="basic-survival-kit">
            <h3>Basic Survival Kit</h3>
            <h4>List of items for a basic survival kit include:</h4>
            <ol>
              <li>Water</li>
              <li>Non-perishable foods like dried fruit</li>
              <li>First aid kit</li>
              <li>Cash</li>
              <li>Prescription medicine</li>
              <li>Extra batteries</li>
              <li>Matches or a lighter</li>
              <li>Toothpaste, toothbrush and soap</li>
              <li>Paper or plastic utensils</li>
              <li>Sleeping bag</li>
              <li>Flashlights</li>
              <li>Whistle</li>
              <li>Local maps</li>
              <li>Pet and service animal supplies</li>
              <li>Baby supplies like formula and diapers</li>
            </ol>
          </section>
          <section id="cpr-instructions">
            <h3>CPR Instructions</h3>
            <h4>Follow the instructions carefully:</h4>
            <ol>
              <li>Check the scene for safety.</li>
              <li>If the person is unresponsive, check for responsiveness.</li>
              <li>If they are not breathing, call 999.</li>
              <li>Kneel beside the person, place them on their back on a flat, firm surface.</li>
              <li>Give 30 chest compressions.</li>
              <li>Give 2 breaths.</li>
              <li>
                Continue giving sets of 30 chest compressions and 2 breaths. Minimize interruptions to chest compressions
                to less than 10 seconds.
              </li>
            </ol>
          </section>
          <section id="wound-care">
            <h3>Wound Care</h3>
            <h4>The following are steps to caring for a wound:</h4>
            <ol>
              <li>Wash your hands</li>
              <li>Stop the bleeding</li>
              <li>Clean the wound</li>
              <li>Apply an antibiotic or petroleum jelly</li>
              <li>Cover the wound</li>
              <li>Change the dressing</li>
              <li>Get a tetanus shot</li>
              <li>Watch for signs of infection</li>
            </ol>
          </section>
          <section id="burn-treatment">
            <h3>Burn Treatment</h3>
            <h4>To treat a burn, follow the following steps:</h4>
            <ol>
              <li>
                Cool the burn with <strong>cool</strong> (not cold) water
              </li>
              <li>Remove rings or other tight items</li>
              <li>
                Do <strong>NOT</strong> break blisters
              </li>
              <li>Apply lotion</li>
              <li>Bandage the burn</li>
              <li>Take a pain reliever if in pain</li>
              <li>Consider a tetanus shot</li>
            </ol>
          </section>
        </section>
        <section className="footer">
          <p>
            254 Madaraka Avenue, Nairobi, Kenya | Phone: 0722 12345 | Email: info@hopebridge.org
          </p>
          <p>Address: P.O Box 12345-00100 Nairobi, Kenya</p>
        </section>
      </div>
      <script src="prep.js"></script>
    </div>
  );
}

export default Prep;
