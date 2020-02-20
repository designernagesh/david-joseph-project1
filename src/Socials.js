import React, { Component } from 'react'
import socialProfiles from './data/socialProfiles.js'

class SocialIcon extends Component{
    render(){
        const { link, image } = this.props.social
        return(
            <>
            <a href={ link }><img src={ image } alt="icon" style={{width: 36, height: 36, margin: 10 }} /> </a>
            </>
        )
    }
}

class Socials extends Component{
    render(){
        return(
            <>
            <h2>Connect with me...</h2>
            {
                socialProfiles.map( social => {
                    return (
                        <SocialIcon key={ social.id } social={ social } />
                    )
                })
            }
            </>
        )
    }
}

export default Socials