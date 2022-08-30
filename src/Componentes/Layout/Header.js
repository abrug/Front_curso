import './styles/Layout/Header.css';

const Header = (props)=> {
    return (
        <header>
            <div className='contHeader'>
                <div className="contImgLogo">
                    <img src={require("../../img/plane (2).png")} className="imgLogo" alt="Transportes X" />
                </div>
                <h1 className="titleLogo"> Travel Nix </h1>
            </div>
        </header>

    )
}

export default Header;

