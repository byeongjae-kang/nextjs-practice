import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  console.log(router);
  return <div>The detail page</div>;
}
export default DetailPage;
