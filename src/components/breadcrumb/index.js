import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';

export default function BreadcrumbComponent({ item }) {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-container">
            <ol className="breadcrumb">
                {item.map(item => (
                    <li 
                        className={`breadcrumb-item ${item.active ? 'active': ''}`} 
                        key={item.id}
                    >
                        <Link 
                            to={item.link} 
                            className={`fs-12 line-height-18 ${!item.active ? 'primary-blue text-underline': 'text-mid-dark'}`}
                        >{item.label.replace(/&frasl;/gmi, '/')}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}