/**
 * Render a JSON-LD <script> tag for structured data.
 *
 * Next.js App Router (v16): the recommended way to embed Schema.org is a raw
 * <script type="application/ld+json"> with dangerouslySetInnerHTML. This
 * component centralises serialisation so pages just pass an object or array.
 */
export default function JsonLd({ data, id }: { data: object | object[]; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
