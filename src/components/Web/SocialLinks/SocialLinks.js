import React from 'react'

import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg"
import { ReactComponent as TwitterIcon} from "../../../assets/img/svg/twitter.svg"
import { ReactComponent as FacebookIcon} from "../../../assets/img/svg/facebook.svg"
import { ReactComponent as LinkedinIcon} from "../../../assets/img/svg/linkedin.svg"

import "./SocialLinks.scss"

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="#" className="youtube" target="_blank">
                <YouTubeIcon/>
            </a>
             <a href="#" className="twitter" target="_blank">
                <TwitterIcon/>
            </a>
            <a href="#" className="facebook" target="_blank">
                <FacebookIcon/>
            </a>
            <a href="https://www.linkedin.com/in/danieltendero" className="linkedin" target="_blank">
                <LinkedinIcon/>
            </a>
           
        </div>
    )
}
