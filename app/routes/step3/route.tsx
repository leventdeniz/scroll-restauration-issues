import { Link } from "@remix-run/react";

export const loader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {};
};

export default function Route() {
  return (
    <main>
      <ul className="p-2 gap-2 flex flex-col">
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li className="h-64 bg-gray-900 odd:bg-gray-800 rounded block">
          <Link className="block size-full" viewTransition to="/step1">
            step1
          </Link>
        </li>
      </ul>
    </main>
  );
}
