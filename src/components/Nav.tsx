// import data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className=" flex gap-x-10">
        {nav.map((item, idx) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={idx}>
              <a
                className="hover:text-accent transition"
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
