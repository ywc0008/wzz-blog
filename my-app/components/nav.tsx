import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex w-full justify-between">
      <div>
        <Link className="text-primary" href="/">
          &lt;<span>WZZ</span>&gt;
        </Link>
      </div>
      <div>
        <Link href="/portfolio">Portfolio</Link>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Playground
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#">Canvas</Link>
            </li>
            <li>
              <Link href="#">Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
