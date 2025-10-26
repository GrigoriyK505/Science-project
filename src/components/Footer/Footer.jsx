import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.info}>
          <p className={s.project}>
            © 2025 <strong>Сивоконь Анастасія</strong> | Науковий проєкт <em>«Соціальні аспекти впровадження енергоефективних технологій у повоєнній відбудові України»</em>
          </p>
          <p>
            Контакти:{" "}
            <a href="sivokonanastasia1@gmail.com">sivokonanastasia1@gmail.com</a>
          </p>
        </div>

        <div className={s.sources}>
          <p>Науковий керівник: Рибачик Наталія Олександрівна, 
вчитель географії Політехнічного ліцею НТУУ «КПІ» м. Києва, к.геогр.н.
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;