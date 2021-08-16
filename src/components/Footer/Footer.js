import React from 'react';
import s from './Footer.module.scss';

class Footer extends React.Component {

    render() {
        return (
            <footer className={s.footer}>
                {new Date().getFullYear()} © One React - React Admin Dashboard Template Made by &nbsp;
                <a href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic LLC</a>
            </footer>
        )
    }
}

export default Footer;
