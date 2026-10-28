function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Gabriel Rivas © {anio}</p>
    </footer>
  );
}

export default Footer;