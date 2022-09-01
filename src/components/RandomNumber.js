import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'
import App from '../App'

function RandomNumber(props) {
  const { maxNum } = props
  // дуструктуризация для того чтобы использовать в props наша значение
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
  // спомощью деструтуризации присваиваем два свойста: 1 будет равно 100
  // второе(функция) будет менять первое при нажатии кнопки
  //вставляем нашу фйункцию в деструтуризираванный useState как свойство

  // добавляем props чтобы передать свойство maxNum функции RandomNumber
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum))
  }
  // создаем функцию для нашего onClick свойства которая при вызове изменяет число

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
