import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <div>The news page</div>
      <ul>
        <li>
          <Link href="/news/test-first-line">First Line</Link>
        </li>
        <li>Second Line</li>
        <li>Third Line</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
