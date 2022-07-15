import { ClipboardText } from 'phosphor-react'

import { Task } from '../Task'

import styles from './styles.module.css'

export function TaskList() {
  const loop = ['1', '2', '3', '4']

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
        {true ?
          loop.map(task => (<Task id={task} key={task}/>))
          :
          <div className={styles.taskEmpty}>
            <ClipboardText size={56} className={styles.clipboard} />
            <p className={styles.h1}>Você ainda não tem tarefas cadastradas</p>
            <p >Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
      </div>
    </main>
  )
}
