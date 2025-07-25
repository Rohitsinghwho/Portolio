import Heading from "../../Heading/Heading";
import email from "../../../assets/email.png"
import linkedIn from "../../../assets/linkedin.png"

const Contact = () => {
  const handleGmailCompose = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=developmentbyrohit@gmail.com&su=Hello&body=Hi Rohit!",
    "_blank"
  );
}
  return (
    <section className="mt-10 font-web">
      <Heading heading={"contacts"} showViewAll={false} />
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center p-2 mt-2 md:mt-5">
        <div className="text-custom-gray md:w-[350px]">
        <p className="text-center">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        </div>
        <div className="text-custom-gray border border-custom-gray flex flex-col justify-center items-center w-[80%] md:w-max">
            <div className="text-primary">Message me here</div>
            <div className="p-2">
            <div className="flex w-full">
                <img src={email} alt="" />
                <p onClick={handleGmailCompose}>Mail</p>
            </div>
            <div className="flex w-full">
                <img src={linkedIn} alt="" />
                <p onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rohit-singh-4b1702280/",
                  "_blank"
                )
              }>rohit singh</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
