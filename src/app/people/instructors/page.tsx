import InstructorsList from "@/components/people/lists/InstructorsList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function StandaloneInstructorsPage() {
    return (
        <PageBody>
            <PageHero eyebrow="People" title="UG Instructors" image="/assets/IMG_9485.JPG" backHref="/people" backLabel="Back to People" />
            <ContentShell>
                <InstructorsList />
            </ContentShell>
        </PageBody>
    );
}
