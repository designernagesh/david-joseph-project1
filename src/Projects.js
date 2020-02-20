import React, { Component } from 'react'
import data from './data/data.js'

class Project extends Component{
    render(){
        const { title, image, description, link } = this.props.project
        return(
            <div style={{ display: 'inline-block', width: 350, margin: 30 }}>
                <h3>{ title}</h3>
                <img src={image} alt='profile' style={{width:300, height: 200}}/>
                <p>{ description }</p>
                <a href={ link }>{ link }</a>
            </div>
        )
    }
}

class Projects extends Component{
    render(){
        return(
            <>
                <h2>Highlighted Projects</h2>
                {
                data.map(project => {
                    return(
                        <Project key={project.id} project={project}  />
                        )
                    })
                }
            </>
        )
    }
}

export default Projects