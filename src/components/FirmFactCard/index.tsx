import styles from './index.module.scss'

type FirmFactCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'border'
}

export function FirmFactCard({ variant = 'default', children, ...props }: FirmFactCardProps) {
  return (
    <div {...props} className={styles.container} data-variant={variant}>
      {children}
    </div>
  )
}