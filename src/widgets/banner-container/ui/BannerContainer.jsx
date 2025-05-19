import s from "./BannerContainer.module.scss";

export function BannerContainer() {
  return (
    <div className={s.bannerContainer}>
      <img
        className={s.bannerImg}
        src="src/shared/assets/images/main.webp"
        alt=""
      />

      <div className={s.bannerContent}>
        <h1>Добро пожаловать в BuyZen</h1>
        <p>
          В мире, где всё спешит — мы выбираем простоту. BuyZen — это
          интернет-магазин, где ты можешь купить нужные вещи без суеты, давления
          и бесполезной навязчивости.
        </p>
      </div>
    </div>
  );
}
