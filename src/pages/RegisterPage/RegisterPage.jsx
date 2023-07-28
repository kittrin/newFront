import React from 'react';
import cls from "./RegisterPage.module.scss"
import {Button, Typography} from "antd";
import gos from "../../assets/gos.png"
import {Link} from "react-router-dom";
const LoginPage = () => {
    return (
        <div className={cls.Register}>
            <form className={cls.form}>
                <Button size={"large"}>Зарегистрироваться</Button>
                <Button size={"large"}>
                    Зарегистрироваться через
                    <img src={gos} alt=""/>
                </Button>
                <Typography.Text>
                    Уже есть аккаунт?
                    <Typography.Link>
                        <Link to={"/auth/login"}>
                            Войти
                        </Link>
                    </Typography.Link>
                </Typography.Text>
            </form>
        </div>
    );
};

export default LoginPage;