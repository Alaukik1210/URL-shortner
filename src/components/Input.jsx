import {useState} from 'react'
import bg from '../assets/images/bg-shorten-desktop.svg'
import axios from 'axios'
const Input = () => {
  const [text,setText] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://smolurl.com/api/links`, text);
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching shortened URL:", error);
    }
  };

  
//https://ulvis.net/api.php?url=
  

  return (
    <div>
     
<div className='mt-32 h-[20vh]'>
    <img className='bg-[#3b3054] rounded-xl -z-10 w-[1220px] absolute' src={bg} alt="" />
    <div className='flex gap-20'>
    <input className=' top-3 w-[800px] rounded-2xl ml-12 h-[6vh] mt-20 pl-8 outline-none' type="text" placeholder='Shorten a link here..'
    value={text}
    onChange={(e) => setText(e.target.value)} />
    <button onClick={handleSubmit}  className="font-bold text-white h-[6vh] rounded-2xl w-[200px] pl-[8px] pr-[8px] bg-cyan mt-20">Shorten it </button>
    </div>
    
      <p>{shortenedUrl}</p>
   
</div>

    </div>
  )
}

export default Input
