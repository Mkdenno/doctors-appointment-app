import React from 'react'
import testImage from "../assets/test.jpeg";
import eduImage from "../assets/edu.jpeg";
// import teaImage from "../assets/tea.avif";
// import devImage from "../assets/dev.avif";




const Activity = () => {
  return (
    <div className="  bg-gradient-to-r from-cyan-200 via-blue to-cyan-50">
        <div className='actProvide'>
            <h1>Our Activities</h1>
            <p>we offer the following activities</p>
        </div>
        <div className='activities'>
            <div className='activityImg'>
            <img src={testImage} alt=""/>
            <img src={eduImage} alt=""/>
            <img src={eduImage} alt=""/>
            <img src={testImage} alt=""/>

            </div>
            <div className='activitidescription'>
            <ul>
            <li>Blood Sugar Screening</li>
            <li>Support Groups</li>
            <li>Diabetes Educations</li>
            </ul>

            </div>
        </div>

    </div>
  )
}

export default Activity