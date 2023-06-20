export const metadata = {
  title: 'About Page',
  description: "At Nojju, we are passionate about camping and the great outdoors. We believe that spending time in nature is not just a recreational activity but a transformative experience that brings joy, relaxation, and a deeper connection with ourselves and the world around us. Our mission is to provide you with valuable insights, expert advice, and carefully curated product recommendations to enhance your camping adventures. We understand that choosing the right camping gear can make a significant difference in your overall camping experience, and thats where we come in. We strive to be your trusted source for reliable information and top-quality camping products.",
  keywords: "camping, outdoors, product recommendations, camping adventures, camping gear"
}

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div className="text-2xl font-bold my-8 flex justify-center">
        <h1>About Us</h1>
      </div>
      <div className="text-justify my-8 mx-6 leading-8">
      <h2>Welcome to Nojju!</h2>
        <p>
          At Nojju, we are passionate about camping and the great outdoors. We
          believe that spending time in nature is not just a recreational
          activity but a transformative experience that brings joy, relaxation,
          and a deeper connection with ourselves and the world around us. Our
          mission is to provide you with valuable insights, expert advice, and
          carefully curated product recommendations to enhance your camping
          adventures. We understand that choosing the right camping gear can
          make a significant difference in your overall camping experience, and
          thats where we come in. We strive to be your trusted source for
          reliable information and top-quality camping products.
        </p>
        <p>
          With a team of experienced outdoor enthusiasts, we diligently research
          and review a wide range of camping-related products available on
          Amazon. From tents and sleeping bags to cooking equipment and hiking
          gear, we handpick the best products that meet our rigorous standards
          of quality, durability, and functionality. We aim to simplify your
          decision-making process, ensuring that you have the necessary tools
          and equipment to make the most of your camping excursions. Thank you
          for choosing Nojju as your go-to resource for camping-related
          information and products. We look forward to being a part of your
          camping adventures, helping you create lasting memories and
          unforgettable experiences in the great outdoors.
        </p>
        <p className="my-8">Happy camping!</p>
        <p>The Nojju Team</p>
      </div>
    </div>
  );
};

export default AboutUs;
