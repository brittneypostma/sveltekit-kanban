import {persistStore} from './persistStore'

const defaultColumns = [
  {
    id: 1,
    title: 'Todo',
    tasks: [],
  },
  {
    id: 2,
    title: 'In Progress',
    tasks: [],
  },
  {
    id: 3,
    title: 'Complete',
    tasks: [],
  },
]

export const store = persistStore('store', defaultColumns)

function add(newData) {
  $store = [newData, ...$store]
  return store
}


// CRUD
//create
//read
//update
//delete

// export function move(event) {

// }

// export function add(event) {
//   const { column, card } = event.detail
  
//   if (column) {
//     store.update(prev => {
//       return [column, ...prev]
//     })
//   }
//   if (card) {
//     store.update(prev => {
//       return [card, ...prev]
//     })
//   } 
// }

// export function update(event) {
//   const { column, card } = event.detail

//   if (column) {
//     store.update(prev => {
//       prev.filter(cols => {
//         cols.id !== 
//       })
//     })
//   }
//   if (card) {
//     store.update(prev => {
//       return [card, ...prev]
//     })
//   } 
// }

// export function remove(event) {
//   store.update((prev => prev.filter(cols => cols.id !== id)))
// }