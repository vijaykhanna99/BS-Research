import React from 'react';
import { ContentShell, PageBody, PageHero } from '@/components/ui/PageChrome';

export default function OpenDayPostersPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="Open Day 2026"
                title="Open Day Posters"
                subtitle="Scientific and creative posters from undergraduate programme activities."
                image="/assets/IMG_9389.JPG"
            />
            <ContentShell className="max-w-3xl">
                <div className="elevated-card p-10 text-center">
                <h2 className="section-title mb-4">Posters coming soon</h2>
                <p className="section-copy text-lg">
                    The scientific and creative posters for Open Day 2026 will be showcased here shortly. Check back soon for updates!
                </p>
                </div>
            </ContentShell>
        </PageBody>
    );
}
