import "../style/Copyright.css";

const Copyright = () => {
  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright__row">

          <div className="copyright__left">
            <p>© 2024 Avenir-Tech Pharmaceuticals. All Rights Reserved.</p>
          </div>
          
          <div className="copyright__right">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;