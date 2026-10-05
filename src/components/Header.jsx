import App from "../pages/Home";


function Header() {
    return (
        <div className="header">
            <div className="logo">
                <h1>Noor E Quran</h1>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/quran">Quran</a></li>
                    <li><a href="/para">Para</a></li>
                    <li><a href="/saved">Saved</a></li>
                    <li><a href="/radio">Radio</a></li>
                </ul>
            </div>
            <div className="more">
                <button>More</button>
                <ul>
                    <li><a href="/asma-ul-husna">Asma-ul-Husna</a></li>
                    <li><a href="/durood-e-taj">Durood-e-Taj</a></li>
                    <li><a href="/khatm-e-qadriya">Khatm-e-Qadriya</a></li>
                    <li><a href="/wazaif">Wazaif</a></li>
                </ul>

            </div>
            <div className="darkmode">
                <button>Dark Mode </button>

            </div>
        </div>
    )
}

export default Header