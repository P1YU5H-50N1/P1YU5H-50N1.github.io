import React from "react";

const Contact = () => {
  return (
    <div className="bg-black h-full w-full flex justify-center">
      <div
        className="container h-4/6 w-3/5  mt-16"
        style={{
          minWidth: "300px",
          background:
            "linear-gradient(102.71deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 23.53%, rgba(255, 255, 255, 0) 80.73%, rgba(255, 255, 255, 0.5) 96.12%)", // "linear-gradient(116.64deg, rgba(255, 255, 255, 0.3) 6.79%, rgba(255, 255, 255, 0.1) 71.07%)",
          boxShadow: "0px 1px 24px -1px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          border: "3px solid",
          borderRadius: "27px",
          padding: "3px",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "22px",
            width: "100%",
            background: "black",
          }}
        >
          <div
            className="text-2xl  lg:text-4xl md:text-2xl font-semibold lg:tracking-wider"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              padding: "30px",
              paddingTop: "40px",
              //   fontSize: " 24px",
              lineHeight: "29px",
              color: "rgba(255, 255, 255, 0.55)",
              //   border: "1px solid rgba(255, 255, 255, 0.63)",
              boxSizing: "border-box",
              flexDirection: "column",
              borderRadius: "22px",
              background:
                "linear-gradient(116.64deg, rgba(255, 255, 255, 0.3) 6.79%, rgba(255, 255, 255, 0.1) 71.07%)",
            }}
          >
            {/* <form className="w-full h-full"> */}
            <div>Drop Me A Message</div>

            <input className="mx-4 my-6 lg:my-12 bg-transparent border-b-white border-b-2 focus:outline-none text-xl text-white "></input>
            {/* <input className="mx-4 my-6 lg:my-12 bg-transparent underline focus:outline-none text-base text-white "></input> */}

            <button
              style={{
                boxShadow: "-6px -4px 6px 0px rgba(0, 0, 0, 0.15) inset",

                boxShadow: "6px 4px 6px 0px rgba(0, 0, 0, 0.15) inset",
              }}
              className=" lg:w-32 lg:mr-0 rounded-md lg:ml-auto lg:text-3xl mb-3 mt-auto text-xl  bg-white hover:bg-transparent text-black hover:text-white hover:border-white hover:border-2 focus:outline-none py-2 px-4 border border-black hover:border-transparent "
            >
              Next
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
