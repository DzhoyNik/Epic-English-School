import React from "react";
import "../css/auth.css"
import Logo from "../img/logo.png";
import { useNavigate } from "react-router";

const withNavigate = (Component) => {
    return function WrappedCommponent (props) {
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate} />
    }
}

class Auth extends React.Component {
    componentDidMount() {
        document.title = "Авторизация | Epic English School"
    }

    handleClick = () => {
        this.props.navigate("/main");
    }
    
    render() {
        return(
            <div className="auth">
                <div className="auth-body">
                    <form method="">
                        <h2>Добро пожаловать</h2>
                        <div className="input-section">
                            <span className="material-symbols-outlined">person</span>
                            <input type="text" name="" placeholder="Введите логин" />
                        </div>
                        <div className="input-section">
                            <span className="material-symbols-outlined">key</span>
                            <input type="password" name="" placeholder="Введите пароль" />
                        </div>
                        <button type="button">Авторизоваться</button>
                        <a href type="button" style={{marginTop: 15}} onClick={this.handleClick}><span className="material-symbols-outlined">shield_person</span>Тествый режим</a>
                    </form>
                </div>
                <div className="auth-logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
        )
    }
}

export default withNavigate(Auth);