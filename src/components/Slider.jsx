import ImageSlider, { Slide } from "react-auto-image-slider";

function Slider() {
  return (
    <ImageSlider style={{width:"80%"}} effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://media.istockphoto.com/id/1359339837/photo/de-seeding-of-cherries-in-chia-pudding-factory-by-workers.jpg?b=1&s=170667a&w=0&k=20&c=65-A-28APBkLn_0mIjg8GqE074IUaHeaaWvyVwyIlc4=" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://media.istockphoto.com/id/1372205277/photo/traditional-indian-food-thali-served-in-plate-top-view.jpg?s=612x612&w=0&k=20&c=mufjX4i0bjmNB_9VSrbQ0zLOBH08FWZb5oFcOItclVc=" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://media.istockphoto.com/id/995428636/photo/elegant-tapas-by-the-sea-in-the-sunset.jpg?s=612x612&w=0&k=20&c=b_52qmyYReDICfgf8ea0veEkAw4VeYQkAiWNCgldnlk=" />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;