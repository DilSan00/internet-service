import { Input } from "../../../components/ui/Input/Input";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import s from "./SignUp.module.scss";
import { useState } from "react";
import TokenService from "../../../shared/model/TokenService";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../api";
import { useValidation } from "../../../shared/hooks/useValidation";
import { LoaderFullScreen } from "../../../components/ui/loader-components/LoaderFullScreen/LoaderFullScreen";

export function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { errors, setValidationErrors } = useValidation();

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await register(form).unwrap();
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
        <p className={s.title}>Зарегистрироваться</p>
        <p className={s.description}>
          У вас уже есть аккаунт?
          <Link to={"/sign-in"} className={s.link}>
            Войти
          </Link>
        </p>
      </div>

      <Input
        placeholder="Имя пользователя"
        type="text"
        validate={errors.username}
        name={"username"}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Адрес электронной почты"
        type="email"
        validate={errors.email}
        name={"email"}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Пароль"
        type="password"
        validate={errors.password}
        name={"password"}
        onChange={handleInputChange}
      />

      <AppButton className={s.btn}>Создать</AppButton>
    </form>
  );
}
