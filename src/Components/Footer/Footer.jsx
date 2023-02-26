
import Contacto from "./Group/Contacto";
import Information from "./Group/Information";
import Links from "./Group/Links";

const Footer = () => {
    return (
        <footer>
        <div className="row">
            <Contacto/>
            <Information/>
            <Links/>
        </div>
        <div id="copyright">
          <p>Made with <i className="fa fa-heart-o" /> by Katherine Cantillo</p>
        </div>
      </footer>
    );
}
 

export default Footer;

