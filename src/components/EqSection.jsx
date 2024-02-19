import React from 'react'
import { FaSmileBeam,FaAngry,FaLaughBeam,FaSnapchatGhost   } from "react-icons/fa";
import { TbMoodConfuzedFilled } from "react-icons/tb";
import { ImShocked2 } from "react-icons/im";
import { BsEmojiExpressionlessFill,BsFillEmojiAstonishedFill  } from "react-icons/bs";


export default function EqSection() {
  return (
    <div className=' h-screen flex flex-col justify-start items-center bg-white'>
      <div className='flex justify-around items-start mt-[9%] gap-5 w-[80%]'>
        <h2 className='text-black font-spaceGrotesk text-3xl'>EQ beats IQ</h2>
        <div className='flex justify-start items-center gap-12'>
          <p className='w-[320px]text-black font-serif text-lg'>People with high emotional <br/> intelligence (EQ) live more fullfilled <br/> lives.
            They tend to be happier and <br/> have healthier relationships.
          </p>
          <p className='w-[300px] text-black font-serif text-lg'>They are more successful in their <br/> pursuits and make for inspiring <br/> leaders.
            According to science, they <br/>earn $29k a year.
          </p>
        </div>
      </div>
      <div className='mt-10 w-[95%] h-full'>
      <h1 className=' flex gap-5 font-sans text-4xl  ml-[10%] font-semibol'>Does this sound familiar... <span><FaSnapchatGhost size={40} color='gray' /></span></h1>
      <div className='mt-[4%] flex gap-5 overflow-x-hidden'>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaSmileBeam size={30} color='orange'  /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at repellendus vitae, autem ducimus quo adipisci sequi beatae voluptates asperiores accusantium! Quas, commodi quos ipsam iusto labore culpa qui placeat.</p></div>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaLaughBeam size={30} color='orange'  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione magnam debitis ipsam esse cumque est, non reprehenderit quaerat, odit expedita illum saepe? Perspiciatis fuga obcaecati repudiandae nesciunt iure delectus?</p></div>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaAngry size={30} color='orange' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eveniet, sint odio soluta, atque aspernatur ad dignissimos impedit aut quis illo accusantium enim? Maiores cum fugiat recusandae ipsum, optio error.</p></div>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><ImShocked2 size={30} color='orange' /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi, cum laborum repellat dolor maiores ut dicta exercitationem eos facilis obcaecati at quas in aliquam deleniti eum vel soluta maxime.</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><TbMoodConfuzedFilled size={30} color='orange'  /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum eligendi veritatis dicta cumque repudiandae, aperiam saepe ipsa facere consequuntur possimus nisi vitae, natus voluptate debitis neque quisquam vero consectetur.</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><BsFillEmojiAstonishedFill size={30} color='orange'   /><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum laborum officiis nobis sit quisquam. Nisi cumque error, debitis ex quod culpa architecto ipsum quae incidunt excepturi voluptate placeat tempora illum?</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><BsEmojiExpressionlessFill size={30} color='orange' /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse deleniti aliquam laboriosam nisi suscipit repudiandae inventore quo quasi veritatis ut dolore dolores repellendus ducimus id, unde necessitatibus? Voluptatem, officia?</p></div>
      </div>
      </div>
    </div>
  )
}
