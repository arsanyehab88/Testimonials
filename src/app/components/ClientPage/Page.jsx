import Card from "../Card/Card.jsx"
import andrea from "../../../../Assests/andrea.png"
import italo from "../../../../Assests/italo.png"
import vlad from "../../../../Assests/vlad.png"
import styled from "../ClientPage/client.module.css"

const props = [
  {
    image: andrea
  },
  {
    image: vlad,
    background: "Background-card",
    hover: "bodyHover",
    hoverImg: "hoverImage",
    textColor: "textColor",
  },
  {
    image: italo
  }
]



function Page() {
  return (
    <div className={styled.backgroundImage}>
      <div className={`d-flex justify-content-center align-items-center text-center flex-column w-100 ${styled.content} `}>
        <p className={styled.title}>
          Clients' Testimonials
        </p>
        <p className={styled.subTitle}>Unforgettable Travel Experiences</p>
      </div>
      <div className={` d-flex justify-content-center align-items-center text-center w-100 ${styled.main} `}>
        
          {props?.map((prop, i) => (
            <div className={`mx-md-2 ${styled.cardMargin}`} key={i}>
              <Card props={prop?.image} background={prop?.background} hoverImag={prop?.hoverImg} textColor={prop?.textColor} hover={prop?.hover} />
            </div>
          ))}

        
      

    </div>

    </div >
  )
}

export default Page