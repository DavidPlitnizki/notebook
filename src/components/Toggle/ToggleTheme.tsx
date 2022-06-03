import React, {memo} from 'react';
import styles from './ToggleTheme.module.css'


interface IProps {
    changeTheme: (theme: string) => void,
    theme: string
}


const ToggleTheme: React.FC<IProps> = memo(({changeTheme, theme}) => {
    const toggleTheme = (theme: string) => {
        const themeName = (theme === 'bright') ? 'dark' : 'bright';
        changeTheme(themeName);
    }

    const themeClass = (theme === 'bright') ? styles.day : styles.dark;

    return (
        <div className={styles.toggle_wrapper}>
            <div className={styles.circle + " " + themeClass} onClick={() => toggleTheme(theme)}></div>
        </div>
    )
});

export default ToggleTheme;