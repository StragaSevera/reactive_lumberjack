import R from 'ramda'

// Пока это для меня магия, но я планирую прокачаться
// в функпроге и разобраться детально, как это работает =-)
const lensMatching = pred => toF => entities => {
  const index = R.findIndex(pred, entities)
  return R.map(entity => R.update(index, entity, entities),
    toF(entities[index]))
}

export {lensMatching}
