import React, { useState } from 'react'

const Random = () => {

    const [gif,setGif] = useState('');

    function clickHandler(){

    }

  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[20px]'>
      <h1 className='mt-[20px] text-2xl font-bold underline uppercase'>A Random Gif</h1>
      <img src={gif} alt='random-gif' width="450px" />
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

export default Random
