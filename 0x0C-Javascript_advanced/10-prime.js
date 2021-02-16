function countPrimeNumbers (target) {
  if (target && Number.isInteger(target) && target > 2) {
    const record = []
    const primes = [2]
    const max = Math.sqrt(target)

    for (let number = 0; number < target; number++) {
      record.push(1)
    }

    for (let prime = 3; prime <= max; prime += 2) {
      if (record[prime]) {
        for (let multiple = prime * prime; multiple < target; multiple += prime * 2) {
          record[multiple] = 0
        }
      }
    }

    for (let sievedNumber = 3; sievedNumber < target; sievedNumber += 2) {
      if (record[sievedNumber]) {
        primes.push(sievedNumber)
      }
    }

    return primes
  }
  return 'Please enter an integer greater than two'
}
const t0 = window.performance.now()
for (let i = 1; i <= 100; i++) {
  countPrimeNumbers(100)
}
const t1 = window.performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`)
