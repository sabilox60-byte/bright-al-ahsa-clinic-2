/**
 * SchemaInjector — type-safe wrapper around <script type="application/ld+json">.
 *
 * Server component. Drop into any page to inject one or more schema objects.
 *   <SchemaInjector schemas={[organizationLd("en"), websiteLd("en")]} />
 */

interface Props {
  schemas: Array<unknown | null | undefined>;
  id?: string;
}

export default function SchemaInjector({ schemas, id = "ld" }: Props) {
  const valid = schemas.filter(Boolean);
  if (valid.length === 0) return null;
  const payload = valid.length === 1 ? valid[0] : { "@context": "https://schema.org", "@graph": valid };
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
