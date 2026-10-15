import { useMemo, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import { COLUMNS, seed } from './data/seed'
import Column from './components/Column'
import TaskModal from './components/TaskModal'
import Toolbar from './components/Toolbar'

const blank = (status) => ({ id: '', title: '', desc: '', status, priority: 'mid', due: '', tags: [] })

export default function App() {
  const [tasks, setTasks] = useLocalStorage('taskboard.tasks', seed)
  const [query, setQuery] = useState('')
  const [prio, setPrio] = useState('all')
  const [editing, setEditing] = useState(null)

  const visible = useMemo(() => {
    const q = query.toLowerCase()
    return tasks.filter((t) =>
      (prio === 'all' || t.priority === prio) &&
      (!q || t.title.toLowerCase().includes(q) || t.tags.some((g) => g.toLowerCase().includes(q))))
  }, [tasks, query, prio])

  const save = (t) => {
    setTasks((all) => t.id ? all.map((x) => (x.id === t.id ? t : x)) : [...all, { ...t, id: crypto.randomUUID() }])
    setEditing(null)
  }
  const remove = (id) => setTasks((all) => all.filter((t) => t.id !== id))
  const move = (id, status) => setTasks((all) => all.map((t) => (t.id === id ? { ...t, status } : t)))
  const exportJson = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' }))
    Object.assign(document.createElement('a'), { href: url, download: 'taskboard.json' }).click()
    URL.revokeObjectURL(url)
  }
  const done = tasks.filter((t) => t.status === 'done').length
  const pct = tasks.length ? Math.round((done / tasks.length) * 100) : 0

  return (
    <main>
      <header className="top">
        <h1>Taskboard</h1>
        <div className="progress" title={`${pct}% bajarilgan`}>
          <div style={{ width: `${pct}%` }} />
          <span>{done}/{tasks.length} bajarildi</span>
        </div>
      </header>
      <Toolbar query={query} setQuery={setQuery} prio={prio} setPrio={setPrio}
        onNew={() => setEditing(blank('todo'))} onExport={exportJson}
        onReset={() => window.confirm("Barcha vazifalar o'chirilsinmi?") && setTasks([])} />
      <div className="board">
        {COLUMNS.map((c) => (
          <Column key={c.id} col={c} tasks={visible.filter((t) => t.status === c.id)}
            onDropTask={move} onEdit={setEditing} onDelete={remove} onAdd={(s) => setEditing(blank(s))} />
        ))}
      </div>
      {editing && <TaskModal key={editing.id || 'new'} task={editing} onSave={save} onClose={() => setEditing(null)} />}
    </main>
  )
}
