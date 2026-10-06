
import { Link } from "react-router-dom";

function Para() {
    const paras = [
        {
            number: 1,
            title: "Al-Baqarah",
            english: "The Cow",
            arabic: "الم",
            ayahs: "286 Ayahs",
        },
        {
            number: 2,
            title: "Al-Baqarah",
            english: "The Cow",
            arabic: "سَيَقُولُ",
            ayahs: "286 Ayahs",
        },
        {
            number: 3,
            title: "Al-Baqarah",
            english: "The Cow",
            arabic: "تِلْكَ الرُّسُلُ",
            ayahs: "286 Ayahs",
        },
        {
            number: 4,
            title: "An-Nisa",
            english: "The Women",
            arabic: "لَنْ تَنَالُوا",
            ayahs: "176 Ayahs",
        },
        {
            number: 5,
            title: "Al-Ma'idah",
            english: "The Table Spread",
            arabic: "وَالْمُحْصَنَاتُ",
            ayahs: "120 Ayahs",
        },
        {
            number: 6,
            title: "Al-An'am",
            english: "The Cattle",
            arabic: "لَا يُحِبُّ اللَّهُ",
            ayahs: "165 Ayahs",
        },
        {
            number: 7,
            title: "Al-A'raf",
            english: "The Heights",
            arabic: "وَإِذَا سَمِعُوا",
            ayahs: "206 Ayahs",
        },
        {
            number: 8,
            title: "Al-Anfal",
            english: "The Spoils",
            arabic: "وَلَوْ أَنَّنَا",
            ayahs: "75 Ayahs",
        },
        {
            number: 9,
            title: "At-Tawbah",
            english: "The Repentance",
            arabic: "قَالَ الْمَلَأُ",
            ayahs: "129 Ayahs",
        },
        {
            number: 10,
            title: "Yunus",
            english: "Jonah",
            arabic: "وَاعْلَمُوا",
            ayahs: "109 Ayahs",
        },
        {
            number: 11,
            title: "Hud",
            english: "Hud",
            arabic: "يَعْتَذِرُونَ",
            ayahs: "123 Ayahs",
        },
        {
            number: 12,
            title: "Yusuf",
            english: "Joseph",
            arabic: "وَمَا مِنْ دَابَّةٍ",
            ayahs: "111 Ayahs",
        },
        {
            number: 13,
            title: "Ar-Ra'd",
            english: "The Thunder",
            arabic: "وَمَا أُبَرِّئُ",
            ayahs: "43 Ayahs",
        },
        {
            number: 14,
            title: "Al-Hijr",
            english: "The Rocky Tract",
            arabic: "رُبَمَا",
            ayahs: "99 Ayahs",
        },
        {
            number: 15,
            title: "Al-Isra",
            english: "The Night Journey",
            arabic: "سُبْحَانَ الَّذِي",
            ayahs: "111 Ayahs",
        },
        {
            number: 16,
            title: "Al-Kahf",
            english: "The Cave",
            arabic: "قَالَ أَلَمْ",
            ayahs: "110 Ayahs",
        },
        {
            number: 17,
            title: "Al-Anbiya",
            english: "The Prophets",
            arabic: "اقْتَرَبَ",
            ayahs: "112 Ayahs",
        },
        {
            number: 18,
            title: "Al-Mu'minun",
            english: "The Believers",
            arabic: "قَدْ أَفْلَحَ",
            ayahs: "118 Ayahs",
        },
        {
            number: 19,
            title: "Al-Furqan",
            english: "The Criterion",
            arabic: "وَقَالَ الَّذِينَ",
            ayahs: "77 Ayahs",
        },
        {
            number: 20,
            title: "An-Naml",
            english: "The Ant",
            arabic: "أَمَّنْ خَلَقَ",
            ayahs: "93 Ayahs",
        },
        {
            number: 21,
            title: "Al-Ankabut",
            english: "The Spider",
            arabic: "اتْلُ مَا أُوحِيَ",
            ayahs: "69 Ayahs",
        },
        {
            number: 22,
            title: "Al-Ahzab",
            english: "The Combined Forces",
            arabic: "وَمَنْ يَقْنُتْ",
            ayahs: "73 Ayahs",
        },
        {
            number: 23,
            title: "Ya-Sin",
            english: "Ya Sin",
            arabic: "وَمَا لِيَ",
            ayahs: "83 Ayahs",
        },
        {
            number: 24,
            title: "Az-Zumar",
            english: "The Groups",
            arabic: "فَمَنْ أَظْلَمُ",
            ayahs: "75 Ayahs",
        },
        {
            number: 25,
            title: "Fussilat",
            english: "Explained in Detail",
            arabic: "إِلَيْهِ يُرَدُّ",
            ayahs: "54 Ayahs",
        },
        {
            number: 26,
            title: "Al-Ahqaf",
            english: "The Wind-Curved Sandhills",
            arabic: "حم",
            ayahs: "35 Ayahs",
        },
        {
            number: 27,
            title: "Adh-Dhariyat",
            english: "The Winnowing Winds",
            arabic: "قَالَ فَمَا خَطْبُكُمْ",
            ayahs: "60 Ayahs",
        },
        {
            number: 28,
            title: "Al-Mujadila",
            english: "The Pleading Woman",
            arabic: "قَدْ سَمِعَ اللَّهُ",
            ayahs: "22 Ayahs",
        },
        {
            number: 29,
            title: "Al-Mulk",
            english: "The Sovereignty",
            arabic: "تَبَارَكَ الَّذِي",
            ayahs: "30 Ayahs",
        },
        {
            number: 30,
            title: "An-Naba",
            english: "The Tidings",
            arabic: "عَمَّ",
            ayahs: "40 Ayahs",
        },
    ];

    return (
        <section className="para-section">
            <div className="para-container">

                <div className="para-grid">

                    {paras.map((para) => (
                        <Link
                            to={`/para/${para.number}`}
                            className="para-card"
                            key={para.number}
                        >

                            <div className="para-number">
                                {para.number}
                            </div>

                            <div className="para-info">

                                <div className="para-top">
                                    <div>
                                        <h3>{para.title}</h3>
                                        <p>{para.english}</p>
                                    </div>

                                    <div className="para-arabic">
                                        {para.arabic}
                                    </div>
                                </div>

                                <span className="ayah-count">
                                    {para.ayahs}
                                </span>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Para;
