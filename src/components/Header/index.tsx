import { InputTask } from '../InputTask'

import todoLogo from '../../assets/todo_logo.svg'
import styles from './styles.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      <aside className={styles.side}>
        <img src={todoLogo} alt='Logo' />
        <InputTask />
      </aside>
    </header>
  )
}
