import React from 'react'

const AboutPageCTA = () => {
    return (
        <div className="flex space-x-24 text-xl pt-20">
            <div className="text-center space-y-3">
                Let's Create Your<br/> 
                Next Website<br/>

                <button
                className="bg-white w-full focus:outline-none hover:shadow-xl text-xl hover:bg-black text-black hover:text-white py-2 px-6 border-2 border-black hover:border-transparent rounded-lg"
                >
                    Reach Out
                </button>
            </div>
            <div
             className="text-center space-y-3"
             >
                Discover Entire <br/>
                Skill Set<br/>
                <button
                className="bg-black w-full focus:outline-none text-xl hover:shadow-xl hover:bg-white text-white hover:text-black py-2 px-6 border-2 border-black hover:border-black rounded-lg"
                >
                    Resume
                </button>
            </div>
        </div>
    )
}

export default AboutPageCTA
