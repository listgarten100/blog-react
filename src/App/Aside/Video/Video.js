import React from "react"



const Video = ({video}) => {
   
    return (
            <section className="video">
                <div className="video__inner">
                    <div className="video__item">
                        <iframe width="100%" height="350" src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myFrame"></iframe>
                    </div>
                </div>
            </section>
    )
}
  
  export default Video;