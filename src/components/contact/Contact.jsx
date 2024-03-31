import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfo}>
        <div className={css.contactNameWrap}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.contactTelWrap}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
