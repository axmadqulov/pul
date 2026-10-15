import { PRIORITIES } from '../data/seed'
export default function Toolbar({ query, setQuery, prio, setPrio, onNew, onExport, onReset }) {
  return (
    <div className="toolbar">
      <input type="search" placeholder="Vazifa yoki teg qidirish..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <select value={prio} onChange={(e) => setPrio(e.target.value)}>
        <option value="all">Barcha muhimlik</option>
        {Object.entries(PRIORITIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
      </select>
      <button onClick={onExport}>JSON yuklab olish</button>
      <button onClick={onReset}>Tozalash</button>
      <button className="primary" onClick={onNew}>Yangi vazifa</button>
    </div>
  )
}
