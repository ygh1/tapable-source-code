import { SyncHook } from 'tapable'

const hook = new SyncHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
  console.log('fn1----->', name, age)
})

hook.tap('fn2', (name, age) => {
  console.log('fn2----->', name, age)
})

hook.call('tyrion', 18)