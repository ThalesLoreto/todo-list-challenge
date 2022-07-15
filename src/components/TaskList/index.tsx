import { ClipboardText } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { InputTask } from '../InputTask';
import { Task } from '../Task'

import styles from './styles.module.css'

interface Task {
  uuid: string;
  content: string;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(newTaskContent: string) {
    const newTask: Task = {
      uuid: uuid(),
      content: newTaskContent
    }
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList)
  }

  function deleteComment(uuid: string) {
    const newTaskList = tasks.filter(task => {
      return task.uuid !== uuid
    })
    setTasks(newTaskList)
  }

  return (
    <main className={styles.wrapper}>
      <InputTask addNewTask={addNewTask} />
      <header className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas <span className={styles.badge}>0</span>
        </div>
      </header>

      <div className={styles.taskShow}>
        {tasks.length === 0 ?
          <div className={styles.taskEmpty}>
            <ClipboardText size={56} className={styles.clipboard} />
            <p className={styles.h1}>Você ainda não tem tarefas cadastradas</p>
            <p >Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          tasks.map(task => (
            <Task
              key={task.uuid}
              uuid={task.uuid}
              content={task.content}
              deleteComment={deleteComment}
            />
          ))
        }
      </div>
    </main>
  )
}
