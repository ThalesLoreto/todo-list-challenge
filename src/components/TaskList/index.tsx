import { ClipboardText } from 'phosphor-react'

import styles from './styles.module.css'

export function TaskList() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.badge}>0</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas <span className={styles.badge}>0</span>
        </div>
      </header>

      <div className={styles.taskShow}>
        <div className={styles.taskEmpty}>
          <ClipboardText size={56} className={styles.clipboard} />
          <p className={styles.h1}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </main>
  )
}
