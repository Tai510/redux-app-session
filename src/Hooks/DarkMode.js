import { useState } from 'react'

export const DarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = JSON.parse(localStorage.getItem(key))
    return item ? item : initialValue
  })

  const setValue = () => {
    setStoredValue(!storedValue)
    localStorage.setItem(key, JSON.stringify(!storedValue))
  }

  return [storedValue, setValue]
}