import styles from './Header.module.css'
import todoLogo from '../assets/todo_logo.svg'
import { PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <aside className={styles.side}>
        <img src={todoLogo} alt='Logo' />
        <div className={styles.taskInputArea}>
          <form>
            <input
              type='text'
              placeholder='Adicione uma nova tarefa'
            />
          </form>
          <button type='submit'>Criar <PlusCircle size={16}/></button>
        </div>
      </aside>
    </header>
  )
}
