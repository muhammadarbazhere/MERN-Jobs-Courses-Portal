import React from 'react'
import Ques from '../E-Learning/Question/Ques'
import MixJobInternships from '../../Components/JobsInternships/MixJobInternships';
import RemoteJobs1 from './RemoteJobs1';

function RemoteJobs() {

  return (
    <div className='bg-blue-100'>

<RemoteJobs1/>
<div className='mx-2 md:mx-24 pt-8 sm:pt-24'>
<MixJobInternships/>
</div>

    <Ques/>
    </div>
  )
}

export default RemoteJobs
