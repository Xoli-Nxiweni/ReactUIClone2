import './NavBar.css'
import { IoSearchSharp } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

let NavBar = () =>{
    return(
        <div className='nav'>
            <div className='logo'>
                <img src='logo2.png'/>
            </div>
            <div className='links'>
                <ul>
                    <li><a href='#'>Find Work</a></li>
                    <li><a href='#'>Learn Design</a></li>
                    <li><a href='#'>Marketplace</a></li>
                    <li><a href='#'>Hire Designers</a></li>
                </ul>
            </div>
            <div className='searchBar'>
                <div className='Bar'>
                    <input type="text" />
                <IoSearchSharp className='searchIcon' />
                </div>
            </div>
            <div className='otherIcons'>
                <GoBellFill />
                <FaEnvelopeCircleCheck/>
               <div className='userIcon'>
                    <img src="https://img.freepik.com/premium-photo/default-male-user-icon-blank-profile-image-green-background-profile-picture-icon_962764-98397.jpg"/>
               </div>
            </div>
        </div>
    )
}

export default NavBar;