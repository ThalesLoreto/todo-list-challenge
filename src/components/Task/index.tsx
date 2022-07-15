import { Trash } from 'phosphor-react'

import checkImg from '../../assets/mark.svg'
import styles from './styles.module.css'

interface TaskProps {
  uuid: string;
  content: string;
}

export function Task({ uuid, content }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskInfo}>
        <input type='checkbox' id={uuid} />
        <label className={styles.taskCompletedButton} htmlFor={uuid}>
          <img src={checkImg} alt='Check Icon' />
        </label>
      <p>{content}</p>
      </div>
      <button type='submit' className={styles.deleteButton}>
        <Trash size={18} />
      </button>
    </div>
  )
}
