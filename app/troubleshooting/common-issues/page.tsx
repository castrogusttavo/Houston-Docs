'use client'

import { Article } from '@/components/docs/Article'
import { Code, CodeBlock, CodeLine } from '@/components/docs/article/Code'
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@/components/docs/article/List'
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

export default function CommonIssuesPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-900 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Troubleshooting', 'Common Issues']} />
          <H1 id="common-issues">
            Troubleshooting: Common Issues <Anchor href="#common-issues" />
          </H1>
          <Paragraph>
            When integrating and using Houston Icons in your projects, you might
            encounter some common issues. This guide aims to address these
            problems, providing solutions to ensure a smooth experience with
            HugeIcons.
          </Paragraph>
          <H2 id="icons-not-rendering">
            Icons Not Rendering <Anchor href="#icons-not-rendering" />
          </H2>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <UnorderedList>
            <ListItem>Icons do not appear in your application.</ListItem>
            <ListItem>
              Icons are replaced by a blank space or broken image icon.
            </ListItem>
          </UnorderedList>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <OrderedList>
            <ListItem>
              <strong>Check the imports:</strong> Ensure that the icon
              components are correctly imported from the{' '}
              <Code>@houstonicons/react</Code>, <Code>@houstonicons/vue</Code>,{' '}
              <Code>@houstonicons/angular</Code> or any other frameworks
              package.
              <CodeBlock>
                <CodeLine>
                  <span className="text-red-400">
                    import{' '}
                    <span className="text-white">&#123; Home01Icon &#125;</span>{' '}
                    <span className="text-red-400">from</span>{' '}
                    <span className="text-green-500">
                      &apos;@houstonicons/react&apos;
                    </span>
                  </span>
                </CodeLine>
              </CodeBlock>
            </ListItem>
            <ListItem>
              <strong>Verify Icon Names:</strong> Make sure the icon names in
              the import statement match the exact names provided by HugeIcons.
              Pay attention to spelling and case sensitivity.
            </ListItem>
            <ListItem>
              <strong>Check for Typos in Properties:</strong> Incorrectly
              spelled or unsupported properties can prevent icons from rendering
              correctly.
            </ListItem>
          </OrderedList>
          <H2 id="icons-displaying-incorrectly">
            Icons Displaying Incorrectly{' '}
            <Anchor href="#icons-displaying-incorrectly" />
          </H2>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <UnorderedList>
            <ListItem>
              Icons appear distorted, the wrong color, or the wrong size.
            </ListItem>
          </UnorderedList>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <OrderedList>
            <ListItem>
              <strong>Review Icon Properties:</strong> Double-check the size,
              color, and other properties passed to the icon component.
              Incorrect values could cause the icon to display improperly.
            </ListItem>
            <ListItem>
              <strong>Use Supported Properties:</strong> Ensure you&apos;re
              using properties supported by the specific icon variant. For
              example, the type property might not be applicable to all
              variants.
            </ListItem>
          </OrderedList>
          <H2 id="performance-issues">
            Performance Issues <Anchor href="#performance-issues" />
          </H2>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <UnorderedList>
            <ListItem>
              Slow loading times or lag when icons are used extensively.
            </ListItem>
          </UnorderedList>
          <Paragraph>
            <strong>Symptoms:</strong>
          </Paragraph>
          <OrderedList>
            <ListItem>
              <strong>Optimize Icon Usage:</strong> Import only the icons you
              need instead of importing the entire icon library. This reduces
              bundle size and improves performance.
            </ListItem>
            <ListItem>
              <strong>Lazy Load Icons:</strong> If your application uses a large
              number of icons, consider lazy loading icons that are not
              immediately visible to the user.
            </ListItem>
          </OrderedList>
          <DateBlock dateTime="Oct, 08, 2024">Oct, 08, 2024</DateBlock>
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
          <Link href="icons-not-rendering">Icons Not Rendering</Link>
          <Link href="icons-displaying-incorrectly">
            Icons Displaying Incorrectly
          </Link>
          <Link href="performance-issues">Performance Issues</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
