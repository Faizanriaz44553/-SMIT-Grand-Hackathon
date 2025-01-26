import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footerContainer">
                    <div class="footerSection aboutSection">
                        <h3 class="footerTitle">About Us</h3>
                        <p>
                            Success Pediacentral is dedicated to providing financial support for various needs like education, home construction, weddings, and business ventures. Our mission is to make loan processing easy, transparent, and efficient.
                        </p>
                    </div>

                    <div class="footerSection quickLinksSection">
                        <h3 class="footerTitle">Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Loan Calculator</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>


                    <div class="footerSection contactInfoSection">
                        <h3 class="footerTitle">Contact Info</h3>
                        <p>Email: support@successpediacentral.com</p>
                        <p>Phone: +92 300 0000000</p>
                        <p>Address: 123 Success Street, Karachi, Pakistan</p>
                    </div>


                    <div class="footerSection socialMediaSection">
                        <h3 class="footerTitle">Follow Us</h3>
                        <div class="socialIcons">
                            <a href="#" class="socialIcon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="socialIcon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="socialIcon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="socialIcon"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footerBottom">
                    <p>&copy; 2025 Success Pediacentral. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
