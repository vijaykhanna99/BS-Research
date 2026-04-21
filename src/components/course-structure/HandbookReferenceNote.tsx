export const STUDENT_HANDBOOK_URL = "/assets/UG-HandBook-25-26.pdf";

export default function HandbookReferenceNote() {
    return (
        <p className="mt-4 mb-8 text-sm text-gray-700">
            For more detailed information, please refer to the{" "}
            <a
                href={STUDENT_HANDBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline"
            >
                Student Handbook
            </a>
            .
        </p>
    );
}
