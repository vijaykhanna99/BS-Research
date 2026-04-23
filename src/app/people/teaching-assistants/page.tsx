import TeachingAssistantsList from "@/components/people/lists/TeachingAssistantsList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function StandaloneTAPage() {
    return (
        <PageBody>
            <PageHero eyebrow="People" title="Teaching Assistants" image="/assets/IMG_9485.JPG" backHref="/people" backLabel="Back to People" />
            <ContentShell>
                <TeachingAssistantsList />
            </ContentShell>
        </PageBody>
    );
}
