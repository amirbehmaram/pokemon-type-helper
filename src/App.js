import './App.scss';

import Footer from "./components/footer/footer";

// How to import the SVGs as ReactComponents
//import { ReactComponent as DragonIcon } from './icons/dragon.svg';
// Then just use <DragonIcon /> wherever! The ReactComponent part is required.

function App() {
  return (
    <div className="site">
      <div className="site__content">
        <h1 className="title">Pokemon Type Helper</h1>
        <p className="content">
          This is still a work in progress, but the general idea behind it is to have a simple app to check for the
          various weaknesses/resistance that any given pokemon may have. I can never keep all that info in my head
          and it's easier to just use something like this to figure it out on the fly.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
