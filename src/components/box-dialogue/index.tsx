import React from 'react';
import styles from './styles.module.css'

// import { Container } from './styles';

const BoxDialogue: React.FC<{ title: string, subtitle: any, isBlue?: boolean, resizeWidth?: boolean }> =
    ({ title, subtitle, isBlue, resizeWidth }) => {
        return (
            <div className={`${styles.container} ${isBlue && styles.blueBox} ${resizeWidth && styles.resized}`}>
                <h3>{title}</h3>
                {subtitle}
                {/* <p>{subtitle}</p> */}
            </div>
        );
    }

export { BoxDialogue }