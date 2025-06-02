import s from "./AdminPanel.module.scss";
import { useLocation, Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import clsx from "clsx";
import { ROUTE } from "../../../shared/api/path";

export function AdminPanel() {
  const { pathname } = useLocation();
  const activedLink = (path) => pathname.includes(path);

  return (
    <div className={s.adminPanel}>
      <h2 className={s.title}>Админ панель</h2>

      <div className={s.linkList}>
        <Link
          to={ROUTE.internetCreate}
          className={clsx(
            s.link,
            activedLink(ROUTE.internetCreate) && s.active
          )}
        >
          <IoIosAddCircle size={44} /> Добавить продукт
        </Link>
        <Link
          to={ROUTE.applications}
          className={clsx(s.link, activedLink(ROUTE.applications) && s.active)}
        >
          <HiMiniUsers size={44} /> Заявки
        </Link>
      </div>
    </div>
  );
}
