import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaFlag, FaBirthdayCake,
    FaUser, FaCogs, FaWrench, FaLanguage, FaGraduationCap, FaSuitcase, FaFolderOpen
} from "react-icons/fa"
import React from "react"
import Portrait from "./assets/Portrait.jpg" // falls deine Datei Portrait.JPG heisst, hier anpassen

function Section(props: { icon: React.ComponentType<{ className?: string }>, title: string, children: React.ReactNode }) {
    const { icon: Icon, title, children } = props
    return (
        <section className="bg-white/5 backdrop-blur rounded-2xl p-6 shadow space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-highlight">
                <Icon className="text-highlight" /> {title}
            </h2>
            {children}
        </section>
    )
}

export default function App() {
    return (
        <div className="min-h-screen bg-background text-textSide font-sans">
            {/* TOP BAR */}
            <header className="bg-background/80 border-b border-white/10 z-10">
                <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-highlight">Lorenz Held</h1>
                        <p className="text-sm opacity-80">IMS Schueler</p>
                        <p className="mt-2 text-sm opacity-80 max-w-3xl">
                            Motivierter IMS Schueler mit Schwerpunkt Informatik und kaufmaennischer Grundbildung.
                            Erfahrung in Java, Webentwicklung und Leitung von Jugendgruppen.
                            Zielorientiert, teamfaehig und sicher im Umgang mit Verantwortung.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={Portrait}
                            alt="Portrait"
                            className="w-32 h-32 rounded-full object-cover border-4 border-highlight shadow-lg"
                        />
                    </div>
                </div>
            </header>

            {/* KONTAKT */}
            <section className="bg-white/5 backdrop-blur border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <a href="mailto:held.lorenz.08@gmail.com" className="flex items-center gap-2 hover:underline">
                        <FaEnvelope className="text-highlight" /> held.lorenz.08@gmail.com
                    </a>
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-highlight" /> +41 77 527 26 41
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-highlight" /> Pfäffikon ZH, Schweiz
                    </div>
                    <a href="https://github.com/lorenzheld" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                        <FaGithub className="text-highlight" /> github.com/lorenzheld
                    </a>
                    <div className="flex items-center gap-2">
                        <FaFlag className="text-highlight" /> Schweiz / Deutschland
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBirthdayCake className="text-highlight" /> 03.07.2008
                    </div>
                </div>
            </section>

            {/* BODY */}
            <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* SIDEBAR */}
                <aside className="lg:col-span-1 space-y-8">
                    <Section icon={FaUser} title="Soft Skills">
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Teamfaehig",
                                "Verantwortungsbewusst",
                                "Problemlösungsorientiert",
                                "Organisationsfaehigkeit",
                                "Lernbereitschaft",
                            ].map(s => (
                                <span key={s} className="bg-highlight/20 text-highlight px-3 py-1 rounded-full text-xs">{s}</span>
                            ))}
                        </div>
                    </Section>

                    <Section icon={FaCogs} title="Hard Skills">
                        <ul className="space-y-1 text-sm opacity-90">
                            <li>Java, HTML, CSS, JavaScript</li>
                            <li>Git und GitHub</li>
                            <li>Python Grundkenntnisse</li>
                            <li>SQL</li>
                            <li>React</li>
                            <li>Docker</li>
                            <li>Linux bash</li>
                            <li>LaTeX</li>
                        </ul>
                    </Section>

                    <Section icon={FaWrench} title="IT Werkzeuge und Tools">
                        <ul className="space-y-1 text-sm opacity-90">
                            <li>Visual Studio Code</li>
                            <li>IntelliJ IDEA</li>
                            <li>GitHub Desktop</li>
                            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                        </ul>
                    </Section>

                    <Section icon={FaLanguage} title="Sprachen">
                        <div className="text-sm space-y-1">
                            <p>Deutsch: C2 (Muttersprache)</p>
                            <p>Englisch: B2 (gute Kenntnisse)</p>
                            <p>Franzoesisch: B1 (Grundkenntnisse)</p>
                        </div>
                    </Section>
                </aside>

                {/* MAIN CONTENT */}
                <div className="lg:col-span-3 space-y-8">
                    <Section icon={FaGraduationCap} title="Bildung">
                        <div className="space-y-4 text-sm">
                            <div>
                                <div className="flex justify-between"><strong>Informatikmittelschule IMS, Winterthur</strong><span>2023–2025</span></div>
                                <p className="opacity-80">
                                    Schwerpunkt Informatik mit kaufmaennischer Grundbildung. Praxisprojekte in Webentwicklung und Java.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Sekundarschule, Pfäffikon ZH</strong><span>2020–2023</span></div>
                                <p className="opacity-80">
                                    Abschluss der 3. Sek mit erfolgreicher Aufnahmepruefung an die IMS.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section icon={FaFolderOpen} title="Projekte">
                        <div className="space-y-4 text-sm">
                            <div>
                                <div className="flex justify-between"><strong>Foxtrail</strong><span>React</span></div>
                                <p className="opacity-80">
                                    <a className="underline" href="https://github.com/lorenzheld/foxtrail/tree/main" target="_blank" rel="noreferrer">Foxtrail</a> ist ein interaktives Web-Projekt, das digitale Schnitzeljagden ermoeglicht. Es ist mit React gemacht und wurde fuer den Praxisunterricht erstellt.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Sportwetten Web-App mit Backend</strong><span>React, Springboot</span></div>
                                <p className="opacity-80">
                                    Die <a className="underline" href="https://github.com/lorenzheld/Sportwetten-BBW-Praxis-4/tree/main" target="_blank" rel="noreferrer">Sportwetten Web-App</a> war eine Gruppenarbeit in der Schule. Die App umfasst ein Frontend, userApi und ist angebunden an eine externe API, die die Spieldaten fetcht.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Eigener Linux Server</strong><span>Bash</span></div>
                                <p className="opacity-80">
                                    Ausserhalb der Schule wurde ein alter Laptop mit Ubuntu-Server installiert, mit einer Domain verbunden und darauf laeuft jetzt das <a className="underline" href="http://lorenzheld.ch" target="_blank" rel="noreferrer">Portfolio</a>.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section icon={FaSuitcase} title="Erfahrungen">
                        <div className="space-y-4 text-sm">
                            <div>
                                <div className="flex justify-between"><strong>Hilfsleiter Jugendgruppe, Rettungsschwimmen Pfäffikon</strong><span>Seit 2023</span></div>
                                <p className="opacity-80">
                                    Planung und Durchfuehrung von Trainings fuer Kinder 10 bis 14 Jahre. Foerderung von Teamarbeit und Sicherheitsbewusstsein.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Badiaufsicht Saisonjob, Badi Pfäffikon</strong><span>Seit 2021</span></div>
                                <p className="opacity-80">
                                    Verantwortlich fuer Sicherheit der Badegaeste durch aktive Ueberwachung.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Ausbildungen SLRG</strong><span>Pfäffikon, Sportzentrum Filzbach</span></div>
                                <p className="opacity-80">
                                    1418 Coach, JuBrevet, BLS AED SRC Komplett, Brevet Plus Pool, Modul See
                                </p>
                            </div>
                        </div>
                    </Section>
                </div>
            </main>
        </div>
    )
}
