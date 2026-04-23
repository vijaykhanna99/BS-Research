import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

type PageHeroProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    image?: string;
    backHref?: string;
    backLabel?: string;
};

export function PageHero({ eyebrow, title, subtitle, image, backHref, backLabel = "Back" }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-slate-950">
            {image && (
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-55"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/64 to-[#001c41]/35" />
            <div className="section-shell relative z-10 py-16 md:py-20">
                {backHref && (
                    <Link
                        href={backHref}
                        className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/18 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {backLabel}
                    </Link>
                )}
                {eyebrow && (
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur">
                        {eyebrow}
                    </span>
                )}
                <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}

export function PageBody({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <main className={`min-h-screen bg-slate-50 ${className}`}>
            {children}
        </main>
    );
}

export function ContentShell({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`section-shell py-12 md:py-16 ${className}`}>
            {children}
        </div>
    );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
    return (
        <div className="mb-8">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            <h2 className="section-title mt-3">{title}</h2>
            {subtitle && <p className="section-copy mt-4 max-w-3xl text-base">{subtitle}</p>}
        </div>
    );
}
