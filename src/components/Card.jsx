import { PRIORITIES } from '../data/seed'
export default function Card({ task, onEdit, onDelete }) {
  const overdue = task.due && task.status !== 'done' && task.due < new Date().toISOString().slice(0, 10)
  return (
    <article
      className={`card p-${task.priority}`}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text/plain', task.id)}
    >
      <h3>{task.title}</h3>
      {task.desc && <p>{task.desc}</p>}
      <div className="meta">
        <span className="badge">{PRIORITIES[task.priority]}</span>
        {task.due && <span className={overdue ? 'due late' : 'due'}>{task.due}</span>}
        {task.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
      </div>
      <div className="actions">
        <button onClick={() => onEdit(task)}>Tahrirlash</button>
        <button onClick={() => onDelete(task.id)}>O'chirish</button>
      </div>
    </article>
  )
}
