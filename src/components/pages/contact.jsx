export default function Contact() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <a href="/home">Home</a>
                            &nbsp;/&nbsp;
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="contact-wrap">
                        <div className="contact-left">
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-phone" />
                                    </div>
                                    <h4>Call To Us</h4>
                                </div>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                            <div className="contact-box">
                                <div className="contact-vid">
                                    <div className="contact-vid__icon">
                                        <i className="bx bxs-envelope" />
                                    </div>
                                    <h4>Write To US</h4>
                                </div>
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                        <form accept="" method="" className="contact-form">
                            <div className="contact-group">
                                <input
                                    className="contact-input"
                                    type="text"
                                    name=""
                                    placeholder="Your Name *"
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    name=""
                                    placeholder="Your Email *"
                                />
                                <input
                                    className="contact-input"
                                    type="text"
                                    name=""
                                    placeholder="Your Phone *"
                                />
                            </div>
                            <textarea
                                className="contact-textarea"
                                name=""
                                cols={30}
                                rows={10}
                                placeholder="Your Massage"
                                defaultValue={""}
                            />
                            <div className="contact-submit">
                                <button type="submit" className="contact-button">
                                    Send Massage
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}