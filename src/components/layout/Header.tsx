"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

type DropItem = {
    title: string;
    desc?: string;
    href: string;
    isNew?: boolean;
    external?: boolean;
};

const Chevron = () => (
    <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 6 8 10 12 6" />
    </svg>
);

const ExtIcon = () => (
    <svg style={{ width: 10, height: 10, opacity: 0.55, flexShrink: 0 }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 10L10 2M10 2H6M10 2v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const courseItems: DropItem[] = [
    { title: "Shared Curriculum", desc: "Semesters 1-3", href: "/course-structure/shared-curriculum" },
    { title: "Biology", desc: "Major discipline", href: "/course-structure/biology" },
    { title: "Chemistry", desc: "Major discipline", href: "/course-structure/chemistry" },
    { title: "Physics", desc: "Major discipline", href: "/course-structure/physics" },
    { title: "Mathematics", desc: "Major discipline", href: "/course-structure/mathematics" },
    { title: "Earth & Environmental Science", desc: "Major discipline", href: "/course-structure/earth-environmental-science" },
];

const admissionsItems: DropItem[] = [
    { title: "News and Updates", href: "/admissions/news-and-updates", isNew: true },
    { title: "Important Dates", href: "/admissions/important-dates" },
    { title: "Selection Process", href: "/admissions/selection-process" },
    { title: "Fee Structure", href: "/admissions/fee-structure" },
    { title: "FAQ", href: "/admissions/faq" },
    { title: "Apply Online", href: "https://admissions-august.iisc.ac.in/index.html", external: true },
];

const studentItems: DropItem[] = [
    { title: "Student Handbook", href: "/student-handbook" },
    { title: "Campus Life", href: "/campus-life" },
    { title: "Academic Calendar", href: "/assets/UG Academic Calendar Jan-Apr 2026 (2).pdf", external: true },
    { title: "Placements", href: "https://occap.iisc.ac.in/", external: true },
    { title: "Student Council", href: "https://scouncil.iisc.ac.in/", external: true },
    { title: "Health Center", href: "https://www.iisc.ac.in/health-centre/", external: true },
];

const openDayItems: DropItem[] = [
    { title: "UG Experiments", href: "/open-day/ug-experiments" },
    { title: "Open Day Map", href: "/open-day/map" },
    { title: "Green Open Day", href: "/open-day/green" },
];

const peopleItems: DropItem[] = [
    { title: "Deans", href: "/people/deans" },
    { title: "Coordinators", href: "/people/coordinators" },
    { title: "UG Instructors", href: "/people/instructors" },
    { title: "Teaching Assistants", href: "/people/teaching-assistants" },
];

const DropPanel = ({ items, wide = false, onClose }: { items: DropItem[]; wide?: boolean; onClose: () => void }) => (
    <div className={`${styles.dropdown} ${wide ? styles.dropdownWide : ''}`}>
        {items.map((item) => {
            const content = (
                <>
                    <span className={styles.dropItemTop}>
                        <span className={styles.dropItemTitle}>{item.title}</span>
                        {item.isNew && <span className={styles.badge}>New</span>}
                        {item.external && <ExtIcon />}
                    </span>
                    {item.desc && <span className={styles.dropItemDesc}>{item.desc}</span>}
                </>
            );

            return item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.dropItem} onClick={onClose}>
                    {content}
                </a>
            ) : (
                <Link key={item.href} href={item.href} className={styles.dropItem} onClick={onClose}>
                    {content}
                </Link>
            );
        })}
    </div>
);

const NavDropdown = ({ label, items, wide = false }: { label: string; items: DropItem[]; wide?: boolean }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLLIElement>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const close = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);

    return (
        <li
            ref={ref}
            className={`${styles.navItem} ${open ? styles.navItemOpen : ''}`}
            onMouseEnter={() => {
                if (timer.current) clearTimeout(timer.current);
                setOpen(true);
            }}
            onMouseLeave={() => {
                timer.current = setTimeout(() => setOpen(false), 120);
            }}
        >
            <button className={styles.navBtn} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
                {label}
                <Chevron />
            </button>
            {open && <DropPanel items={items} wide={wide} onClose={() => setOpen(false)} />}
        </li>
    );
};

const MobileAccordion = ({
    id,
    label,
    items,
    activeSection,
    onToggle,
    onClose,
}: {
    id: string;
    label: string;
    items: DropItem[];
    activeSection: string | null;
    onToggle: (id: string) => void;
    onClose: () => void;
}) => {
    const isOpen = activeSection === id;

    return (
        <div className={styles.mobileAccordion}>
            <button
                className={`${styles.mobileAccordionBtn} ${isOpen ? styles.mobileAccordionBtnOpen : ''}`}
                onClick={() => onToggle(id)}
            >
                {label}
                <svg className={`${styles.mobileChevron} ${isOpen ? styles.mobileChevronOpen : ''}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="4 6 8 10 12 6" />
                </svg>
            </button>
            <div className={`${styles.mobileAccordionBody} ${isOpen ? styles.mobileAccordionBodyOpen : ''}`}>
                {items.map((item) => item.external ? (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.mobileSubLink} onClick={onClose}>
                        {item.title}
                        {item.external && <ExtIcon />}
                    </a>
                ) : (
                    <Link key={item.href} href={item.href} className={styles.mobileSubLink} onClick={onClose}>
                        {item.title}
                        {item.isNew && <span className={styles.badge}>New</span>}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSection, setMobileSection] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const closeMobile = () => {
        setMobileOpen(false);
        setMobileSection(null);
    };

    const toggleMobileSection = (id: string) => {
        setMobileSection((value) => value === id ? null : id);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.brand} onClick={closeMobile}>
                    <div className={styles.logoWrap}>
                        <Image
                            src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal.jpg"
                            alt="IISc Logo"
                            fill
                            sizes="50px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className={styles.brandText}>
                        <span className={styles.brandTitle}>Bachelor of Science (Research)</span>
                        <span className={styles.brandSub}>Indian Institute of Science Bangalore</span>
                    </div>
                </Link>

                <nav className={styles.desktopNav} aria-label="Main navigation">
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/" className={styles.navLink}>Home</Link>
                        </li>
                        <NavDropdown label="Course Structure" items={courseItems} wide />
                        <NavDropdown label="Admissions" items={admissionsItems} />
                        <NavDropdown label="Student Corner" items={studentItems} />
                        <li className={styles.navItem}>
                            <Link href="/fellowships" className={styles.navLink}>Fellowships</Link>
                        </li>
                        <NavDropdown label="Open Day" items={openDayItems} />
                        <NavDropdown label="People" items={peopleItems} />
                        <li className={styles.navItem}>
                            <Link href="/contact" className={`${styles.navLink} ${styles.contactBtn}`}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMobileOpen((value) => !value)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {mobileOpen && <div className={styles.mobileBackdrop} onClick={closeMobile} aria-hidden />}

            <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
                <div className={styles.mobileDrawerInner}>
                    <div className={styles.mobileDrawerHeader}>
                        <span className={styles.mobileDrawerTitle}>Menu</span>
                        <button className={styles.mobileCloseBtn} onClick={closeMobile} aria-label="Close menu">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <nav className={styles.mobileNav}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMobile}>Home</Link>
                        <MobileAccordion id="courses" label="Course Structure" items={courseItems} activeSection={mobileSection} onToggle={toggleMobileSection} onClose={closeMobile} />
                        <MobileAccordion id="admissions" label="Admissions" items={admissionsItems} activeSection={mobileSection} onToggle={toggleMobileSection} onClose={closeMobile} />
                        <MobileAccordion id="student" label="Student Corner" items={studentItems} activeSection={mobileSection} onToggle={toggleMobileSection} onClose={closeMobile} />
                        <Link href="/fellowships" className={styles.mobileLink} onClick={closeMobile}>Fellowships</Link>
                        <MobileAccordion id="open-day" label="Open Day" items={openDayItems} activeSection={mobileSection} onToggle={toggleMobileSection} onClose={closeMobile} />
                        <MobileAccordion id="people" label="People" items={peopleItems} activeSection={mobileSection} onToggle={toggleMobileSection} onClose={closeMobile} />
                        <Link href="/contact" className={`${styles.mobileLink} ${styles.mobileLinkContact}`} onClick={closeMobile}>Contact Us</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
