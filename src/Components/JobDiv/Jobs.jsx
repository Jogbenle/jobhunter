import React from 'react'
import {BiTimeFive} from 'react-icons/bi' 
import logo1 from '../../Assets/logo (1).jpg'
import logo2 from '../../Assets/logo (2).jpg'
import logo3 from '../../Assets/logo (3).jpg'
import logo4 from '../../Assets/logo (4).jpg'
import logo5 from '../../Assets/logo (5).jpg'
import logo6 from '../../Assets/logo (6).jpg'
import logo7 from '../../Assets/logo (7).jpg'
import logo8 from '../../Assets/logo (8).jpg'

const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '13Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Novac Linus Co.'
  },
  {
    id:4,
    image: logo4,
    title: 'Software Eng.',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Web Tech Agency.'
  },
  {
    id:5,
    image: logo5,
    title: 'UI/UX Designer',
    time: '13Hrs',
    location: 'London',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Govenment'
  },
  {
    id:6,
    image: logo6,
    title: 'Product Designer',
    time: '2 Days',
    location: 'Norway',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Wim. Co.'
  },
  {
    id:7,
    image: logo7,
    title: 'Researcher',
    time: '10Hrs',
    location: 'Austria',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Liquid Accessories.'
  },
  {
    id:8,
    image: logo8,
    title: 'Data Scientist',
    time: '13Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum, dolor sit amet consectetur adisoins elit. curriust loreaunsyd!',
    company: 'Name & Sene'
  },

]




const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
      {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return(
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColour group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>

              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>

              <div className='company flex items-center gap-2'>
                <img src={image} alt='Company Logo' className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                Apply Now
              </button>
           </div>
          )
        })
      }  

      </div>
    </div>
  )
}

export default Jobs