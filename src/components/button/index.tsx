import styles from "./style.module.css";

const Button = ({ text, size = 'regular', style = 'light', id }:
    { text: string, size?: 'lg' | 'regular', style?: 'light' | 'dark', id?: any }
) => {

    const sizeCustom = size === 'regular' ? '10rem' : '20rem'
    const backgroundColor = style === 'light' ? 'var(--blanco-miau)' : 'var(--blue-miau)'
    const textColor = style === 'light' ? 'var(--blue-miau)' : 'var(--blanco-miau)'

    return <button
        id={id}
        style={{
            width: sizeCustom,
            backgroundColor: backgroundColor,
            color: textColor,
        }}
        className={styles.customButton}>
        {text}
    </button>

}



export { Button }