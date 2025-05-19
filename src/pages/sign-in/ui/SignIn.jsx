import { Input } from "../../../components/ui/Input/Input";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import s from "./SignIn.module.scss";
import { useState } from "react";
import { useLoginMutation } from "../api";
import TokenService from "../../../shared/model/TokenService";
import { useNavigate, Link } from "react-router-dom";
import { useValidation } from "../../../shared/hooks/useValidation";
import { LoaderFullScreen } from "../../../components/ui/loader-components/LoaderFullScreen/LoaderFullScreen";

export function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { errors, setValidationErrors } = useValidation();

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await login(form).unwrap();
      TokenService.setToken(access_token);
      navigate("/");
    } catch (error) {
      console.log("ERROR: ", error);
      if (Array.isArray(error.data?.message)) {
        setValidationErrors(error.data.message);
      }
    }
  };

  const handleInputChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {isLoading && <LoaderFullScreen size={50} />}

      <div className={s.container}>
        <p className={s.title}>Авторизация</p>
        <p className={s.description}>
          У ваc нет аккаунта?
          <Link to={"/sign-up"} className={s.link}>
            Создать аккаунт
          </Link>
        </p>
      </div>

      <Input
        placeholder="Адрес электронной почты"
        type="email"
        validate={errors.email}
        name="email"
        onChange={handleInputChange}
      />
      <Input
        placeholder="Пароль"
        type="password"
        validate={errors.password}
        name="password"
        onChange={handleInputChange}
      />

      <AppButton>Войти</AppButton>
    </form>
  );
}
