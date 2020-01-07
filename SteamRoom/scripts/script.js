const Scene = require('Scene')
export const Diagnostics = require('Diagnostics')
const Time = require('Time')

const particles = Scene.root.find("emitter0")

let sparse1 = "low"
let sparse2 = "medium"
let sparse3 = "high"

let sparsity = [sparse1, sparse2, sparse3]

const animateParticles = (sparsity) => {
  switch (sparsity) {
    case "low":
      particles.birthrate = 5
      particles.angularVelocity = 0.0001
      break;
    case "medium":
      particles.birthrate = 15
      particles.angularVelocity = 0.0002
      break;
    case "high":
      particles.birthrate = 40
      particles.angularVelocity = 0.0003
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

// let sparse = false
// const alternateBinary = () => {
//   if (sparse) {
//     particles.birthrate = 10
//   } else {
//     particles.birthrate = 40
//   }
//   sparse = !sparse
// }

Time.setInterval(alternate, 5000)
Diagnostics.log(`OK ${Math.round(Math.random()*10000)}`)
