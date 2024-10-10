import styles from './index.module.scss'
import Search from '../../assets/icons/Search.svg'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'icon'
}

export function Button({ variant = 'default', children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.container} data-variant={variant}>
      {variant === 'icon' && <img src={Search} alt="Icon" />}
      {children}
    </button>
  )
}