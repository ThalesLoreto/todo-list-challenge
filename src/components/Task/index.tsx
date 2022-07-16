import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';

import checkImg from '../../assets/mark.svg'
import styles from './styles.module.css'

interface TaskProps {
  uuid: string;
  content: string;
  isCompleted: boolean;
  deleteComment: (uuid: string) => void
  onCheckTask: (uuid: string, isCompleted: boolean) => void
}

export function Task({ uuid, content, isCompleted, deleteComment, onCheckTask }: TaskProps) {
  const [completed, setCompleted] = useState(isCompleted)

  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    setCompleted(event.target.checked)
    onCheckTask(uuid, event.target.checked)
  }

  function onDeleteComment() {
    deleteComment(uuid)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskInfo}>
        <input
          type='checkbox'
          id={uuid}
          checked={completed}
          onChange={handleCheckTask}
        />
        <label className={styles.taskCompletedButton} htmlFor={uuid}>
          <img src={checkImg} alt='Check Icon' />
        </label>
      <span className={completed ? styles.contentDone : styles.content}>{content}</span>
      </div>
      <button
        type='submit'
        className={styles.deleteButton}
        onClick={onDeleteComment}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
