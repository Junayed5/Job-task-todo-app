import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="" >
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://mobirise.com/blocks/assets/images/jumbotron178.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
            <div className='flex gap-9 mt-[-700px]'>
              <div className="card w-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h1>Todo</h1>
                </div>
              </div>
              <div className="card w-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h1>Progress</h1>
                </div>
              </div>
              <div className="card w-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h1>Done</h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
