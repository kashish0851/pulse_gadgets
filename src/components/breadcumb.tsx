// src/components/Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();

    const generateBreadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
            <div className="breadcrumb">
                <Link to="/home">Home</Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <span key={to}>
                            <span> / </span>
                            <Link to={to}>{value}</Link>
                        </span>
                    );
                })}
            </div>
        );
    };

    return (
        <nav aria-label="breadcrumb">
            {generateBreadcrumbs()}
        </nav>
    );
};

export default Breadcrumb;
