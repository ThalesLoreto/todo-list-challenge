import { ClipboardText } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { InputTask } from '../InputTask';
import { Task } from '../Task'

import styles from './styles.module.css'

interface Task {
  uuid: string;
  content: string;
  isCompleted: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  const currentTasksDone = tasks.filter(task => {
      if (task.isCompleted === true) return task
  })

  const currentTotalTasks = tasks.length

  function addNewTask(newTaskContent: string) {
    const newTask: Task = {
      uuid: uuid(),
      content: newTaskContent,
      isCompleted: false
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

  function onCheckTask(uuid: string, isCompleted: boolean) {
    const newTaskList = tasks.map(task => {
      if (task.uuid === uuid) task.isCompleted = isCompleted
      return task
    })
    setTasks(newTaskList)
  }

  return (
    <main className={styles.wrapper}>
      <InputTask addNewTask={addNewTask} />
      <header className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.badge}>{currentTotalTasks}</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas
          <span className={styles.badge}>
            {currentTasksDone.length === 0 ?
              <span>0</span>
              :
              <span>{currentTasksDone.length} de {currentTotalTasks}</span>
            }
          </span>
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
              isCompleted={task.isCompleted}
              onCheckTask={onCheckTask}
              deleteComment={deleteComment}
            />
          ))
        }
      </div>
    </main>
  )
}
