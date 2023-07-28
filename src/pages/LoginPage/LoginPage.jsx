import React from 'react';
import cls from "./LoginPage.module.scss"
import {Button, Typography} from "antd";
import gos from "../../assets/gos.png"
import {Link} from "react-router-dom";
const LoginPage = () => {
    return (
        <div className={cls.Login}>
            <form className={cls.form}>
                <Button size={"large"}>Войти</Button>
                <Button size={"large"}>
                    Войти через
                    <img src={gos} alt=""/>
                </Button>
                <Typography.Text>
                    Еще нет аккаунта?
                    <Typography.Link>
                        <Link to={"/auth/register"}>
                            Создать
                        </Link>
                    </Typography.Link>
                </Typography.Text>
            </form>
        </div>
    );
};

export default LoginPage;