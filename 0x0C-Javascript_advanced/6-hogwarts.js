const studentHogwarts = function () {
  let privateScore = 0
  let name = null

  const publicMethods = {}

  const changeScoreBy = function (points) {
    privateScore += points
  }

  publicMethods.setName = function (newName) {
    name = newName
  }

  publicMethods.rewardStudent = function () {
    changeScoreBy(1)
  }

  publicMethods.penalizeStudent = function () {
    changeScoreBy(-1)
  }

  publicMethods.getScore = function () {
    return name + ': ' + privateScore
  }

  return publicMethods
}

const harry = studentHogwarts()
harry.setName('Harry')
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.getScore()

const draco = studentHogwarts()
draco.setName('Draco')
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.getScore()
