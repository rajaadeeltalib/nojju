export const metadata = {
  title: 'Contact Us',
  description: 'We value your feedback, questions, and suggestions. If you have any inquiries or need assistance, please feel free to reach out to us. We are here to help!',
  keywords: 'contact, feedback, questions, suggestions'
}



const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="text-2xl font-bold my-8 flex justify-center">
        <h1>Contact Us</h1>
      </div>
      <div className="text-justify my-8 mx-6 leading-8">
        <p>
          We value your feedback, questions, and suggestions. If you have any
          inquiries or need assistance, please feel free to reach out to us. We
          are here to help!
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@nojju.com" target="_new">
            support@nojju.com
          </a>
        </p>
        <p>
          Our dedicated support team is committed to providing you with prompt
          and reliable assistance. Whether you have a specific query about a
          product, need further information on a camping topic, or want to share
          your camping experiences with us, we are eager to hear from you.        
          Please note that we strive to respond to all inquiries within 24 to 48
          hours. We appreciate your patience and assure you that we will address
          your concerns to the best of our abilities.
        </p>
        <p className="text-lg font-bold my-4">Join the Nojju Community</p>
        <p>
          Connect with us on social media platforms to stay updated with the
          latest camping tips, product recommendations, and exciting outdoor
          adventures. Follow us on Facebook, Instagram, and Twitter to join our
          ever-growing community of camping enthusiasts. We encourage you to
          share your camping stories, photos, and experiences using our
          dedicated hashtags, and interact with fellow nature lovers.        
          We value your active participation and look forward to building a
          thriving community that fosters learning, inspiration, and camaraderie
          among camping enthusiasts.
        </p>
        <p>
          Thank you for choosing Nojju as your trusted camping resource. We
          appreciate your support, and we are excited to embark on this camping
          journey together!
        </p>
        <p className="my-8">The Nojju Team</p>
      </div>
    </div>
  );
};

export default ContactUs;
