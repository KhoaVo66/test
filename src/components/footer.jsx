import frameImg from '../assets/image/frame.png'
export default function Footer() {
  return (
    <>
      <footer>
        <section className="container footer-top">
          <div className="footer-top__item">
            <a href="./index.html" className="logo">
              Exclusive
            </a>
            <p>Get 10% off your first order</p>
            <div className="footer-submit">
              <input type="email" placeholder="Enter your email" />
              <i className="bx bxl-telegram" />
            </div>
          </div>
          <div className="footer-top__item">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="footer-top__item">
            <h3>Support</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-top__item">
            <h3>Download App</h3>
            <img src={frameImg} alt="" />
            <ul>
              <li>
                <a href="#">
                  <i className="bx bxl-facebook-circle" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="footer-below">© Copyright Rimel 2023. All right reserved</div>
      </footer>
    </>
  );
}
