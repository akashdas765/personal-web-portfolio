import { useState } from "react";
import { Container, Row, Col, Modal, Button, Spinner } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setIsLoading(true);

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs.send(
      'service_txpodwt',
      'template_nqtdzq7',
      templateParams,
      'RlROuO0k6-i9Bvk_N'
    )
      .then(() => {
        setButtonText("Send");
        setIsLoading(false);
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000); // ✅ Auto-close after 3 seconds
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setButtonText("Send");
        setIsLoading(false);
        setStatus({ success: false, message: "Something went wrong, please try again later." });
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000); // ✅ Auto-close after 3 seconds
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={contactImg}
              alt="Contact Us"
              className="contact-img"
            />
          </Col>
          <Col size={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col size={12} sm={6}>
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6}>
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6}>
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6}>
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                  </Col>
                  <Col size={12}>
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                    <button type="submit">
                      {isLoading ? (
                        <>
                          <Spinner animation="border" size="sm" /> Sending...
                        </>
                      ) : (
                        <span>{buttonText}</span>
                      )}
                    </button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* ✅ Styled Success/Error Modal */}
      <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{status.success ? "Success" : "Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{status.message}</Modal.Body>
      </Modal>
    </section>
  );
};