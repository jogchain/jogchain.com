export function TechStackSection(){
    return (
        <section className="flex flex-col items-center">
          <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
            Our Tech Stack:
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 text-zinc-600 dark:text-zinc-400">
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Python
            </li>
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Node
            </li>
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              C#
            </li>
          </ul>
        </section>
    )
}