import React from "react";
import styles from "../style";

const SubmitButton = () => (
  <button
    type="submit"
    className={`bg-blue-gradient text-white font-semibold rounded-md py-2 px-6 transition-all hover:opacity-90 focus:outline-none ${styles.flexCenter}`}
  >
    Gönder
  </button>
);

export default SubmitButton;
