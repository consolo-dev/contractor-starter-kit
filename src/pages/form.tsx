import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl, { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";

export default function Form(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();
  const { description } = customFields as { description: string };
  return (
    <Layout title={tagline} description={description}>
      <main>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrk120DnTuSmZO7t?backgroundColor=cyan"
          frameBorder="0"
          width="100%"
          height="1200"
        ></iframe>
      </main>
    </Layout>
  );
}
