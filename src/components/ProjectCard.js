import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      {
        props.source_link !== 'N/A' ? (
          <a href={props.source_link} target='blank'>
            <i className="fa-solid fa-arrow-right arrow"></i>
          </a>
        ) : <span></span>
      }
      <i class="fa-regular fa-arrow-up-right"></i>
      <img src={props.image} alt="" />
      <div className="overlay"/>
      <div className="card-description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="stacks">
          {
            props.stacks.map((stack, id) => (
              <button className='tech-stack' key={id}>
                {stack}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard