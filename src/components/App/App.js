// import logo from './logo.svg';
import "./App.css";
import Header from "../layout/header";
import GroupView from "../products/groupView";
import Cart from "../cart/cart";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <div className="left">
          <GroupView />
        </div>
        <div className="right">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
