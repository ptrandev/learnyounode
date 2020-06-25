let sum = 0

(process.argv).forEach((value, index) => {
  if (index < 2) return

  sum += +value
})

console.log(sum)