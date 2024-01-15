import React from 'react'
import { FaStar } from 'react-icons/fa'
import pro1 from './../asset/pro1.png'
import pro2 from './../asset/pro2.png'
import pro3 from './../asset/pro3.png'
function Commentaire() {
  const cards = [
    {img:pro1,nom:"Ludovic",prenom:"Business Developer",description:"he editor is very easy to use. The models presented range from the most simple and refined to the most complete and creative. I recommend for all those who do not necessarily have the time to make a CV from A to Z!"},
    {img:pro2,nom:"Noémie",prenom:"Communication Manager",description:"Very powerful platform to make CVs yourself! Responsive team, they do everything they can to support us quickly if needed. I recommend CVDesignR 100%."},
    {img:pro3,nom:"Salma",prenom:"Head of Sales",description:"I found this site very easy to use and very intuitive, I was able to easily build my CV according to my desires and my objectives!"}
  ]
  return (
    <div className='bg-slate-50 my-12'>
        <h2 className='text-center text-3xl font-bold'>What do <span className='text-blue-500'>users</span> think?</h2>
        <h5 className='text-center  font-bold'>They gave us their opinion!</h5>
      <div className='flex justify-center center my-12 mr-4'>
        {
          cards.map((card,index)=>(
            <div key={index} className="w-80 p-5 bg-slate-50 rounded-md " >
                <div className="flex">
                  <img src={card.img} alt="pro1" className='size-20 rounded-full mr-2	border-4 border-pink-300' />
                    <div>
                    <h5>{card.nom}</h5>
                      <h5>{card.prenom}</h5>
                      <div className="flex"><FaStar className='text-blue-500'/><FaStar className='text-blue-500'/><FaStar className='text-blue-500'/><FaStar className='text-blue-500'/><FaStar className='text-blue-500'/></div>
                      </div>
                </div>
                <p className='p-2 text-justify mt-4 bg-white rounded-md'>{card.description}</p>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center items-center">
        <button className='bg-pink-500 -mt-5 text-xl font-extrabold text-white py-4 px-8 rounded'>
          Create My CV
        </button>
      </div><h5 className='text-center text-sm'>Free sign up</h5>

      <div className='w-full h-14 bg-pink-300 mt-12'></div>
  
    </div>
  )
}

export default Commentaire