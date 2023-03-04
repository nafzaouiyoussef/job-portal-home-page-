import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../assests/google.png'
import logo2 from '../../assests/facebook.png'
import logo3 from '../../assests/netflix.png'
import logo4 from '../../assests/shopee.png'
import logo5 from '../../assests/spotify.png'
import logo6 from '../../assests/starbucks.png'
import logo7 from '../../assests/tokopedia.png'
import logo8 from '../../assests/tut.png'
// for all the jobs we are going to use heigh order array method called Map...
// on this case we shall list all the jobs into an array called Data

const Data =[
  {
    id:1,
    image: logo1,
    title:'Web Developer',
    time:'Now',
    location:'Manchester',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
    company:'Google Co.',
},
{
  id:2,
  image: logo2,
  title:'Ui Designer',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'Facebook',
},
{
  id:3,
  image: logo3,
  title:'Senior Software Engineer',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'netflix',
},
{
  id:4,
  image: logo4,
  title:'IT Manager',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'shopee',
},
{
  id:5,
  image: logo5,
  title:'Solutions Architect',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'spotify',
},
{
  id:6,
  image: logo6,
  title:'Systems Security Manager',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'starbucks',
},
{
  id:7,
  image: logo7,
  title:'DevOps Engineer',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'tokopedia',
},
{
  id:8,
  image: logo8,
  title:'Data Scientist',
  time:'14Hrs',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ab possimus aliquid repellat voluptate qui commodi illo facere',
  company:'tut',
},
]


// This is single company , lets see how to map it...

const Jobs = () => {
  return (
   < div>
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center
    py-10'>
              
              
              
              {
                Data.map(({id,image,title,time,location,desc,company}) =>{
                   return (
                    // this will return a single job post based on the Id
                    <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded 
              [10px] hover:bg-blueColor shadow-lg shadoow-greyIsh-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor
                  group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                  </span>

                </span>
                <h6 className='text-[13px] text-[#959595] pt[20px] border-t-[2px] mt-[20PX]
                group-hover:text-white'>{location}</h6>
                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]'>{desc}

                </p>
                <div className='company flex items-center gap-2'>
                     <img src={image} alt="Company Logo" className='w-[10%]'></img>
                     <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-
                [14px] font-semibold tetx-textColor hover:bg-white group-hover/
                item:text-textColor group-hiver:text-white'>
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