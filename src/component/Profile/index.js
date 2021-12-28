import {useState} from 'react'
import "./Profile.css"
import check from "../../assest/images/check.svg"
import Talentmanager from "../../assest/images/Talentmanager.svg"
import profileImg from "../../assest/images/profileImg.svg"
import Employee from "../../assest/images/Employee.svg"
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()
    const [IsActive, setIsActive] = useState(false)
    const handleLogOut = () => {
        navigate('/')
      }

    return (
        <div className="profile-container">
            <label htmlFor="profile">
                <img src={profileImg} alt=""></img>
            </label>
            <input type="checkbox" id="profile" />
            <div className="profile-dropdown">
                <div>
                <h1>EBILITE UCHENNA</h1> 
                <span>Profile</span>
                </div>

                <div className="use-as">
                    <span>Use Resource Edge as</span>
                    <div className="talent-manager">
                        <img src={Talentmanager} alt=""></img>
                        <p>Talent Manager</p>
                        {
                            !IsActive ? <img src={check} alt=""></img> : null
                        }
                    </div>

                    <div className="employee">
                        <img src={Employee} alt=""></img>
                        <p>Employee</p>
                        {
                            IsActive ? <img src="" alt=""></img> : null
                        }
                    </div>
                </div>
                <div>
                <button onClick={handleLogOut}>Logout</button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
