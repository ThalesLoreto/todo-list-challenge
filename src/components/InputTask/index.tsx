import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './styles.module.css'

interface InputTaskProps {
  addNewTask: (text: string) => void
}

export function InputTask({ addNewTask }: InputTaskProps) {
  const [text, setText] = useState('')

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    addNewTask(text)
    setText('')
  }

  function handleTextInput(event: ChangeEvent<HTMLInputElement>) {
    const newText = event.target.value
    setText(newText)
  }

  const isNewTaskEmpty = text.length === 0

  return (
    <div className={styles.taskInputArea}>
      <form onSubmit={handleSubmitForm}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleTextInput}
          value={text}
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </div>
  )
}
