import PlaceholderList from "@/components/people/lists/PlaceholderList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function StandaloneOfficeStaffPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="People"
                title="Office Staff"
                subtitle="Supporting the administrative needs of the programme."
                image="/assets/IMG_9485.JPG"
                backHref="/people"
                backLabel="Back to People"
            />
            <ContentShell>
                <PlaceholderList name="Office Staff" />
            </ContentShell>
        </PageBody>
    );
}
