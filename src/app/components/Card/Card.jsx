import Image from 'next/image.js'
import Stars from '../Stars/Stars.jsx'
import styled from './card.module.css'



function Card({ props ,background,hover,hoverImag,textColor}) {
  return (
    <div className={`card position-relative border-0 ${styled.card}  ${background}`}  >
      <Image src={props} className={`card-img-top position-absolute d-flex ${styled.img} ${hoverImag}` } alt="" />
      <div className={' card-body '+hover}>
        <p className={`card-text mt-4 ${styled.cardText} ${textColor}`}>"I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt."</p>
        <h5 className={`card-title ${styled.cardTitle}  ${textColor}`}>John Smith</h5>
        <p className={`${styled.cardFooter} ${textColor}`}>Travel Blogger</p>
        <Stars/>
      </div>
    </div>

  )
}



export default Card
