import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import topics from "@/metadata-topics.json";
import Link from "next/link";

export default function TopicsScreen() {
  return (
    <main data-ui="screen-topics" className="global-spacing h-full">
      <section className="heading text-wenge mt-4 mb-10">
        <div className="flex font-light justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-5xl font-serif ">Topics</h2>
        </div>
      </section>

      <section data-ui="list-of-topics">
        <ul className="flex flex-wrap gap-x-3 gap-y-5 my-2 justify-center lg:gap-y-10">
          {Object.keys(topics).map((topic) => (
            <li key={topic}>
              <Link
                className="rounded-lg border border-wenge p-2 text-wenge uppercase font-sans font-light text-sm cursor-pointer w-max"
                href={`topics/${topic}`}
              >
                {removeHyphens(topic)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
