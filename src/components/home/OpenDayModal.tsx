'use client';

import React, { useState, useEffect } from 'react';
import styles from './OpenDayModal.module.css';

const MAPS_URL =
    'https://www.google.com/maps/dir/?api=1&destination=Old+Physics+Building,+2H88%2BQ9R,+Gulmohar+Marg,+Mathikere,+Bengaluru,+Karnataka+560012';

export default function OpenDayModal() {
    const [open, setOpen] = useState(false);

    // Show slightly after mount to avoid synchronous setState warning
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    if (!open) return null;

    return (
        <div className={styles.backdrop} onClick={() => setOpen(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>

                {/* Close */}
                <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
                    ✕
                </button>

                {/* Top header row */}
                <div className={styles.headerRow}>
                    <div className={styles.badge}>🌿 IISc Open Day 2026</div>
                    <div className={styles.dateBadge}>📅 07 March 2026 • 9:00 AM - 5:30 PM</div>
                </div>

                <h2 className={styles.heading}>
                    Come Visit the&nbsp;
                    <span className={styles.highlight}>UG Programme</span>&nbsp;Exhibits!
                </h2>

                <p className={styles.body}>
                    Explore fascinating interactive experiments and demonstrations presented by
                    IISc&apos;s undergraduate student clubs — from robotics and chemistry to
                    astronomy, biology, and beyond.
                </p>

                {/* Location box */}
                <div className={styles.locationBox}>
                    <span className={styles.locationIcon}>📍</span>
                    <div>
                        <p className={styles.locationTitle}>Old Physics Building</p>
                        <p className={styles.locationSub}>Near JRD Tata Memorial Library, IISc Campus, Bengaluru</p>
                    </div>
                </div>

                {/* CTA buttons */}
                <div className={styles.actions}>
                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionBtn}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Get Directions
                    </a>
                    <a href="/open-day/ug-experiments" className={styles.exploreBtn} onClick={() => setOpen(false)}>
                        View UG Experiments →
                    </a>
                </div>
            </div>
        </div>
    );
}
