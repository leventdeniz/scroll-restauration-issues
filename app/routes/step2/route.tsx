import { Link } from "@remix-run/react";

export const loader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {};
};

export default function Route() {
  return (
    <main>
      <ul className="p-2 gap-2 flex flex-col text-white">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="h-64 bg-gray-600 odd:bg-gray-500 rounded block">
            <Link className="size-full flex justify-center items-center text-7xl" viewTransition to="/step3">
              3
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
