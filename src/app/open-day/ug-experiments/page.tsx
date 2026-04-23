import React from 'react';
import styles from './page.module.css';
import ugExperimentsData from '../../../data/ug_experiments.json';

// Mapping icons to clubs
const clubIcons: Record<string, string> = {
    "QUARKS": "⚛️",
    "GEOLITES": "🪨",
    "SAMASYA": "♾️",
    "DATABASED": "💻",
    "NATURALISTS": "🧬",
    "ENSEMBLES": "🧲",
    "CATALYST": "🧪",
    "AMALGAM": "🧊",
    "VICHARAKA": "🤖",
    "ASTRAE": "🔭",
    "KID’s Zone": "🎈",
    "QUIZ": "🧠",
    "BOOK": "📚"
};

export default function UGExperimentsPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>UG Experiments 2026</h1>
                    <p className={styles.subtitle}>
                        Explore the fascinating world of science and technology through interactive experiments presented by the undergraduate student clubs of IISc.
                    </p>
                </header>

                {Object.entries(ugExperimentsData).map(([clubName, experiments]) => (
                    <section key={clubName} className={styles.clubSection}>
                        <div className={styles.clubHeader}>
                            <div className={styles.clubIcon}>
                                {clubIcons[clubName] || "✨"}
                            </div>
                            <h2 className={styles.clubTitle}>{clubName} {clubName !== "KID’s Zone" ? "Club" : ""}</h2>
                        </div>

                        <div className={styles.experimentGrid}>
                            {experiments.map((exp: any, idx: number) => (
                                <div key={idx} className={styles.experimentCard}>
                                    <h3 className={styles.experimentName}>{exp.name}</h3>
                                    <p className={styles.experimentDesc}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
