import React, {useState, useEffect} from 'react';
import styles from './ToggleTheme.module.css'

interface IProps {
    getTheme: (theme: string) => void
}


const ToggleTheme: React.FC<IProps> = ({getTheme}) => {
    const [theme, setTheme] = useState('bright');

    const changeToggle = () => {
        setTheme((prevTheme)=> ((prevTheme === 'bright') ? 'dark' : 'bright'));
       
    }

    useEffect(() => {
        getTheme(theme);
    }, [theme])

    const themeState = (theme === 'bright') ? styles.day : styles.dark;
    return (
        <div className={styles.toggle_wrapper}>
            <div className={styles.circle + " " + themeState} onClick={changeToggle}></div>
        </div>
    )
}

export default ToggleTheme;