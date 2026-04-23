import CoordinatorsList from "@/components/people/lists/CoordinatorsList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function StandaloneCoordinatorsPage() {
    return (
        <PageBody>
            <PageHero eyebrow="People" title="Coordinators" image="/assets/IMG_9485.JPG" backHref="/people" backLabel="Back to People" />
            <ContentShell>
                <CoordinatorsList />
            </ContentShell>
        </PageBody>
    );
}
