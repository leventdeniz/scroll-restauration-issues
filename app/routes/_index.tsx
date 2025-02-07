import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <ul>
        <li>
          <Link viewTransition to="/step1">
            step1
          </Link>
        </li>
        <li>
          <Link viewTransition to="/step2">
            step2
          </Link>
        </li>
        <li>
          <Link viewTransition to="/step3">
            step3
          </Link>
        </li>
      </ul>
    </main>
  );
}
