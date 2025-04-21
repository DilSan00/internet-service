import { Input } from "../../../components/ui/Input/Input";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import s from "./SignIn.module.scss";
import { useState } from "react";
import { useLoginMutation } from "../api";
import TokenService from "../../../shared/model/TokenService";
import { useNavigate, Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await login({ email, password }).unwrap();
      TokenService.setToken(access_token);
      navigate("/");
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.container}>
        <p className={s.title}>Авторизация</p>
        <p className={s.description}>
          У ваc нет аккаунта?{" "}
          <Link to={"/sign-up"} className={s.link}>
            Создать аккаунт
          </Link>
        </p>
      </div>

      <Input
        placeholder="Адрес электронной почты"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Пароль"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <AppButton>Войти</AppButton>
    </form>
  );
}
