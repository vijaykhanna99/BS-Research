import DeansList from "@/components/people/lists/DeansList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function StandaloneDeansPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="People"
                title="Deans"
                subtitle="Meet the leadership supporting the Bachelor of Science (Research) Programme."
                image="/assets/IMG_9485.JPG"
                backHref="/people"
                backLabel="Back to People"
            />
            <ContentShell>
                <DeansList />
            </ContentShell>
        </PageBody>
    );
}
