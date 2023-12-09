import { seoImg } from "../assets";
import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from './FeedBackCard';

const Testimonials = () => (
    <section id="hakkimizda" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Müşterilerimizden <br className="sm:block hidden"/> Geri Bildirimler</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Müşterilerimizin deneyimlerinden bir kesit! Kart ödemelerinizden dijital pazarlama stratejilerinize kadar olan süreçte bize dair ne söylediklerini keşfedin ve siz de bizimle olan hikayenizi yazmaya başlayın.</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((seoImg) => (
          <FeedbackCard key={seoImg.id} {...seoImg}/>
        ))}
      </div>
    </section>
  )


export default Testimonials;