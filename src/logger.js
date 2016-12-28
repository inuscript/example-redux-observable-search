
const logs = []
const listener = []

export const addListener = (fn) => {
  listener.push(fn)
}

export const push = (log) => {
  logs.push(new Date() + log)
  listener.forEach( fn => fn(logs) )
}