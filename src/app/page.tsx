import HomePage from "@/components/HomePage";
import Page from "@/components/Page";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
      <>
        <Page>
          <HomePage/>
        </Page>
        <Analytics/>
      </>
    )
}
