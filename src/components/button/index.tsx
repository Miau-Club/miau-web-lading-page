import styles from "./style.module.css";

const Button = ({ text, size = 'regular', style = 'light' }:
    { text: string, size?: 'lg' | 'regular', style?: 'light' | 'dark' }
) => {

    const sizeCustom = size === 'regular' ? '0.5rem 1rem' : '0.5rem 1rem'
    const backgroundColor = style === 'light' ? 'var(--blanco-miau)' : 'var(--blue-miau)'
    const textColor = style === 'light' ? 'var(--blue-miau)' : 'var(--blanco-miau)'

    return <button
        style={{
            padding: sizeCustom,
            backgroundColor: backgroundColor,
            color: textColor,
            borderColor: "white"
        }}
        className={styles.customButton}>
        {text}
    </button>

}



export { Button }