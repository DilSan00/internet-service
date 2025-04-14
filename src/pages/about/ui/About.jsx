import s from "./About.module.scss";
import { LinkItem } from "../../../shared/ui";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { IoLogoBehance } from "react-icons/io5";

export function About() {
  return (
    <div className={s.about}>
      <img
        className={s.titleImg}
        src="https://disenowebakus.net/imagenes/articulos/internet.jpg"
        alt="internetImg"
      />

      <h1 className={s.title}>A Little Bit About Us</h1>
      <p className={s.text}>
        We’re a team of developers, designers, and digital problem-solvers who
        are passionate about creating services that actually work. No fluff, no
        unnecessary features — just clean design, solid code, and a focus on
        what users really need. We won’t promise you miracles — but we will
        deliver something reliable, thoughtful, and built with care.
      </p>

      <p className={s.linkText}>Links</p>

      <div className={s.linkList}>
        <LinkItem
          title="Github"
          link="https://github.com/"
          icon={<FaGithub size={40} />}
        />
        <LinkItem
          title="LinkedIn"
          link="https://www.linkedin.com/"
          icon={<TbBrandLinkedinFilled size={40} />}
        />
        <LinkItem
          title="Twitter"
          link="https://twitter.com/"
          icon={<AiFillTwitterCircle size={40} />}
        />
        <LinkItem
          title="Instagram"
          link="https://www.instagram.com/"
          icon={<FaInstagram size={40} />}
        />
        <LinkItem
          title="Dribbble"
          link="https://dribbble.com/"
          icon={<AiFillDribbbleCircle size={40} />}
        />
        <LinkItem
          title="Behance"
          link="https://www.behance.net/"
          icon={<IoLogoBehance size={40} />}
        />
      </div>
    </div>
  );
}
