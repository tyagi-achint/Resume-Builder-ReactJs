import React from 'react'

export default function Footer(props) {
    const currentYear = new Date().getFullYear();
    const footerStyle = {
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#aaa',
        borderTop: '1px solid #bbb',
        marginTop: 'auto',
        padding: '10px'
    };
    const aStyle = {
        color: '#464646',
        textDecoration: 'underline'
    }
    return (
        <>
            <footer style={footerStyle}>
                Copyright © {currentYear}. All rights reserved.
                <p style={{ margin: 0 }}>
                    Designed & Developed by <a style={aStyle} target={props.target} href="https://tyagi-achint.github.io/">Achint Tyagi</a>
                </p>
            </footer>
        </>
    )
}
