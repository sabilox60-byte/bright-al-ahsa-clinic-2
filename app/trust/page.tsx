import { redirect } from "next/navigation";

/**
 * /trust is deprecated — trust credentials now live as a banner strip
 * at the top of /reviews. This redirect preserves any external links
 * (Google, directories, old QR codes) pointing at /trust.
 */
export default function TrustRedirect() {
  redirect("/reviews");
}
