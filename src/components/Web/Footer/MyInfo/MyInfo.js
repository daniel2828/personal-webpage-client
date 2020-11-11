import React from 'react';
import "./MyInfo.scss";
import LogoWhite from "../../../../assets/img/png/logo.png";
import SocialLink from "../../SocialLinks";
export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={LogoWhite} alt="Daniel Tendero García"></img>
            <h4>El mundo de la programación es maravilloso. Es como ser un pequeño dios capaz de crear cualquier cosa.</h4>
            <SocialLink/>
        </div>
    )
}
