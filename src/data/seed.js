export const COLUMNS = [
  { id: 'todo', title: 'Rejada' },
  { id: 'doing', title: 'Jarayonda' },
  { id: 'done', title: 'Bajarildi' },
]
export const PRIORITIES = { high: 'Yuqori', mid: "O'rta", low: 'Past' }
export const seed = [
  { id: 't1', title: 'Loyiha strukturasini tuzish', desc: 'Papkalar va komponentlar', status: 'done', priority: 'high', due: '', tags: ['setup'] },
  { id: 't2', title: 'Login sahifasini yozish', desc: 'Forma va validatsiya', status: 'doing', priority: 'mid', due: '', tags: ['ui'] },
  { id: 't3', title: 'API bilan ulash', desc: '', status: 'todo', priority: 'low', due: '', tags: ['backend'] },
]
