import { writable } from 'svelte/store'

// export function persistStore(key, initial) {
//   const persist = localStorage.getItem(key)
//   const data = persist ? JSON.parse(persist) : initial

//   const store = writable(data)
//   store.subscribe(value => {
//     value ? localStorage.setItem('store', JSON.stringify(value)) : localStorage.removeItem('store')
//   })
// }

export const persistStore = (key, initial) => {
  const persist = localStorage.getItem(key)
  const data = persist ? JSON.parse(persist) : initial
  const { subscribe, set, update } = writable(data)
  return {
    subscribe,
    update,
    set: (value) => {
      localStorage.setItem(key, JSON.stringify(value))
      return set(value)
    },    
  }
}