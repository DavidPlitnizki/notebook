import React, {useEffect} from 'react';
import styles from './ToggleTheme.module.css'

import {useSelector} from 'react-redux';

import { RootState } from '../../store';


interface IProps {
    getTheme: (theme: string) => void,
    theme: string
}


const ToggleTheme: React.FC<IProps> = ({getTheme, theme}) => {
    const themeStyle = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
    },[themeStyle])

    const changeToggle = () => {
        const themeName = (themeStyle === 'bright') ? 'dark' : 'bright';
        getTheme(themeName);
       
       
    }

    const themeState = (theme === 'bright') ? styles.day : styles.dark;
    return (
        <div className={styles.toggle_wrapper}>
            <div className={styles.circle + " " + themeState} onClick={changeToggle}></div>
        </div>
    )
}

export default ToggleTheme;