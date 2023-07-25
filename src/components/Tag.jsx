import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {


    const [tag,setTag] = useState('cars');

    const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
      fetchData(tag);
    }

    function changeHandler(event){
      setTag(event.target.value);
    }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[20px]'>
      <h1 className='mt-[20px] text-2xl font-bold underline uppercase'>Custom {tag} Gif</h1>

      {
        loading ? (<Spinner/>):(<img src={gif} alt='random-gif' width="450px" />)
      }
      
        <input 
        className='w-10/12 text-lg py-2 rounded-lg '
        onChange={changeHandler}
        value={tag}
        />
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
            Generate {tag} GIF
        </button>
    </div>
  )
}

export default Tag
