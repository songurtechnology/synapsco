import { seoImg } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Web Dünyasında Yenilikçi Çözümlerle<br className='sm:block hidden'/> Son Teknoloji Dijital Pazarlama!
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Eşsiz web geliştirme ve dijital pazarlama hizmetleriyle tanışın. Online varlığınızı yükseltecek ve izleyici kitlenizi etkileyecek yenilikçi çözümleri keşfedin. Dijital dünyanızı dönüştürme zamanı geldi!</p>
        </h2>
          
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={seoImg} alt='seoImg' className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )

export default CardDeal;