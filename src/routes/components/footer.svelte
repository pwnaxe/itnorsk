<footer class='footer'>
  <div class="footer-content">
    <div class="footer-section">
      <h3>NORSK SP. Z O.O.</h3>
      <p>ul. Żeglugi Wiślanej 1/12<br>
      03-043 Warszawa<br>
      KRS: 0000850697<br>
      NIP: 5213904886<br>
      REGON: 386819703</p>
    </div>
    <div class="footer-section">
      <h3>Mapa strony</h3>
      <a href="/">Strona główna</a><br>
      <a href="/contact">O nas</a><br>
      <a href="/contact">Blog</a><br>
      <a href="/contact">Kontakt</a>
    </div>
    <div class="footer-section">
      <h3>Nasza oferta</h3>
      <a href="/contact">Strony internetowe</a><br>
      <a href="/contact">Aplikacje internetowe</a><br>
      <a href="/contact">Identyfikacje wizualne</a><br>
      <a href="/contact">Projektowanie UI/UX</a>
    </div>
    <div class="footer-section">
      <h3>Kontakt</h3>
      <a href="mailto:biznes@norskcode.pl">biznes@norskcode.pl</a><br>
      <a href="mailto:kontakt@norskcode.pl">kontakt@norskcode.pl</a><br>
      <a href="https://discord.gg/linkDoTwojegoKanalu">Discord</a><br>
      <a href="tel:+48123456789">+48 786-874-435</a>
    </div>
  </div>
</footer>

<style>
 footer.footer {
  height: fit-content;
  width: 100vw;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  padding: 1vw;
  flex-grow: 1;
  min-width: 250px;
}

.footer-section h3 {
  margin-bottom: 1vw;
}

.footer-section a {
  color: white;
  text-decoration: none;
  margin-bottom: 0.5vw;
}

.footer-section a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    justify-content: center;
  }
  .footer-section {
    align-items: center;
    padding: 1vw 0;
  }
}
</style>
