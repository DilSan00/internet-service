import s from "./BannerContainer.module.scss";

export function BannerContainer() {
  return (
    <div className={s.bannerContainer}>
      <img
        className={s.bannerImg}
        src="https://pastatic.picsart.com/cms-pastatic/1325ef30-1648-451b-b68e-8183c2ef6f70.png?type=webp&to=min&r=450"
        alt=""
      />

      <div className={s.bannerContent}>
        <h1>Internet Service</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto soluta
          id voluptatem sit qui, quaerat modi aspernatur! Quo rerum, vero porro
          illum laborum, atque modi commodi nulla nemo ex, sapiente delectus?
          Tempora doloribus perspiciatis recusandae beatae consequuntur impedit
          eos vel.
        </p>
      </div>
    </div>
  );
}
