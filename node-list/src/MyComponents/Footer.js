import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "absolute",
        width: "100%",
        height:60,
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com</p>
        </footer>
        
    )
}