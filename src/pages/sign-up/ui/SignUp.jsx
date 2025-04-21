import { Input } from "../../../components/ui/Input/Input";
import { AppButton } from "../../../components/ui/AppButton/AppButton";
import s from "./SignUp.module.scss";
import { useState } from "react";
import TokenService from "../../../shared/model/TokenService";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../api";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await register({
        username,
        email,
        password,
      }).unwrap();
      TokenService.setToken(access_token);
      navigate("/");
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.container}>
        <p className={s.title}>Зарегистрироваться</p>
        <p className={s.description}>
          У вас уже есть аккаунт?{" "}
          <Link to={"/sign-in"} className={s.link}>
            Войти
          </Link>
        </p>
      </div>

      <Input
        placeholder="Имя пользователя"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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

      <AppButton>Создать</AppButton>
    </form>
  );
}
