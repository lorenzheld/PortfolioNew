import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaFlag, FaBirthdayCake,
    FaUser, FaCogs, FaWrench, FaLanguage, FaGraduationCap, FaSuitcase,
    FaCertificate, FaUsers
} from "react-icons/fa"
import React from "react"
import Portrait from "./assets/Portrait.jpg"

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
            <header className="bg-background/80 border-b border-white/10 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-highlight">Lorenz Held</h1>
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

            {/* KONTAKT SEKTION */}
            <section className="bg-white/5 backdrop-blur border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <a href="mailto:held.lorenz.08@gmail.com" className="flex items-center gap-2 hover:underline">
                        <FaEnvelope className="text-highlight" /> held.lorenz.08@gmail.com
                    </a>
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-highlight" /> 077 527 26 41
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-highlight" /> Pfaeffikon ZH, Schweiz
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
                                "Problemmloesungsorientiert",
                                "Organisationsfaehigkeit",
                                "Lernbereitschaft"
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
                            <li>Microsoft Office</li>
                        </ul>
                    </Section>

                    <Section icon={FaLanguage} title="Sprachen">
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="flex justify-between mb-1"><span>Deutsch C2</span><span>5/5</span></div>
                                <div className="h-2 bg-white/10 rounded"><div className="h-2 bg-highlight rounded w-full"></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1"><span>Englisch B2</span><span>4/5</span></div>
                                <div className="h-2 bg-white/10 rounded"><div className="h-2 bg-highlight rounded w-4/5"></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1"><span>Franzoesisch A2</span><span>2/5</span></div>
                                <div className="h-2 bg-white/10 rounded"><div className="h-2 bg-highlight rounded w-2/5"></div></div>
                            </div>
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
                                <div className="flex justify-between"><strong>Sekundarschule, Pfaeffikon ZH</strong><span>2020–2023</span></div>
                                <p className="opacity-80">Abschluss der 3. Sek mit erfolgreicher Aufnahmepruefung an die IMS.</p>
                            </div>
                        </div>
                    </Section>

                    <Section icon={FaSuitcase} title="Erfahrungen">
                        <div className="space-y-4 text-sm">
                            <div>
                                <div className="flex justify-between"><strong>Hilfsleiter Jugendgruppe, Rettungsschwimmen Pfaeffikon</strong><span>Seit 2023</span></div>
                                <p className="opacity-80">
                                    Planung und Durchfuehrung von Trainings fuer Kinder 10 bis 14 Jahre. Foerderung von Teamarbeit und Sicherheitsbewusstsein.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between"><strong>Badiaufsicht Saisonjob, Badi Pfaeffikon</strong><span>Seit 2021</span></div>
                                <p className="opacity-80">
                                    Verantwortlich fuer Sicherheit der Badegaeste durch aktive Ueberwachung.
                                    Anwendung von Erste Hilfe Massnahmen nach Ausbildung.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section icon={FaCertificate} title="Weiterbildungen">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><strong>1418 Coach Ausbildung, Sportzentrum Kerenzerberg</strong><span>2024</span></div>
                            <div className="flex justify-between"><strong>Rettungsschwimmen, Pfaeffikon</strong><span>2019–2024</span></div>
                            <p className="opacity-80">JuBrevet, BLS AED SRC Komplett, Brevet Plus Pool, Modul See.</p>
                        </div>
                    </Section>

                    <Section icon={FaUsers} title="Freizeitaktivitaeten">
                        <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
                            <li>Informatik. Programmierprojekte sichtbar auf GitHub</li>
                            <li>Rettungsschwimmen. Training und Regio sowie Schweizermeisterschaften</li>
                            <li>Fitnessstudio. Regelmaessiges Training zur Foerderung von Ausdauer und Disziplin</li>
                        </ul>
                    </Section>
                </div>
            </main>
        </div>
    )
}
