// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Exercise 1: Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
  return currentElement *2;
});

console.log(nums2);

  return (
    <>
       {/* // Exercise 1: Applying Array.prototype.map() */}
       <h1>exercise 1 solution:</h1>
       {nums.map((num, index) => 
      <li key={index}>
        {num * 2}
      </li>)}

    </>
  )
}

export default App
