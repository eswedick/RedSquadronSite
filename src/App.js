import squadron from './logos/red_squadron_unit_patch.png';
import overseer from './logos/overseerr_logo.svg'
import plex from './logos/plex-logo-transparent.png';
import discord from './logos/discord_icon.svg';
import telegram from './logos/telegram-icon.svg';
import './App.css';

function App() {
  return (
      <div className="d-flex flex-column h-100">
          <div className="col-lg-8 mx-auto px-3 pt-md-5 pb-3">
              <header className="d-flex align-items-center border-bottom">
                  <img src={squadron} alt='squadron patch' height='100vh'/>
                  <h1 className="font-face-ata font-large">Red Squadron</h1>
              </header>
          </div>
          <main className="flex-shrink-0">
              <div className="col-lg-8 mx-auto p-3 md-5 text-light">
                  <div className="row g-5">
                      <div className="col-md-6 mb-3">
                          <h2>Make a request!</h2>
                          <a href="https://overseerr.redsquadron.io" target='_blank' rel="noreferrer">
                              <img src={overseer} height='50vh' alt="Overseer"/>
                          </a>
                      </div>
                      <div className="col-md-6 mb-3">
                          <h2>Browse the library!</h2>
                          <a href="https://app.plex.tv" target='_blank' rel="noreferrer">
                              <img src={plex} height="50vh" alt="Plex"/>
                          </a>
                      </div>
                  </div>

                  <div className="row g-5 pt-5">
                      <div className="col-md-6 mb-3">
                          <h2>Get notifications!</h2>
                          <p>We can notify you when requests are available through Discord or Telegram</p>
                          <ul className="icon-list ps-0">
                              <li className="d-flex align-items-start mb-1"><a href="https://overseerr.redsquadron.io/profile/settings/notifications/discord/"><img src={discord} alt='discord' style={{marginRight:3}}/>Discord</a></li>
                              <li className="d-flex align-items-start mb-1"><a href="https://overseerr.redsquadron.io/profile/settings/notifications/telegram/"><img src={telegram} alt='telegram' style={{marginRight:3}} height='22px'/>Telegram</a></li>
                          </ul>
                      </div>
                      <div className="col-md-6 mb-3">
                          <h2>Join the Squadron!</h2>
                          <p>See what other people are requesting and watch together</p>
                          <span className="text-muted">Click&nbsp;
                              <a href="mailto: eswedick@gmail.com?body=Requesting permission to join the squadron. Standing by for response">HERE</a>
                              &nbsp;to contact Red Leader</span>
                      </div>
                  </div>
              </div>
          </main>
          <footer className="footer mt-auto py-3 join-the-squadron">
              <div className="container">
                  <span className="text-muted">
                      &copy; Red Squadron Media 2022
                  </span>
              </div>
          </footer>
      </div>
  );
}

export default App;
