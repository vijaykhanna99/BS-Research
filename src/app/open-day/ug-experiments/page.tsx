import React from 'react';
import styles from './page.module.css';
import ugExperimentsData from '../../../data/ug_experiments.json';
import { ContentShell, PageBody, PageHero } from '@/components/ui/PageChrome';

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
        <PageBody>
            <PageHero
                eyebrow="Open Day 2026"
                title="UG Experiments"
                subtitle="Explore interactive experiments presented by the undergraduate student clubs of IISc."
                image="/assets/IMG_9389.JPG"
            />
            <ContentShell>
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
            </ContentShell>
        </PageBody>
    );
}
