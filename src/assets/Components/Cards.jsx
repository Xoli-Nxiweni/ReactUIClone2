import './Cards.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiBasketballLine } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

const Cards = () => {
  return (
    <div className='wrapperCards'>
      <div className='Card'>
        <div className='shape shape1'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img src="" alt="" />
            <div className="name">
              <h4>Zain Sajid</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Remote</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='Card'>
        <div className='shape shape2'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img src="logo.png" alt="" />
            <div className="name">
              <h4>Moty Weiss</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Narowal</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='Card'>
        <div className='shape shape3'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img src="" alt="" />
            <div className="name">
              <h4>Alena Aulova</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Ukraine</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='outcast'>
          <div className="socialIcons">
            <FaFacebookF/>
            <FaInstagram />
            <FiTwitter />
            <TiSocialLinkedin />
          </div>
          <div className="anotherContainer">
            <RiBasketballLine />
            <h5>Follow us</h5>
          </div>
          <button className='arrowBtn'><FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Cards;
