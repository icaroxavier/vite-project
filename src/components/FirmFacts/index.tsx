import styles from './index.module.scss'
import CloseIcon from '../../assets/icons/Close.svg'
import { FirmFactCard } from '../FirmFactCard'
import { Button } from '../Button'

export function FirmFacts() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={CloseIcon} alt="Close" className={styles.closeButton} />
      </div>
      
      <div className={styles.title}>
        <h2>Firm Facts</h2>
      </div>
      <div className={styles.content}>
        <FirmFactCard>
          <Button variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button>This is a one line button</Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
        <FirmFactCard variant='border'>
          <Button variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
        <FirmFactCard variant='border'>
          <Button disabled variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
        <FirmFactCard variant='border'>
          <Button variant='icon'>This is a two line button that terminates with...</Button>
        </FirmFactCard>
      </div>
    </div>
  )
}