import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { PageHeading } from "@/domains/garden-components/page-heading";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import topics from "@/metadata-topics.json";
import Link from "next/link";

type Props = {
  params: {
    topic: string;
  };
};

const notesByTopic = topics as { [key: string]: string[] };

export default async function TopicScreen({ params }: Props) {
  const topicNotes = notesByTopic[params.topic];
  const normalizedTopic = removeHyphens(params.topic);

  return (
    <div data-ui="screen-topic" className="global-spacing">
      <PageHeading title={normalizedTopic} />

      <div className="list-of-notes">
        <ul className="mt-10 grid gap-y-8 md:grid-cols-2">
          {topicNotes.map((filename: string) => {
            const noteSlug = filename.split(".mdx")[0];
            const normalizedNote = removeHyphens(noteSlug);

            return (
              <li
                key={noteSlug}
                className="flex items-center gap-x-6 cursor-pointer"
              >
                <IconLeaf className="w-4" />
                <Link
                  href={`./${params.topic}/note/${noteSlug}`}
                  className="text-wenge font-serif font-thin text-xl"
                >
                  {normalizedNote}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
