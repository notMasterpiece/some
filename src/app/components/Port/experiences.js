import React from 'react';


const Experiences = ({el}) => {
  return (
    <ul className='experiences-item'>
      <li><h5>{el.title}</h5></li>
      <li><a href={el.companyURL}>{el.company}</a></li>
      <li>{el.period}</li>
      <li><p>{el.details}</p></li>
    </ul>
  )
};


export default Experiences;