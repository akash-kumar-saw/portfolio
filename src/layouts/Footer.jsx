const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="p-3 text-center">
      <h6>Akash Kumar Saw</h6>
      <p>{currentYear} © All CopyRights Reserved</p>
    </footer>
  );
};

export default Footer;
