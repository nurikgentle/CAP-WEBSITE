import React from 'react'
import Hamburger from 'hamburger-react'
import './Navbar.css'


// const hamburger = document.querySelector(".hamburger");
// const fourLinks = document.querySelector(".four-links");

// hamburger.addEventListener("click", (e) => {
//   hamburger.classList.toggle("active");
//   fourLinks.classList.toggle("active")
// })


// document.querySelectorAll(".four-links").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   fourLinks.classList.remove("active");
// }))
    

function Burger() {
  return (
    <div>
        {/* <div className='hamburger'>
             <span className='bar'></span>
             <span className='bar'></span>
             <span className='bar'></span>
        </div> */}
         <Hamburger onToggle={toggle=>{
             if(toggle){
                document.getElementById('burger').style.display = 'flex'
                document.getElementById('burger').style.backgroundColor = 'black'
             }
             else{
                document.getElementById('burger').style.display = 'none'
             }
         }}/>
    </div>
  )
}

export default Burger