import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoYoutube} from "react-icons/bi"


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-web">
            <div className="top">
                <BiLogoFacebook size={30} />
                <BiLogoInstagram size={30} />
                <BiLogoTwitter size={30} />
                <BiLogoYoutube size={30} />
            </div>
            <div className="center">
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Provisions</li>
                </ul>
                <ul>
                    <li>Help center</li>
                    <li>Job oppurtunities</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate information</li>
                </ul>
                <ul>
                    <li>Media Center</li>
                    <li>Security</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="bottom">
                <p>service code</p>
                <p>&copy; 1997-2023 Netflix, Inc</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer









