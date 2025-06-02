import { useState } from "react";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import { Input } from "../../../components/ui/Input/Input";
import { useAddInternetMutation } from "../api";
import s from "./CreateProduct.module.scss";
import { useValidation } from "../../../shared/hooks/useValidation";
import { LoaderFullScreen } from "../../../components/ui/loader-components";
import { Modal } from "../../../components/ui/Modal/Modal";

const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Уменьшаем качество JPEG до 0.7
        const compressedImage = canvas.toDataURL("image/jpeg", 0.7);
        resolve(compressedImage);
      };
    };
  });
};

export function CreateProduct() {
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({
    image: null,
    title: "",
    description: "",
    price: "",
    quantity: "",
  });

  const { errors, setValidationErrors } = useValidation();

  const [addInternet, { isLoading, isSuccess }] = useAddInternetMutation();

  const handlerReset = () => {
    setForm({
      image: null,
      title: "",
      description: "",
      price: "",
      quantity: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageBase64 = null;
      if (form.image) {
        imageBase64 = await compressImage(form.image);
      }

      const data = {
        image: imageBase64,
        title: form.title,
        description: form.description,
        price: Number(form.price),
        quantity: Number(form.quantity),
      };

      await addInternet(data).unwrap();
      handlerReset();
    } catch (error) {
      console.log("ERROR: ", error);
      if (Array.isArray(error.data?.message)) {
        setValidationErrors(error.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h2 className={s.title}>Добавить интернет провайдер</h2>

      {isLoading && <LoaderFullScreen size={50} />}
      {isSuccess && isOpen && (
        <Modal onClose={setIsOpen}>Продукт успешно добавлен</Modal>
      )}

      <div className={s.inputContainer}>
        <Input
          type="file"
          accept="image/*"
          placeholder="Поставить картинку продукта"
          validate={errors.image}
          name="image"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Введите названия продукта"
          value={form.title}
          validate={errors.title}
          name="title"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Введите кол-во продукта в складе"
          value={form.quantity}
          validate={errors.quantity}
          name="quantity"
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Введите цену продукта"
          value={form.price}
          validate={errors.price}
          name="price"
          onChange={handleChange}
        />
        <Input
          placeholder="Введите описания продукта"
          textarea={true}
          value={form.description}
          validate={errors.description}
          name="description"
          onChange={handleChange}
        />
      </div>

      <div className={s.btnContainer}>
        <AppButton type="button" onClick={handlerReset} className={s.resetBtn}>
          Сбросить
        </AppButton>
        <AppButton type="submit">Сохранить</AppButton>
      </div>
    </form>
  );
}
