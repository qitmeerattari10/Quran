import Para from "../components/Para.jsx";

function Home() {
    return (
        <div>
            <div className="herosection">

                <div className="MainHeading">

                    <h1>
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    </h1>

                    <div className="welcome">

                        <h1>
                            Welcome to Noor E Quran
                        </h1>

                        <p>
                            Explore the Holy Quran with translation, tafseer and beautiful audio recitation  all in one peaceful place.
                        </p>

                    </div>

                    <div className="hero-buttons">

                        <button>
                            <a href="/quran">Read Quran</a>
                        </button>

                        <button>
                            <a href="/radio">Listen Now</a>
                        </button>

                    </div>

                </div>

            </div>

            <div className="Holyquran">
                <h1>
                    Explore the Holy Quran
                </h1>
                <p>
                    Read and explore all 30 Paras of the Holy Quran with translation, tafseer and beautiful audio recitation in one peaceful place.
                </p>
            </div>

            <Para />

        </div>
    );
}

export default Home;