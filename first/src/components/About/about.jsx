import React from "react";
import './about.css';
const about=()=>{
    return(
        <div className="head">
            <div className="head-left">
                <img src="https://cms.verpex.com/assets/blog/how-to-build-a-dynamic-website-from-scratch.webp" alt="logo"/>
            </div>
            <div className="head-right">
                <p className="smallhead">To Create website</p>
                <h2>Dynamic Website Development</h2>
                <p className="para">Dynamic website development involves creating websites that can display different content and provide interactive features based on user interactions or
                     other factors. Unlike static websites, which display the same content to all users, dynamic websites can generate content on-the-fly, allowing for a more personalized
                     and engaging user experience.</p>
            </div>
        </div>
    )
}
export default about;
