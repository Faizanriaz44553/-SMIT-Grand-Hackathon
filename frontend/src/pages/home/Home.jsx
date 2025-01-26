import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="mainWrapper">
      <div class="mainHeaderDiv">
        <div class="welcomeDiv">
          <h1>Welcome to Success Pediacentral</h1>
          <p class="introText">
            We are here to help you stay healthy, happy, and strong. Our
            platform offers comprehensive support in various areas like health,
            education, and financial assistance.
          </p>
          <p class="descriptionText">
            As part of this initiative, we provide specialized loan services in
            categories such as Wedding Loans, Home Construction Loans, Business
            Startup Loans, and Education Loans. Our goal is to offer
            personalized financial assistance, ensuring you get the support you
            need. Whether you're planning a wedding, building your dream home,
            starting a business, or pursuing education, we’re here to guide you.
          </p>
          <p class="descriptionText">
            Our loan application process is seamless, secure, and efficient.
            With easy-to-use features like loan calculators, application
            submission, and real-time slip generation, you can apply for your
            loan with confidence and clarity.
          </p>
          <p class="closingText">
            Stay tuned as we continue building our platform to offer even more
            services that empower you to achieve your goals. We’re excited to be
            part of your success journey!
          </p>
        </div>
        <div class="imageDiv">
          <img
            src="https://successpediainternational.com/wp-content/uploads/2023/01/spi_pic-fin.jpg"
            alt="Success Pediacentral"
            class="headerImage"
          />
        </div>
      </div>
      <div class="missionContainer">
        <div class="missionContentWrapper">
          <div class="missionText">
            <h2 class="missionTitle">Our Mission</h2>
            <p class="missionDescription">
              At Success Pediacentral, we are driven by the belief that everyone
              deserves the opportunity to achieve their dreams. Our mission is
              to provide accessible financial solutions tailored to the
              individual needs of our customers. Whether it’s a home, education,
              or a business venture, we are committed to being a trusted partner
              in your journey.
            </p>
            <p class="missionDescription">
              Our goal is to make the loan application process simple, clear,
              and supportive, helping you every step of the way. Together, we
              create paths to success for all our clients.
            </p>
          </div>
          <div class="missionImageWrapper">
            <img
              src="https://www.iba.edu.pk/News/images/iba-ced-saylani-welfare-introduce-spark-start-program-aspiring-entrepreneurs-banner2.jpg"
              alt="Our Mission"
              class="missionImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
