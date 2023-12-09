import React from "react";
import styles from "../style";
import Form from "./Form";

const Contact = () => (
  <section id="iletisim" className={`${styles.section} bg-gray-gradient`}>
    <div className={`${styles.boxWidth} ${styles.sectionInfo}`}>
      <h2 className={`${styles.heading2} text-gradient ml-2 mt-3`}>İletişim Kurun</h2>
      <p className={`${styles.paragraph} mt-5 mb-2 ml-3`}>
      Sorularınız, önerileriniz veya işbirliği talepleriniz mi var? Bizimle iletişime geçmek için aşağıdaki formu doldurun, size en kısa sürede geri döneceğiz.
      </p>

      <Form />
    </div>
  </section>
);

export default Contact;
