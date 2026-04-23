'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { ContentShell, PageBody, PageHero } from '@/components/ui/PageChrome';

export default function OpenDayMapPage() {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <PageBody>
            <PageHero
                eyebrow="Open Day 2026"
                title="Open Day Map"
                subtitle="Find the UG programme location and download the high-resolution IISc Open Day map."
                image="/assets/IMG_9424.JPG"
            />
            <ContentShell>
                <div className={styles.mapSection}>
                    <div className={styles.mapContainer} onClick={() => setIsZoomed(!isZoomed)} style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}>
                        <div className={`${styles.imageWrapper} ${isZoomed ? styles.zoomed : ''}`}>
                            <Image
                                src="/images/map_final_2026.jpg"
                                alt="IISc Open Day Map 2026 highlighting UG Prog"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles.instructions}>
                        <p>Click on the map to {isZoomed ? 'zoom out' : 'zoom in'}. You can find the <strong>UG Prog</strong> position locally marked on the map.</p>
                        <a href="/images/map_final_2026.jpg" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 20, height: 20 }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download High-Res Map
                        </a>
                    </div>
                </div>
            </ContentShell>
        </PageBody>
    );
}
