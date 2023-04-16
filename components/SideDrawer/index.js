import Link from "next/link";

const SideDrawer = () => {
  return (
    <div>
      <nav className="side-drawer">
        <ul>
          <li>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
          <li>
            <Link href="/#Process">PROCESS</Link>
          </li>
          <li>
            <Link href="/#samplePortfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/#Packages">PACKAGES</Link>
          </li>
          <li>
            <Link href="/#TESTMONIALS">TESTIMONIALS</Link>
          </li>
          <li>
            <Link href="/video-strategy-session">
              <a>
                <span className="order__button">BOOK A STRATEGY SESSION</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
