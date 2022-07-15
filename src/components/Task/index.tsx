import { Trash } from 'phosphor-react'

import checkImg from '../../assets/mark.svg'
import styles from './styles.module.css'

interface TaskProps {
  id: string;
}

export function Task({ id }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskInfo}>
        <input type='checkbox' id={id} />
        <label className={styles.taskCompletedButton} htmlFor={id}>
          <img src={checkImg} alt='Check Icon' />
        </label>
        <p>2 pacotes de macarrão</p>
      </div>
      <button type='submit' className={styles.deleteButton}>
        <Trash size={18} />
      </button>
    </div>
  )
}
