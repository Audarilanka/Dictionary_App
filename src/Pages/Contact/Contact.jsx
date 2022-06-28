import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div>
        <div className="contact-background">
          <p className="contactus">
            <b>Contact Us</b>
          </p>
          <div className="contactbox">
            <form>
              <label>
                <p>
                  <input
                    type="text"
                    fullname="fullname"
                    className="fullname"
                    placeholder="Full Name"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    email="email"
                    className="email"
                    placeholder="Email"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    message="message"
                    className="message"
                    placeholder="Message"
                  />
                </p>
              </label>
            </form>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
