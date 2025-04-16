import s from './AppButton.module.scss'
import clsx from 'clsx'

export const AppButton = ({title, onClick, className}) => {
  return <button onClick={onClick} className={clsx(s.btn, className)}>{title}</button>
}