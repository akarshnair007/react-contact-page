import { Button } from "../Button/Button";
import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.Module.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("Akarsh");
  const [email, setEmail] = useState("rohan@gmail.com");
  const [text, setText] = useState("Hello, i am under the water");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  const onViaCallSubmit = () => {
    console.log("i am on call");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FiPhone fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<FiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="name" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit Button" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};
