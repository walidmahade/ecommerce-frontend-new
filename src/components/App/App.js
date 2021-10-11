// import logo from './logo.svg';
import './App.css';
import Header from "../layout/header";
import GroupView from "../products/groupView";
import Cart from "../cart/cart";

function App() {
  return (
    <div className="App">
        <Header />

        <Cart />

        <GroupView />
    </div>
  );
}

export default App;
