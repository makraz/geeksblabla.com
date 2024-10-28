import type { ArticleFrontmatter } from "@/content/shema";
// import { transformDateToLocaleString } from "@/lib/utils";

export interface Props {
  href?: string;
  frontmatter: ArticleFrontmatter;
  fullWidth?: boolean;
  minutesRead?: string;
}

export default function Card({ href, frontmatter, fullWidth = false }: Props) {
  const { title, description, author, ogImage, slug } = frontmatter;
  const imageUrl = ogImage ? ogImage : `/blog/${slug}.png`;
  return (
    <div className="group border-b border-neutral-300 pb-8 pt-6">
      {fullWidth && (
        <div>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="flex h-full flex-col border-neutral-300 group-odd:border-r group-odd:pr-4 group-even:pl-4">
        {/* <div className="flex justify-between pb-4 text-xs">
          <p>{transformDateToLocaleString(pubDatetime)}</p>
          <p>{minutesRead}</p>
        </div> */}
        <div className="flex flex-1 flex-row justify-between">
          <a href={href} className="block text-label-lg">
            <h2 className="text-label-lg">{title}</h2>
          </a>
        </div>
        <p className="mb-4 line-clamp-2 text-paragraph-sm text-neutral-dark-20">
          {description} {description}
        </p>

        <div className="flex items-start">
          <svg
            width="10"
            height="9"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M0.4 -9.53674e-07H1.6V16.4H7.2V17.6H0.4V-9.53674e-07ZM6.79219 17.6V16.4H19.1922V17.6H6.79219Z"
              fill="#292D33"
            ></path>
          </svg>
          <div className="flex-1 pl-1">
            <p className="mb-4 text-paragraph-sm text-neutral-dark-50">
              {author}
            </p>
          </div>
        </div>
        <a href={href} className="text-label-md font-bold underline">
          Read more
        </a>
      </div>
    </div>
  );
}
