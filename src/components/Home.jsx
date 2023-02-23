import React from 'react'
import Navbar from "./Navbar"
import Backgraund from './Backgraund'
import Slider from "./Slider"
import ReactCardSlider from 'react-card-slider-component';
import sliderClick from "react-card-slider-component"
import Main from "./Main"
const Home = () => {
    const slides = [
        {image:"https://media.istockphoto.com/id/1264618385/photo/indian-tricolour-or-tiranga-rice-for-indian-republic-and-independence-day-celebration-served.jpg?s=612x612&w=0&k=20&c=StIOH5IZ9SsEhvkZHcu-W7Tw1v7DNACqa_lMpnk9onA=",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/1362491098/photo/healthy-indian-breakfast-of-fruits-milk-and-cereals.jpg?s=612x612&w=0&k=20&c=QAnbDexUy9j0Fx3-jDuY9nf_V0gN5a5sJHZZQqvbnw8=",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/1337888214/photo/close-up-image-of-indian-street-food-panipuri-being-served-with-flavoured-water-and-chickpeas.jpg?s=612x612&w=0&k=20&c=kLZF9FrTXJmL0N3lYnokMU6Lttvr9YLrMwQ1zUQyOJc=",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?s=612x612&w=0&k=20&c=gwLv5UccfysMWJn2nEPXoQfczkCTBylrmenTmHonHrc=",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/1453776290/photo/winter-season-special-traditional-punjabi-mithai-til-bhugga-or-til-bugga-is-made-of-dry.jpg?s=612x612&w=0&k=20&c=SaYZTLTpnPzMbwXD_umnPs6omL3THfl0CVCt3Lsxd2E=",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/1016644170/photo/tricolored-idli-with-sambhar-and-chutney.jpg?s=612x612&w=0&k=20&c=m3C1ky4RtlfvjCdtOT1qf7IU3j4izWIiln6zQYtLETw=",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=612x612&w=0&k=20&c=WjUXTcVnvbeiBJ2H2nNefpjk_B4zXikjkUFG-GhSJ54=",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/505592886/photo/selection-of-protein-sources-in-kitchen-background.jpg?s=612x612&w=0&k=20&c=nkQzDMJZWXRMVAfYIICuzG-t6fc9rcrr6oqYeYrZf-o=",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/836012728/photo/holiday-turkey-dinner.jpg?s=612x612&w=0&k=20&c=f40xa5igjwqfNQq0qO0W0M0KCY_9MEZVztrPjgmBhBg=",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y=",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://media.istockphoto.com/id/604018914/photo/variety-of-delicious-diwali-sweets-from-india.jpg?s=612x612&w=0&k=20&c=qe_veYuFKVp2LM45Dbd78cX6hvbp_Jipt_BtOoI0TYE=",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]
  return (
    <>
    
   <Navbar/>
   
   <Slider/>
   <br/>
   <br/>
   <div style={{width:"100%",justifyContent:"center", marginLeft:"20px"}}><ReactCardSlider slides={slides}/></div>
   <br/>
   <br/>
   <Main/>
   
    </>
  )
}

export default Home