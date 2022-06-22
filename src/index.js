import React from 'react';
import ReactDOM from 'react-dom'

const Root = document.getElementById("root")
const email_button = document.getElementById("btn1")
const resume_button = document.getElementById("btn2")

function Picture() {
  return(
    <div className="image">
    <img src="./Jerry.jpeg" />
    </div>
  )
};

function Nav() {
  return (
    <div className="nav-bar">
    <div className="nav-text">
      <h1 className="name-header">Jerry Yang</h1>
      <h4 className="subtitle-header">Aspiring Frontend Web Developer</h4>
      <h4 className="email-header">jerry_yang_2@outlook.com</h4>
    </div>
    <div className="linked-buttons">
      <a href="mailto:jerry_yang_2@outlook.com"><button id="btn1"><i class="fa fa-envelope-o"></i> Email Me!</button></a>
      <a href="http://shorturl.at/szBLT"><button id="btn2"><i class="fa fa-folder-o"></i> View My Resume!</button></a>
    </div>
    </div>
  )
}

function Body() {
  return (
    <div className="body">
      <h2>Who Am I?</h2>
      <p>
        My name is Jerry Yang and I hold a Bachelor's Degree in Business Administration from Simon Fraser University.
        I have over 4 years of experience in administration, executive assistance, and office management.
        I took an interest in coding after a friend introduced me to the Odin Project, an open-source curriculum designed for Full-Stack Developers.
        Since then, I have been working on my own GitHub portfolio, which consists of my own personal projects, projects from the Odin Project,
         as well as practicums. 
      </p>
      <h2>Knowledge and Tools</h2>
      <p>
        I have experience working with HTML, CSS, JavaScript, Python, Ruby, and SQL. This application in particular makes use of the React.JS library
      </p>
      <h2>My Interests and Hobbies</h2>
      <p>
        I enjoy hiking and kayaking in the Summer in the beautiful Vancouver weather. I am also a musician with an ARCT Diploma in Piano Performance,
         and an Intermediate level guitarist. I occasionally teach both piano and guitar as a way of sharing my passion with others.
      </p>
    </div>
  )
}

function DocumentFooter() {
  return (
    <footer className="footer">
      <div className="linked-buttons-two">
        <a href="https://github.com/rebirth112"><button id="btn3"><i class="fa fa-github"></i></button></a>
        <a href="https://www.facebook.com/3jerry3/"><button id="btn4"><i class="fa fa-facebook"></i></button></a>
        <a href="https://twitter.com/id_Rebirth"><button id="btn5"><i class="fa fa-twitter"></i></button></a>
      </div>
    </footer>
  )
}

function FinalRender() {
  return (
    <div className="outside">
      <div className="main-body">
        <Picture />
        <Nav />
        <Body />
        <DocumentFooter />
      </div>
    </div>
  )
};

ReactDOM.render(<FinalRender />, Root);
