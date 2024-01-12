import './App.css';
import Component from './components/component1/Component';
import Component2 from "./components/component2/Component2";
import Button from "./components/buttons/Button";
import Example from "./components/Example";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import User from "./components/user/User";



function App() {

    const navbar = [ 'Главная','|', 'О нас','|', 'Контакты']

    return (
        <div className={"main"}>
            <Header navbar={navbar}/>
            <Component text={"Chyngyz"}/>
            <Component2 age={22}/>
            <User job={"Student"}/>
            <Button text={"Add"} />
            <Button text={"Delete"} />
            <Footer link={"Telegram"}/>
        </div>
    )
}

export default App;
