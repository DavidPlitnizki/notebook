import React, {useState} from 'react';
import styles from './ToggleTheme.module.css'


const ToggleTheme: React.FC = () => {
    const [theme, setTheme] = useState('day');

    const changeToggle = () => {
        setTheme((prevTheme)=> ((prevTheme === 'day') ? 'dark' : 'day'));
    }

    const themeState = (theme === 'day') ? styles.day : styles.dark;
    return (
        <div className={styles.toggle_wrapper}>
            <div className={styles.circle + " " + themeState} onClick={changeToggle}></div>
        </div>
    )
}

export default ToggleTheme;