import React from 'react'
import Course from './Courses/Course'
import VideoSec from './Class/VideoSec'
import Master from './Master'
import Mentor from './Mentors/Mentor'
import Ques from './Question/Ques'

import CoursesList from '../../Components/CoursesFiles/CoursesList'


function learning() {
  return (
    <div className='bg-blue-100 overflow-hidden'>



{/* <Course/> */}
<CoursesList/>

<VideoSec/>

<Master/>
<Mentor/>
<Ques/>



    </div>
  )
}

export default learning