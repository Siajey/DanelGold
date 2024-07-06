'use client'

import React, { createContext, useState } from 'react'

// Create a context with default value as null or an empty object.
const MyContext = createContext(null)

const MyProvider = ({ children }) => {
  // Dark and light mode toggles controllers using state and functionality
  const [darkMode, setDarkMode] = useState(true)

  //dark and light mode toggles controllers functionality
  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  const contextValues = {
    darkMode,
    setDarkMode,
    toggleTheme,
  }

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  )
}

export { MyContext, MyProvider }

