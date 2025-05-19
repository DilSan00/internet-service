import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetCartQuery,
  useCreateApplicationMutation,
  useClearCartMutation,
} from "../api";
import s from "./CartPage.module.scss";

export function CartPage() {
  const navigate = useNavigate();
  const { data: cartData, isLoading, error, refetch } = useGetCartQuery();
  const [createApplication] = useCreateApplicationMutation();
  const [clearCart] = useClearCartMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearCart = async () => {
    try {
      await clearCart().unwrap();
      refetch();
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error);
    }
  };

  const handleBuy = async () => {
    try {
      await createApplication({
        fullName: formData.fullName,
        phone: formData.phone,
        title: cartData.items.map((item) => item.productId.title).join(", "),
        price: cartData.totalPrice,
      }).unwrap();
      await clearCart().unwrap();
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Ошибка при создании заявки:", error);
    }
  };

  if (isLoading) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  if (error) {
    return (
      <div className={s.error}>
        <h2>Ошибка при загрузке корзины</h2>
        <p>Пожалуйста, попробуйте позже или войдите в систему</p>
        <button
          onClick={() => navigate("/sign-in")}
          className={s.continueShopping}
        >
          Войти
        </button>
      </div>
    );
  }

  if (!cartData?.items?.length) {
    return (
      <div className={s.emptyCart}>
        <h2>Корзина пуста</h2>
        <button
          onClick={() => navigate("/catalog")}
          className={s.continueShopping}
        >
          Перейти в каталог
        </button>
      </div>
    );
  }

  const totalAmount = cartData.items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  const totalQuantity = cartData.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className={s.cartPage}>
      <div className={s.container}>
        <div className={s.cartContent}>
          <div className={s.productsList}>
            <div className={s.cartHeader}>
              <h2>Корзина</h2>
              <button onClick={handleClearCart} className={s.clearCartButton}>
                Очистить корзину
              </button>
            </div>
            {cartData.items.map((item) => (
              <div key={item._id} className={s.productItem}>
                <img
                  src={item.productId.image}
                  alt={item.productId.title}
                  className={s.productImage}
                />
                <div className={s.productInfo}>
                  <h3>{item.productId.title}</h3>
                  <p className={s.productPrice}>{item.productId.price} ₽</p>
                  <div className={s.quantity}>
                    <span>Количество: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={s.orderSummary}>
            <h3>Оформление заказа</h3>
            <div className={s.formGroup}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="ФИО"
                className={s.input}
              />
            </div>
            <div className={s.formGroup}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Телефон"
                className={s.input}
              />
            </div>
            <div className={s.summaryItem}>
              <span>Количество товаров:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className={s.summaryItem}>
              <span>Сумма заказа:</span>
              <span>{totalAmount} ₽</span>
            </div>
            <button
              onClick={handleBuy}
              className={s.buyButton}
              disabled={isSuccess}
            >
              {isSuccess ? "Заказ оформлен!" : "Оформить заказ"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
