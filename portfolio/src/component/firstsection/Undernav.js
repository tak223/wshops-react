import React from 'react'
// import './App.css';
import Typical from 'react-typical'
import { FaFacebook,FaGithub,FaGoogle,FaInstagram } from 'react-icons/fa';
export const Undernav = () => {
  return (
    <div>
<section className='main' >
<section className='intros1'>
<div className='icons'> 
<a href=""> <FaGoogle/></a>
<a href=""> <FaGithub/></a>
<a href=""> <FaFacebook/></a>
<a href=""> <FaFacebook/></a>
<a href=""> <FaInstagram/></a>
</div>
<h1>hello my name is takwa</h1>
<div className='spinner'>
<span className='pt'>
{''}
<h1><Typical
        steps={['pp', 1000, 'Hello world!', 1000]}
        loop={Infinity}
       
      /></h1>
</span>
</div>


<p> have an exitting project where you need som help ?</p>
<p>send me over a message </p>
<a href=""> Here</a>
<button>get resume here</button>
</section>
<section className='intros2'>
<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="mypic"  width={'200px'}/>
</section>

</section>

    </div>
  )
}
