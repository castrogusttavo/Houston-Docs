'use client'

import { Article } from '@/components/docs/Article'
import { ListItem, UnorderedList } from '@/components/docs/article/List'
import {
  Breadcrumbs,
  Pagination,
  PaginationButton,
} from '@/components/docs/article/Location'
import {
  Anchor,
  DateBlock,
  H1,
  H2,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'

export default function ApplicationIntegrationPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Best Practice', 'Application Integration']} />
          <H1 id="application-integration">
            Application Integration Best Practices{' '}
            <Anchor href="#application-integration" />
          </H1>
          <Paragraph>
            Integrating icons into your application is not just about choosing
            the right visuals; it&apos;s also about ensuring they enhance
            usability, maintain consistency, and align with your brand. This
            guide provides best practices for incorporating Houston Icons into
            your application effectively.
          </Paragraph>
          <H2 id="consistency-is-key">
            Consistency is Key <Anchor href="#consistency-is-key" />
          </H2>
          <Paragraph>
            Ensure consistent use of icons throughout your application.
            Consistency in icon style (e.g., outline, filled), size, and color
            enhances the user experience and reinforces your brand identity.
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Style Consistency:</strong> Stick to a single variant
              (e.g., stroke, solid) across all icons to maintain a cohesive
              look.
            </ListItem>
            <ListItem>
              <strong>Size Consistency:</strong> Use consistent icon sizes for
              similar elements across your application. For example, all icons
              in your navigation bar should be the same size.
            </ListItem>
            <ListItem>
              <strong>Color Consistency:</strong> Use your brand colors for
              icons when appropriate, but ensure they are legible against their
              background.
            </ListItem>
          </UnorderedList>
          <H2 id="enhance-usability">
            Enhance Usability <Anchor href="#enhance-usability" />
          </H2>
          <Paragraph>
            Icons should make your application more intuitive and accessible to
            users. Follow these guidelines to enhance usability:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Descriptive Icons:</strong> Choose icons that clearly
              communicate their function or meaning to avoid confusion.
            </ListItem>
            <ListItem>
              <strong>Labels:</strong> Accompany icons with text labels for
              critical actions, especially if the icon&apos;s meaning might not
              be immediately obvious to all users.
            </ListItem>
            <ListItem>
              <strong>Accessible Design:</strong> Ensure icons are accessible to
              users with disabilities.
            </ListItem>
          </UnorderedList>
          <H2 id="keep-your-icon-library">
            Keep Your Icon Library Updated
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            Houston Icon regularly updates its library with new icons and
            features. Stay up-to-date with these releases to take advantage of
            the latest designs and improvements.
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Regular Updates:</strong> Check for updates to the Houston
              Icons library and incorporate them into your application to keep
              your icon set fresh and relevant.
            </ListItem>
          </UnorderedList>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/features/icon-library" orientation="left">
              Icon Library
            </PaginationButton>
            <PaginationButton
              href="/best-practice/icon-selection"
              orientation="right"
            >
              Icon Selection
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="consistency-is-key">Consistency is Key</Link>
          <Link href="enhance-usability">Enhance Usability</Link>
          <Link href="keep-your-icon-library">Keep Your Icon Library</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
