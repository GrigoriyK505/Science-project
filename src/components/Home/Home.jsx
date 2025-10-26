import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.imgContainer}>
        <img src="/images/geotermalnyj-nasos.jpg" alt="Геотермальний насос" />
      </div>
      <div className={s.text}>
        <h1 className={s.h1}>Екологічне тепло для дому</h1>
        <p className={s.p}>Теплові насоси - сучасна технологія, що дозволяє економити ресурси та зменшувати вплив на довкілля.</p>
      </div>
    </div>
  )
}

export default Home;