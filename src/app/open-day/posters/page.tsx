import React from 'react';

export default function OpenDayPostersPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', maxWidth: '600px', width: '100%' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🖼️</div>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Open Day Posters</h1>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
                    The scientific and creative posters for Open Day 2026 will be showcased here shortly. Check back soon for updates!
                </p>
            </div>
        </main>
    );
}
