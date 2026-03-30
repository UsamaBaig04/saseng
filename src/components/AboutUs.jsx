import React from 'react'
import "../styles/AboutUs.css";
import { Footer } from './Footer';
import Carousel from 'react-bootstrap/Carousel'
export const AboutUs = () => {
  return (
    <div className='aboutUsContainer'>
        <div className="caraouselContainer">
            <Carousel fade>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/About us banner.png"
                    alt="First slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='infoContainer1'>
                <div className="columns">
                    <div className="imgColumn">
                    <img src='/assets/Klemsan.png' alt='saslogo' className='infoImage'/>
                    </div>
                    
                    <div className="paraContainer"> 
                    <h4>About Us</h4>
                    <div className="infoDivider"></div>
                    <p>SAS Automation Pvt. Ltd.(SAPL) started in the year 2009, with an objective to provide complete turnkey solutions from Design, Manufacturing till successful commissioning. We are one of the leading service providers of Industrial Automation systems. We have partnered with world leaders to provide end-to-end services to our customers. With a dedicated team of engineers & proven experience in project management, instrumentation, control and electrical engineering, we can successfully complete any small or large projects with maximum efficiency.</p>
                    </div>
                </div>

                <div className="columns">
                <div className="paraContainer"> 
                    {/* <h4>About Us</h4>
                    <div className="infoDivider"></div> */}
                    <p>We utilize the latest innovations in technology to provide better engineering solutions, which can offer our customers maximum potential for increasing productivity with safety. We have installed and commissioned SCADA, DCS and redundant system for various projects. SAPL is highly professional and fast growing company.</p>
                    </div>
                    <div className="imgColumn">
                    <img src='/assets/redlion.jpg' alt='saslogo' className='infoImage'/>
                    </div>
                </div>
                <div className='visionMissionContainer'>
        <div className='vision'>
          <h2>Vision</h2>
          <p>“Our Vision is to become the World’s Most Admired ‘GREEN Automation’ Company”</p>
        </div>
        <div className='mission'>
          <h2>Mission</h2>
          <p>“Our mission is to create the world class ‘GREEN Automation’ Company that will establish Eco-Friendly Solutions & Processes by creating Green Partnerships, Joint Ventures, Acquisitions, Associations & Support”.</p>
        </div>
      </div>

      <div className='companyContainer'>
        <h2>The Company</h2>
        <div className='companyDescription'>
          <p>SAPL has a team of industrial experts who served for all industrial sectors for more than 15 years. We are the players in execution of Projects in Power Plant, Steel Plant, Cement Plant, Chem-Pharma, Sugar, Energy, Water Management & most of the Automotive Sector.</p>
          <img src='/assets/sectors2-2.jpg' alt='Company' className='companyImage'/>
        </div>
        {/* <h3>Sectors Served</h3>
        <ul className='sectorsList'>
          <li>Cement/Metals/Minerals</li>
          <li>Food and Beverage</li>
          <li>Life sciences/Pharma</li>
          <li>Pharma Chemical</li>
          <li>Power & Energy</li>
        </ul> */}
      </div>
      <div className='servicesContainer'>
        <h2>Our Service Offerings</h2>
        {/* <div className='service'>
          <h3>Turnkey Solution for Process Control & Instrumentation</h3>
        </div> */}
        <div className='service'>
            <ul><li><img src='/assets/turnkey.jpg'/>Turnkey Solution for Process Control & Instrumentation</li></ul>
            <ul><li><img src='/assets/design.jpg'/>Supply, Design, Detailed Engineering, Installation, Testing & Commissioning and Annual Maintenance</li></ul>
            <ul><li><img src='/assets/Automation.jpg'/>Control & Automation Services</li></ul>
            <ul><li><img src='/assets/integration.jpg'/>System Integration Services</li></ul>
            <ul><li><img src='/assets/plc.jpg' style={{ height: '23px', width: 'auto', verticalAlign: 'middle' }}/>PLC, DCS & SCADA Application Software Development</li></ul>
            <ul><li><img src='/assets/pc based.jpg' style={{ height: '25px', width: 'auto', verticalAlign: 'middle' }}/>PC Based Data Acquisition Systems</li></ul>
        </div>
        <div className="service">
            <p>We also offer Consulting Services for Engineering & Project Management from concept to commissioning for Automation of Process plants. We also have a professional set-up for Control Panel design, manufacture and testing of all types of Control Panels.</p>
        </div>
      </div>

        </div>
        {/* <Footer/> */}
    </div>
  )
}
