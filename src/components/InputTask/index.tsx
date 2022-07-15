import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

export function InputTask() {
  return (
    <div className={styles.taskInputArea}>
      <form>
        <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        />
      </form>
      <button type='submit'>Criar <PlusCircle size={16}/></button>
    </div>
  )
}