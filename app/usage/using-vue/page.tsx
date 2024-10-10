'use client'

import { Article } from '@/components/docs/Article'
import { Code, CodeBlock, CodeLine } from '@/components/docs/article/Code'
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

export default function VueUsagePage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Usage', 'Using Vue']} />
          <H1 id="using-vue">
            Using Vue <Anchor href="#using-vue" />
          </H1>
          <Paragraph>
            Integrating Houston Icons into your Vue project is straightforward.
            This page will guide you through the process of using Houston Icons
            Vue components in your application.
          </Paragraph>
          <H2 id="import-an-icon">
            Import an Icon <Anchor href="#import-an-icon" />
          </H2>
          <Paragraph>
            Once installed, you can import icons directly into your Vue
            components:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-700 dark:text-red-400">
                import{' '}
                <span className="text-grey-800 dark:text-white">
                  &#123; Home01Icon &#125;
                </span>{' '}
                <span className="text-red-700 dark:text-red-400">from</span>{' '}
                <span className="text-green-800 dark:text-green-500">
                  &apos;@houstonicons/vue&apos;
                </span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="rendering-an-icon">
            Rendering an Icon <Anchor href="#rendering-an-icon" />
          </H2>
          <Paragraph>
            To render an icon, simply use it as a Vue component:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  script
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  setup=&quot;ts&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-red-700 dark:text-red-400 ml-8">
                import{' '}
                <span className="text-grey-800 dark:text-white">
                  &#123;Home01Icon&#125;
                </span>{' '}
                <span className="text-red-700 dark:text-red-400">from</span>
                <span className="text-green-800 dark:text-green-500">
                  {' '}
                  &apos;@houstonicons/vue&apos;
                </span>
                <span className="text-grey-800 dark:text-white">;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;/
                <span className="text-green-800 dark:text-green-500">
                  script
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <br />
            <CodeLine>
              <span className="text-red-700 dark:text-red-400">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  template
                </span>{' '}
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-8">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  color
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;navy&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  :size
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-blue-800 dark:text-blue-300">32</span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  variant
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;duotone&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  type
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;rounded&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span>/&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;/
                <span className="text-green-800 dark:text-green-500">
                  template
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <Paragraph>
            In the example above, the <Code>Home01Icon</Code> component is
            included in a function component with a custom size and color.
          </Paragraph>
          <H2 id="customizing-icons">
            Customizing Icons <Anchor href="#customizing-icons" />
          </H2>
          <Paragraph>
            You can customize icons further by using the variant and type
            properties:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  color
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;navy&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  :size
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-blue-800 dark:text-blue-300">32</span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  variant
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;duotone&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  type
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;rounded&quot;
                  </span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span>/&#62;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <Paragraph>
            By following these steps, you can effectively utilize Houston Icons
            in your Vue application, enhancing your project&apos;s design with
            beautiful icons.
          </Paragraph>
          <Paragraph>
            This guide covers the basics of using the Houston Icons package with
            Vue: installation, importing, rendering, and customizing icons.
            Adjust the code examples to fit the exact syntax and usage patterns
            of the <Code>@houstonicons/vue</Code> package.
          </Paragraph>
          <DateBlock dateTime="Oct, 09, 2024">Oct, 09, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/usage/using-react" orientation="left">
              Using React
            </PaginationButton>
            <PaginationButton href="/usage/using-angular" orientation="right">
              Using Angular
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="import-an-icon">Import an Icon</Link>
          <Link href="rendering-an-icon">Rendering an Icon</Link>
          <Link href="customizing-icons">Customizing Icons</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
