import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./asset/minhaj_dp_2024.png')} className="Profile-image" alt="Profile Photo" />
    
        {/* Description */}
        <p className="Description">
        Hi I'am Minhaj Nadeem Senior Android Developer
        </p>

        {/* Navigation Menu */}
        <nav className="App-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section id="about">
        <h2>About</h2>
        <p>Experienced Android developer with over 5 years of hands-on expertise in crafting robust mobile applications. Known for a positive attitude, strong dedication to delivering high-quality results, and a genuine passion for programming. Consistently strive to innovate and exceed project expectations through proactive collaboration and a detail-oriented approach.</p>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p>This is the education section.</p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <p>This is the experience section.</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>This is the skills section.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>
      <section id="hobbies">
        <h2>Hobbies</h2>
        <p>This is the hobbies section.</p>
      </section>
    </div>
  );
}

export default App;
