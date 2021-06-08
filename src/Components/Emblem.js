import React,{Fragment} from 'react'
import emblem from "../Resources/Graphics/Emblem.svg"

const Emblem = () => {
    return (

            <div>
            <img  className="h-16 mt-2 sm:h-16 md:h-16 lg:h-20" src={emblem} alt="Site-Emblem"></img>
            </div>
    )
}

export default Emblem
