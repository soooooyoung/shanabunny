import Image from "next/image";

export default function PostItem({ ...props }) {
  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-500 before:ring-4 before:ring-rose-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">
              {/* <PostDate dateString={props.publishedAt} /> */}
            </span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.cyan.400/.3),theme(colors.purple.300),theme(colors.pink.400/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300/60 via-purple-500 to-pink-400/60 leading-8 pb-6">
              {props.Title}
            </h2>
          </header>
          <figure className="bg-gradient-to-b from-rose-200/20 to-transparent rounded-3xl p-px mb-8">
            {/* <Image
              className="w-full rounded-[inherit]"
              src={props.image}
              width={574}
              height={326}
              alt={props.title}
            /> */}
          </figure>
          <p className="text-pink-300">{props.Content}</p>
        </div>
      </div>
    </article>
  );
}
