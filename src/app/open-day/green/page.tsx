'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const BASE = 'https://openday.iisc.ac.in';

const languages = [
    { id: 'kan', label: '🇮🇳 ಕನ್ನಡ', alt: 'Kannada Poster', src: `${BASE}/images/green/Green-OD2026-Kan.jpg` },
    { id: 'hin', label: '🇮🇳 हिंदी', alt: 'Hindi Poster', src: `${BASE}/images/green/Green-OD2026-Hin.jpg` },
    { id: 'eng', label: '🇬🇧 English', alt: 'English Poster', src: `${BASE}/images/green/Green-OD2026-Eng.jpg` },
];

export default function GreenOpenDayPage() {
    const [activeLang, setActiveLang] = useState('kan');

    const activePoster = languages.find(l => l.id === activeLang)!;

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <span>🌱</span> Green Open Day 2026
                    </h1>
                    <p className={styles.subtitle}>
                        Join us in our initiative towards a sustainable and eco-friendly IISc Open Day.
                        Let&apos;s act responsibly and cherish our environment.
                    </p>
                </header>

                <div className={styles.contentSection}>
                    {/* Video */}
                    <h2 className={styles.sectionTitle}>A Message for Sustainability</h2>
                    <div className={styles.videoContainer}>
                        <video
                            controls
                            className={styles.videoPlayer}
                            poster={`${BASE}/images/green/Green-OD2026-Eng.jpg`}
                        >
                            <source src={`${BASE}/videos/VID-20260218-WA0001.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Language tab posters */}
                    <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>
                        Green Open Day Initiatives
                    </h2>

                    {/* Tab buttons */}
                    <div className={styles.langTabs}>
                        {languages.map(lang => (
                            <button
                                key={lang.id}
                                className={`${styles.langTab} ${activeLang === lang.id ? styles.langTabActive : ''}`}
                                onClick={() => setActiveLang(lang.id)}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* Poster image */}
                    <div className={styles.posterContainer}>
                        <Image
                            key={activePoster.src}
                            src={activePoster.src}
                            alt={activePoster.alt}
                            width={1200}
                            height={1600}
                            className={styles.posterImage}
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
