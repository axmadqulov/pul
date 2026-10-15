import { useState } from 'react'
import { COLUMNS, PRIORITIES } from '../data/seed'
export default function TaskModal({ task, onSave, onClose }) {
  const [f, setF] = useState({ ...task, tags: task.tags.join(', ') })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = () => {
    if (!f.title.trim()) return
    onSave({ ...f, title: f.title.trim(), tags: f.tags.split(',').map((s) => s.trim()).filter(Boolean) })
  }
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h2>{task.id ? 'Vazifani tahrirlash' : 'Yangi vazifa'}</h2>
        <label>Sarlavha<input autoFocus value={f.title} onChange={set('title')} /></label>
        <label>Tavsif<textarea rows="3" value={f.desc} onChange={set('desc')} /></label>
        <div className="row">
          <label>Holat
            <select value={f.status} onChange={set('status')}>
              {COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </label>
          <label>Muhimlik
            <select value={f.priority} onChange={set('priority')}>
              {Object.entries(PRIORITIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </label>
          <label>Muddat<input type="date" value={f.due} onChange={set('due')} /></label>
        </div>
        <label>Teglar (vergul bilan)<input value={f.tags} onChange={set('tags')} /></label>
        <div className="row end">
          <button onClick={onClose}>Bekor qilish</button>
          <button className="primary" onClick={submit}>Saqlash</button>
        </div>
      </div>
    </div>
  )
}
