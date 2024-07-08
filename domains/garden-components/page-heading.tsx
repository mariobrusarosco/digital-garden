import { GoBack } from "./go-back";

const PageHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-center justify-between gap-y-4 my-6 text-wenge">
    <div>
      <h1 className="text-3xl font-serif font-thin uppercase">{title}</h1>
      {subtitle && <p className="text-lg text-wenge">{subtitle}</p>}
    </div>
    <GoBack label="back" />
  </div>
);

export { PageHeading };
