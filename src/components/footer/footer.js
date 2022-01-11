import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">Code can be found <a href="https://github.com/amirbehmaram/pokemon-type-helper">here.</a></p>
      <p className="footer__content">
        Thank you to <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> for 
        the favicon and thank you to <a href="https://www.sketchappsources.com/contributor/danielmotta">Daniel Motta</a> for 
        the pokemon type icons!
      </p>
    </footer>
  );
}

export default Footer;
