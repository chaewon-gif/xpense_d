// import data
import { footer } from "../data";

// import components
import Copyright from "./Copyright";

const Footer = () => {
  // destructure footer data
  const { logo, links, newsletter, form } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div>
            <img
              src={logo}
              alt=""
            />
          </div>
          {/* list 1 */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3 ">
              {links.map((item, idx) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li>
                    <a
                      className="font-medium hover:text-accent transition"
                      key={idx}
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list 2*/}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3 ">
              {links.map((item, idx) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li>
                    <a
                      className="font-medium hover:text-accent transition"
                      key={idx}
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">{newsletter.title}</div>
            <div className="text-xl text-light mb-[18px]">{newsletter.subtitle}</div>
            {/* form */}
            <form className="max-w-[349px] mb-[10px]">
              {" "}
              <div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                  type="text"
                  placeholder={form.placeholder}
                />
                <button className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className="text-sm text-light">{form.smallText}</span>
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
