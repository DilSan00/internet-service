import s from "./LinkItem.module.scss";

export const LinkItem = ({ title, link, icon }) => {
  return (
    <a className={s.link} href={link}>
      <p>{title}</p>
      {icon}
    </a>
  );
};
