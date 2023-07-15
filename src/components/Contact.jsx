import PhoneIcon from "@mui/icons-material/Phone";
import SmsIcon from "@mui/icons-material/Sms";
import DuoIcon from "@mui/icons-material/Duo";
import ChatIcon from "@mui/icons-material/Chat";

const Contact = () => {
  const mystyle = {
    color: "blue",
    fontSize: "4rem",
    background: "rgb(187 181 181 / 18%)",
  };
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="h-section">
          <p className="heading">Our Contact </p>
          <p className="sub-heading">Easy to contact us</p>
          <p className="text">
            We always ready to help by providing the best services for you.We
            beleive to good place to live that can make your life better.
          </p>
        </div>
        <div className="option-section">
          <div className="b-section">
            <div className="option">
              <div className="o-content">
                <PhoneIcon style={mystyle} />
              </div>
              <div className="o-name">
                <p className="detail-F">Call</p>
                <p className="detail-N">0225 02255 0252</p>
              </div>
              <button className="option-button">Call Now</button>
            </div>
            <div className="option">
              <div className="o-content">
                <SmsIcon style={mystyle} />
              </div>
              <div className="o-name">
                <p className="detail-F">Chat</p>
                <p className="detail-N">0225 02255 0252</p>
              </div>
              <button className="option-button">Chat Now</button>
            </div>
            <div className="option">
              <div className="o-content">
                <DuoIcon style={mystyle} />
              </div>
              <div className="o-name">
                <p className="detail-F">Video call</p>
                <p className="detail-N">0225 02255 0252</p>
              </div>
              <button className="option-button"> Video Call Now</button>
            </div>
            <div className="option">
              <div className="o-content">
                <ChatIcon style={mystyle} />
              </div>
              <div className="o-name">
                <p className="detail-F">Message</p>
                <p className="detail-N">0225 02255 0252</p>
              </div>
              <button className="option-button">Message Now</button>
            </div>
          </div>
          <div className="img-section">
            <img src="./images/contact.jpg" alt="" />
          </div>
        </div>
        <div className="last-section" id="start-section">
          <h2>Get Started with us</h2>
          <p className="text">
            Subscribe and Find syper attractive price quotes from us.
          </p>
          <p className="text">Find your residence soon</p>
          <button className="c-button">Get Started </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
