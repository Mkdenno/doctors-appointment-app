import React from 'react'
import VideoPlayer from 'react-video-js-player'

const AboutDiab = () => {
    // const videoSrc=Diabetic
    const poster="https://www.youtube.com/watch?v=5A5bRUROepc&t=26s"
  return (
    <div className="  bg-gradient-to-r from-cyan-50 via-blue to-cyan-200">
    <div className='diabeticAbout'>
            <div className='aboutD'>
                <h1>
                Diabetes Can Affect Your Kidneys Too.
                </h1>
                <p>Watch thi video to find out</p>
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Talk to us</button>


            </div>
            <div className='video'>
                <VideoPlayer
                src="https://www.youtube.com/watch?v=5A5bRUROepc&t=26s"
                width="720"
                height="400"
                
                />

            </div>
        </div>
    </div>
  )
}

export default AboutDiab