import React from 'react';
import './port.scss';
import uniqid from 'uniqid';


import Article from './article';
import Experiences from './experiences';
import Project from './project';

import resume from '../../../resume.json';


class Port extends React.Component {


  interests = () => {
    return resume.interests.map(interests => {
      return <div key={uniqid()}>{interests}</div>
    })
  };


  showSkill = () => {

    return resume.skills.map(skill => {

      return (
        <div className="skill-item" key={uniqid()}>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percent">{skill.percent}</span>
        </div>
      )

    });

  };


  render() {

    // console.log(resume);


    return (
      <div className="port">
        <div className="container">
          <div className="main">

            <div className="experiences">
              <h2>experiences</h2>
              {
                resume.experiences.map((el, index) => {
                  return <Experiences el={el} key={index}/>
                })
              }
            </div>
            <div className="projects">
              <h2>Projects</h2>
              {
                resume.projects.map(project => {
                  return <Project project={project} key={uniqid()}/>
                })
              }
            </div>

            <div className="skills">

              <h2>Skills</h2>

              {this.showSkill()}

            </div>


            <div className="interests">

              <h2>Interests</h2>


              {this.interests()}

            </div>


          </div>
          <Article/>
        </div>
      </div>
    )
  }
}


export default Port;