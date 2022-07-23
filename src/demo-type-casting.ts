let x1: number
let s1: string
let b1: boolean
let d1: Date
let a1: string[]
let n1: any // not a good idea

// b1 = "HEY HEY HEY" // does not pass
b1 = "HEY HEY HEY" as any // not a good idea
b1 = true

n1 = new Date()