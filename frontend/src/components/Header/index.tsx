import './styless.css';

function Header() {
    return (
        <header>

            <div className="page">
                <nav className="page__menu page__custom-settings menu">
                    <ul className="menu__list r-list">
                    <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Home</a></li>
                        <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Cadastro</a></li>
                        <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Editar</a></li>
                        <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Excluir</a></li>
                        <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Relatorio</a></li>
                        <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Sair</a></li>
                        
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;