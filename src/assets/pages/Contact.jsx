import React, { useRef } from "react";
import "../../css/Contact.css";
import 'font-awesome/css/font-awesome.min.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_093399a', 'template_1aaxlxk', form.current, 'jnD4mzo3NQnzOmsR0')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    toast.success("Your message was sent successfully!");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <section className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>Send me a message or call if your interested in hiring me <br/>
                Thank you and best  regards,
                </p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-home"></i></div>
                        <div className="text">
                            <h3> Address</h3>
                            <p>081 Purok 2, Silangan Talaongan<br /> Cavinti Laguna</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope"></i></div>
                        <div className="text">
                            <h3> Email</h3>
                            <p>mkserrano28@gmail.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"> <i className="fa fa-address-book"></i></div>
                        <div className="text">
                            <h3>Contact Number </h3>
                            <p>09615841150</p>
                        </div>
                    </div>
                </div>
                <div className="contact-Form">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="to_name" required />
                            <span>Full name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="from_name" required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea name="message" required="required"></textarea>
                            <span>Type your message...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;
