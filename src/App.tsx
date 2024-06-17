import './App.css';
import racoonsLogo from './assets/racoons.png';
import socialTeamLogo from './assets/media_team.jpeg';
import buildersLogo from './assets/builders.jpeg';
import developersLogo from './assets/developers.jpeg';

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={racoonsLogo}></img>
      </div>
      <div className="teams">
        <div className="team social_team">
          <img src={socialTeamLogo} />
          <div>Social Team</div>
        </div>
        <div className="team builders_team">
          <img src={buildersLogo} />
          <div>Builders Team</div>
        </div>
        <div className="team devlopers_team">
          <img src={developersLogo} />
          <div>Developers Team</div>
        </div>
      </div>
      <div className="ban">{'אאאאייי עוד לא אכלתי באן!'}</div>
    </div>
  );
}

export default App;
