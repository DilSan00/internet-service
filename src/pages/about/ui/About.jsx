import s from "./About.module.scss";
import { LinkItem } from "../../../components/ui/linkItem/LinkItem";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { IoLogoBehance } from "react-icons/io5";

export function About() {
  return (
    <div className={s.about}>
      <div className={s.bannerContainer}>
        <img
          className={s.banner}
          src="src/shared/assets/images/banner-aboutus.jpg"
          alt="banner"
        />
      </div>

      <div className={s.container}>
        <p className={s.subTitle}>О нас</p>
        <p className={s.text}>
          Добро пожаловать в BuyZen — интернет-магазин, где покупки становятся
          простыми, как вдох. Мы создали BuyZen с одной целью: избавить людей от
          стресса, спешки и хаоса, которые часто сопровождают онлайн-шопинг. У
          нас всё работает иначе: минимализм в интерфейсе, прозрачность в ценах
          и только отобранные товары, за которые нам не стыдно.
        </p>
      </div>

      <div className={s.container}>
        <p className={s.subTitle}>Что мы предлагаем</p>
        <div className={s.cardList}>
          <div className={s.card}>Качественные и проверенные товары</div>
          <div className={s.card}>Удобный и быстрый заказ без лишнего</div>
          <div className={s.card}>Честную поддержку без роботов</div>
          <div className={s.card}>Быструю доставку по всей стране</div>
        </div>
      </div>

      <div className={s.container}>
        <p className={s.subTitle}>Почему BuyZen?</p>
        <p className={s.text}>
          Мы не гонимся за массой, мы заботимся о том, чтобы каждая покупка
          приносила тебе радость. Покупать — должно быть так же просто, как
          дышать. Вот это и есть BuyZen.
        </p>
      </div>
    </div>
  );
}
