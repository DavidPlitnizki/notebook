import React from 'react';
import './Badge.css';


const Badge: React.FC<{count: number, type: string}> = ({count, type}) => {
    return (
    <div className={`container_badge ${type}`}>
        <span>{count}</span>
    </div>
    )
}

export default Badge;