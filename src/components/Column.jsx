import { useState } from 'react'
import Card from './Card'
export default function Column({ col, tasks, onDropTask, onEdit, onDelete, onAdd }) {
  const [over, setOver] = useState(false)
  return (
    <section
      className={over ? 'column over' : 'column'}
      onDragOver={(e) => { e.preventDefault(); setOver(true) }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { setOver(false); onDropTask(e.dataTransfer.getData('text/plain'), col.id) }}
    >
      <header>
        <h2>{col.title} <span className="count">{tasks.length}</span></h2>
        <button className="icon" aria-label={`${col.title}ga vazifa qo'shish`} onClick={() => onAdd(col.id)}>+</button>
      </header>
      {tasks.length === 0 && <p className="empty">Bu yerga vazifani sudrab keling</p>}
      {tasks.map((t) => <Card key={t.id} task={t} onEdit={onEdit} onDelete={onDelete} />)}
    </section>
  )
}
