import React from 'react'
import styles from './style.module.scss';

export default function Descriptions({data, selectedProject}) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className={styles.descriptions}>
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className={styles.description}
                        style={{clipPath: selectedProject == i ? "inset(0 10% 0)" : "inset(50% 50% 50%"}}
                    >
                        <p>{crop(title, 9)}</p>
                        <p>{description}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
