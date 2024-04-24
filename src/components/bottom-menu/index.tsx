import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

const BottomMenu: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["custom-shape-divider-bottom-1713745262"]}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles['shape-fill']}></path>
                </svg>
            </div>
            <div className={styles.containerSectionTop}>
                <Image
                    src="/miau/logo.png"
                    alt="MiAu Logo"
                    width={50}
                    height={40}
                    quality={100}
                    priority
                />
                <div>
                    <button className={styles.storeButtonWrapper}>
                        <Image
                            src={'/icons/apple.svg'}
                            alt={'Apple download icon'}
                            width={20}
                            height={20}
                            priority
                        />
                    </button>
                    <button className={styles.storeButtonWrapper}>
                        <Image
                            src={'/icons/google.svg'}
                            alt={'Apple download icon'}
                            width={20}
                            height={20}
                            priority
                        />
                    </button>
                </div>
            </div>

            <h5>Copyright © {new Date().getFullYear()} MiAu Club All rights reserved.</h5>

        </div>
    );
}

export { BottomMenu };