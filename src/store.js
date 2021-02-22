// persist with local storage
// create new
// update existing
// update position
// delete
import { writable } from 'svelte/store'

// function persistStore(initial, key) {
//   // check if store exists
//   // if not create it
//   // then subscribe to it
//   const prevStore = localStorage.getItem(key)
//   const initialValue = prevStore ? JSON.parse(prevStore) : initial
//   const store = writable(initialValue)

//   // const store = writable(initialValue, () => {
//   //   const unsubscribe = store.subscribe((state) => {
//   //     localStorage.setItem(key, JSON.stringify(state))
//   //   })
//   //   return subscribe()
//   // })
//   return store
// }

export const boards = writable([])
