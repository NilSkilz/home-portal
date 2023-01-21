import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <h1 style={{ fontWeight: 500 }}>cracky.co.uk</h1>
        </div>
        <div className="row mb-5">
          <div>Application Portal</div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <Card
              title="Plex"
              subtitle="Movies & TV Shows"
              url="plex.cracky.co.uk"
              logo="/plex_logo.png"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <Card
              title="Overseerr"
              subtitle="Request Management"
              url="overseerr.cracky.co.uk"
              logo="/overseerr_logo.png"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <Card
              title="Home Assistant"
              subtitle="Home Automation & IOT"
              url="ha.cracky.co.uk"
              logo="/ha_logo.png"
            />
          </div>
        </div>
      </div>
      <div style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        marginBottom: '100px'
      }}>
        <a href='/status/cracky'>Status Page</a></div>
    </div>
  );
}

export default App;
