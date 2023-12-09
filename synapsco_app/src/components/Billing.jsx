import { apple, web2Img, google, webImg } from '../assets'
import styles, { layout } from '../style';

const Billing = () => (
    <section id='hizmetler' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={web2Img} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Dijital Pazarlama ve <br className='sm:block hidden'/>Web Hizmetleri ile İşinizi Hızlıca Dönüştürün!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>İşletmenizin dijital varlığını güçlendirmek için modern ve etkileyici web siteleri tasarlıyoruz. Arama motorlarında daha üst sıralara çıkarak işletmenizin online görünürlüğünü artırıyoruz. Sosyal medya platformları üzerinden markanızı güçlendiriyor ve kitlelerle etkileşim kurmanıza yardımcı oluyoruz.</p>
        
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google' className='w-[128px] h-[42px] object-contain cursor-pointer'/>

        </div>
      </div>

    </section>
  )


export default Billing;