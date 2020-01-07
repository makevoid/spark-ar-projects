const Scene = require('Scene')
export const Diagnostics = require('Diagnostics')
const Time = require('Time')

const particles = Scene.root.find("emitter0")

// let sparse = false

let sparse1 = "low"
let sparse2 = "medium"
let sparse3 = "high"

let sparsity = [sparse1, sparse2, sparse3]

// TODO
// modulo to walk the array
// showcase the switch

const animateParticles = (sparsity) => {
  switch (sparsity) {
    case "low":
      particles.birthrate = 5
      break;
    case "medium":
      particles.birthrate = 10
      break;
    case "high":
      particles.birthrate = 15
      break;
    default:
      Diagnostics.log(`ERROR, sparsity not found`)
  }
}

let indexCurrent = 0

const alternate = () => {
  const index = indexCurrent % 3
  animateParticles(sparsity[index])
  // indexCurrent = indexCurrent + 1
  indexCurrent++
}

// const alternateBinary = () => {
//   if (sparse) {
//     particles.birthrate = 10
//     particles.speed = 0.2
//   } else {
//     particles.birthrate = 40
//     particles.speed = 0.12
//   }
//   sparse = !sparse
// }



Time.setInterval(alternate, 5000)
// Diagnostics.log(`OK ${Math.round(Math.random()*10000)}`)
