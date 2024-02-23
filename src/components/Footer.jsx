import React from 'react'
import '../css/Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© 2024
                    Jon Gorostegui Todos los derechos reservados.
                </span>
                <ul
                    className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
                >
                    <li>
                        <a href="https://www.jgorostegui.software/" className="hover:underline me-4 md:me-6">Sobre mi</a>
                    </li>
                    <li>
                        <a href="mailto:jongorostegui@gmail.com" className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer