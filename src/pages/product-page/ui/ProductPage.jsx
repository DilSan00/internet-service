import { useParams, useNavigate } from "react-router-dom";
import { useAddToCartMutation, useGetProductQuery } from "../api";
import s from "./ProductPage.module.scss";
import { Skeleton } from "../../../components/ui/skeleton-components";
import { LoaderFullScreen } from "../../../components/ui/loader-components";
import { Modal } from "../../../components/ui/Modal/Modal";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import { ROUTE } from "../../../shared/api/path";
import { useState } from "react";

export function ProductPage() {
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetProductQuery({ id });
  const [addToCart, { isLoading: sendLoading, isSuccess }] =
    useAddToCartMutation();

  const addToCardHandler = async (e) => {
    e.preventDefault();

    if (!data?._id) {
      console.error("Нет данных о товаре");
      return;
    }

    try {
      await addToCart({
        productId: data._id,
        quantity: 1,
      }).unwrap();
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  };

  const goToCart = () => {
    navigate(ROUTE.cart);
  };

  const continueShopping = () => {
    setIsOpen(false);
    navigate(ROUTE.catalog);
  };

  if (isLoading) {
    return <Skeleton width={100} height={400} className={s.skeleton} />;
  }

  if (!data) {
    return <div className={s.notFound}>Товар не найден {id}</div>;
  }

  return (
    <div className={s.product}>
      {sendLoading && <LoaderFullScreen size={50} />}

      {isSuccess && isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className={s.successModal}>
            <h3>Товар успешно добавлен в корзину!</h3>
            <div className={s.modalButtons}>
              <AppButton className={s.successBtn} onClick={goToCart}>
                Корзина
              </AppButton>
              <AppButton className={s.successBtn} onClick={continueShopping}>
                Продолжить покупки
              </AppButton>
            </div>
          </div>
        </Modal>
      )}

      <div className={s.banner}>
        <img src={data.image} alt={data.title} />
      </div>

      <div className={s.content}>
        <h1 className={s.title}>{data.title}</h1>

        <div className={s.overview}>
          <div className={s.descriptionContainer}>
            <p className={s.description}>Описание</p>
            <p className={s.description}>{data.description}</p>
          </div>

          <div className={s.info}>
            <span>Цена:</span>
            <span className={s.textPrice}>{data.price} ₽</span>
          </div>
          <div className={s.info}>
            <span>Кол-во товара:</span>
            <span className={s.textPrice}>{data.quantity}</span>
          </div>
        </div>

        <button className={s.btn} onClick={addToCardHandler}>
          Добавить в корзину
        </button>
      </div>

      {/* {isOpen && (
        <Modal onClose={setIsOpen}>
          <form onSubmit={submitHander} className={s.form}>
            <p className={s.applicationTitle}>Отправка заявки</p>

            <div className={s.container}>
              <Input
                type="text"
                placeholder={"Введите ФИО"}
                name="fullName"
                validate={errors.fullName}
                value={form.fullName}
                onChange={HanldeChange}
              />
              <Input
                type="tel"
                placeholder={"+996 ___ ___ ___"}
                name="phone"
                validate={errors.phone}
                value={form.phone}
                onChange={HanldeChange}
              />
              <div className={s.prodiverDatas}>
                {data.title}
                <span>{data.price} $</span>
              </div>
            </div>

            <AppButton type="submit">Отправить</AppButton>
          </form>
        </Modal>
      )} */}
    </div>
  );
}
