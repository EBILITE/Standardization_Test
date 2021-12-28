import React from 'react'
import "./widget.css"
const ProfileWidget = ({ text, typeBtn }) => {
  return (
    <div className="profileWidget-Container">
      <div>
        <div></div>
        <div>
          <p>{text}</p>
        </div>
      </div>
      <div>
        {
          typeBtn ? <button style={BtnStyles}>Resume</button> : <span style={{ color: `#0052CC`, fontSize: "20px" }}>Begin</span>
        }
      </div>
    </div>
  )
}

export default ProfileWidget

const BtnStyles = { width: "fit-content", margin: "0 0.6rem 0 0", padding: ".5rem 1.2rem", background: "rgba(9, 30, 66, 0.04)", border: "none", borderRadius: "4px", color: "#42526E", fontSize: "15px", cursor: "pointer" }