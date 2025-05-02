import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Typing Speed App. All rights reserved.</p>
            <p>Created for improving typing skills.</p>
        </footer>
    );
};

export default Footer;