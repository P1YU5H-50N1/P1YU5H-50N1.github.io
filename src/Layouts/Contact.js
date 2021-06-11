import React, { Fragment, useState } from "react";
import { sendForm, init } from "emailjs-com";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [SentFlag, setSentFlag] = useState(false);
  const [sendButtonStatus, setSendButtonStatus] = useState("Send");
  const [ResponseMsg, setResponseMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setSendButtonStatus("Sending");
    // console.log(`submitted : \n + ${Name},${Message},${Email}`);
    sendForm(
      "default_service",
      "template_jvizfuj",
      e.target,
      "user_33sUCps7fzTG23THX5CxK"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setSentFlag(!SentFlag);
        setResponseMsg(
          `Hey, I Recieved The Message \n And Will Get Back To You \n ASAP`
        );
        setSendButtonStatus("Send");
      },
      function (error) {
        console.log("FAILED...", error);
        setSentFlag(!SentFlag);
        setResponseMsg(
          `Your message couldn't be delivered \n Feel free to reach me at me.piyush.360@gmail.com \n or via LinkedIn`
        );
        setSendButtonStatus("Send");
      }
    );
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <Fragment>
      {SentFlag ? (
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
                className=" text-xl lg:px-10 px-4 lg:text-3xl pt-20 text-white text-center my-auto lg:space-y-10 leading-snug lg:leading-snug lg:tracking-wider"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  boxSizing: "border-box",
                  flexDirection: "column",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(116.64deg, rgba(255, 255, 255, 0.3) 6.79%, rgba(255, 255, 255, 0.1) 71.07%)",
                }}
              >
                {ResponseMsg.split("\n").map((i) => {
                  return <p>{i}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={sendMessage}
          className="contact-form bg-black h-full w-full flex justify-center"
        >
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
                  className="text-2xl  lg:text-4xl lg:space-y-10 md:text-2xl font-semibold lg:tracking-wider"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: "30px",
                    paddingTop: "40px",
                    lineHeight: "29px",
                    color: "rgba(255, 255, 255, 0.55)",
                    boxSizing: "border-box",
                    flexDirection: "column",
                    borderRadius: "22px",
                    background:
                      "linear-gradient(116.64deg, rgba(255, 255, 255, 0.3) 6.79%, rgba(255, 255, 255, 0.1) 71.07%)",
                  }}
                >
                  <div>Drop Me A Message</div>

                  <input
                    required
                    name="message"
                    value={Message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="What Do You Think?"
                    className="mx-4 mt-10 mb-5 lg:my-5 pb-1 mt-6 lg:mt-12 bg-transparent border-b-white border-b-2 focus:outline-none text-xl lg:text-2xl text-white "
                  ></input>
                  <input
                    required
                    name="from_name"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Nick Name"
                    className="mx-4  pb-1 my-6 bg-transparent border-b-white border-b-2 focus:outline-none text-xl lg:text-2xl text-white "
                  ></input>
                  <input
                    required
                    type="email"
                    name="reply_to"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="E-Mail"
                    className="mx-4 pb-1 my-6 bg-transparent border-b-white border-b-2 focus:outline-none text-xl lg:text-2xl text-white "
                  ></input>

                  <button
                    type="submit"
                    style={{
                      boxShadow:
                        "-6px -4px 6px 0px rgba(0, 0, 0, 0.15) inset,6px 4px 6px 0px rgba(0, 0, 0, 0.15) inset",
                    }}
                    className=" lg:w-48 lg:mr-0 rounded-md lg:ml-auto lg:text-3xl mb-3 mt-auto text-xl  bg-white hover:bg-transparent text-black hover:text-white hover:border-white hover:border-2 focus:outline-none py-2 px-4 border border-black hover:border-transparent "
                  >
                    {sendButtonStatus}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default Contact;
