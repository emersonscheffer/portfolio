import React, { Component } from 'react'

export class SocialMedia extends Component {
  render() {
    return (
      <div id="social-media" className="mn">
        <ul>
            <li><img alt="Github" align="top" className="img-icon" width="16px" src="/github.png" />Github = <a target="_blank" rel="noopener noreferrer" href="https://github.com/emersonscheffer">link</a> </li>
            <li><img alt="Linkedin" align="top" className="img-icon" width="16px" src="/linkedin.png" />Linkedin = <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emerson-scheffer-58bba94/">link</a> </li>
            <li><img alt="email" align="top" className="img-icon" width="16px" src="/email.png" />Email = captainscheffer@gmail.com</li>
        </ul>
      </div>
    )
  }
}

export default SocialMedia
