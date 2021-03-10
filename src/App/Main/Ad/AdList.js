import React from "react"
import Ad from "./Ad"


const AdList = ({posts}) => {
    return (
    <>
        {
            posts.map(({id, img}) => (
                <Ad
                    key = {id}
                    img = {img}
                />
            ))
        }
    </>
    )
    
}

export default AdList