import { useParams } from "react-router-dom";
import { useGetProductQuery, useSendApplicationMutation } from "../api";
import s from "./ProductPage.module.scss";
import { useState } from "react";
import { Skeleton } from "../../../components/ui/skeleton-components";
import { Modal } from "../../../components/ui/Modal/Modal";
import { Input } from "../../../components/ui/Input";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import { useValidation } from "../../../shared/hooks/useValidation";
import { LoaderFullScreen } from "../../../components/ui/loader-components";

export function ProductPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
  });

  const { id } = useParams();

  const { data, isLoading } = useGetProductQuery({ id });
  const [sendApplication, { isLoading: sendLoading }] =
    useSendApplicationMutation();
  const { errors, setValidationErrors } = useValidation();

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const HanldeChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitHander = async (e) => {
    e.preventDefault();
    try {
      await sendApplication({
        ...form,
        providerName: data.providerName,
        type: data.type,
        price: data.price,
      }).unwrap();
      setForm({
        fullName: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.data?.message)) {
        setValidationErrors(error.data.message);
      }
    }
  };

  if (isLoading) {
    return <Skeleton width={100} height={400} className={s.skeleton} />;
  }

  if (!data) {
    return <div className={s.notFound}>Товар не найден {id}</div>; // можно сделать красивый фолбэк
  }

  return (
    <div className={s.product}>
      {sendLoading && <LoaderFullScreen size={50} />}

      <div className={s.banner}>
        <img src={data.image} alt={data.title} />
      </div>

      <div className={s.content}>
        <h1 className={s.title}>{data.title}</h1>

        <div className={s.overview}>
          <div className={s.descriptionContainer}>
            <p className={s.description}>Описания</p>
            <p className={s.description}>{data.description}</p>
          </div>

          <div className={s.info}>
            <span>Цена:</span>
            <span className={s.textPrice}>{data.price} $</span>
          </div>
          <div className={s.info}>
            <span>Кол-во товара:</span>
            <span className={s.textPrice}>{data.quantity}</span>
          </div>
        </div>

        <button className={s.btn} onClick={openModalHandler}>
          Подать заявку
        </button>
      </div>

      {isOpen && (
        <Modal onClose={setIsOpen}>
          <form onSubmit={SubmitHander} className={s.form}>
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
      )}
    </div>
  );
}
