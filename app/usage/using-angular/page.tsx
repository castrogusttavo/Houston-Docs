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

export default function AngularUsagePage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Usage', 'Using Angular']} />
          <H1 id="using-angular">
            Using Angular <Anchor href="#using-angular" />
          </H1>
          <Paragraph>
            Integrating Houston Icons into your Angular project is
            straightforward. This page will guide you through the process of
            using Houston Icons Angular components in your application.
          </Paragraph>
          <H2 id="import-an-module">
            Import an Module <Anchor href="#import-an-module" />
          </H2>
          <Paragraph>
            Once installed, in your <Code>.component.ts</Code> you will be able
            to import HoustonIconsModule, and individual icons from the{' '}
            <Code>@houstonicons/angular</Code> package:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-700 dark:text-red-400">
                import{' '}
                <span className="text-grey-800 dark:text-white">
                  &#123; HoustonIconsModule &#125;
                </span>{' '}
                <span className="text-red-700 dark:text-red-400">from</span>{' '}
                <span className="text-green-800 dark:text-green-500">
                  &apos;@houstonicons/angular&apos;
                </span>
              </span>
            </CodeLine>
            <br />
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                @NgModule <span>&#123;&#40;</span>
                <br />
                <span className="text-red-700 dark:text-red-400 ml-8">
                  imports:
                </span>{' '}
                <span className="text-orange-600 dark:text-orange-300">
                  [...,HoustonIconsModule]
                </span>
                <span className="text-grey-800 dark:text-white">,</span>
                <br />
                <span>&#41;&#125;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="rendering-an-icon">
            Rendering an Icon <Anchor href="#rendering-an-icon" />
          </H2>
          <Paragraph>
            To render an icon, simply use it as a Angular component:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-green-800 dark:text-green-500">div</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-4">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  houston-home-01-icon
                </span>{' '}
                <br />
                <div className="ml-4">
                  <span className="text-blue-800 dark:text-blue-300">
                    [size]
                    <span className="text-red-700 dark:text-red-400">=</span>
                    <span className="text-orange-600 dark:text-orange-300">
                      &quot;48&quot;
                    </span>
                  </span>{' '}
                </div>
                <div className="ml-4">
                  <span className="text-blue-800 dark:text-blue-300">
                    [variant]
                    <span className="text-red-700 dark:text-red-400">=</span>
                    <span className="text-orange-600 dark:text-orange-300">
                      &quot;&apos;solid&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <div className="ml-4">
                  <span className="text-blue-800 dark:text-blue-300">
                    [type]
                    <span className="text-red-700 dark:text-red-400">=</span>
                    <span className="text-orange-600 dark:text-orange-300">
                      &quot;&apos;rounded&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <div className="ml-4">
                  <span className="text-blue-800 dark:text-blue-300">
                    [color]
                    <span className="text-red-700 dark:text-red-400">=</span>
                    <span className="text-orange-600 dark:text-orange-300">
                      &quot;&apos;#FFFFFF&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <span className="text-grey-800 dark:text-white">/&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;/
                <span className="text-green-800 dark:text-green-500">div</span>
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
                  houston-home-01-icon
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  [size]
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-orange-600 dark:text-orange-300">
                    &quot;48&quot;
                  </span>
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  [variant]
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-orange-600 dark:text-orange-300">
                    &quot;&apos;solid&apos;&quot;
                  </span>
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  [type]
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-orange-600 dark:text-orange-300">
                    &quot;&apos;rounded&apos;&quot;
                  </span>
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  [color]
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-orange-600 dark:text-orange-300">
                    &quot;&apos;#FFFFFF&apos;&quot;
                  </span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <Paragraph>
            By following these steps, you can effectively utilize Houston Icons
            in your Angular application, enhancing your project&apos;s design
            with beautiful icons.
          </Paragraph>
          <Paragraph>
            This guide covers the basics of using the Houston Icons package with
            Angular: installation, importing, rendering, and customizing icons.
            Adjust the code examples to fit the exact syntax and usage patterns
            of the <Code>@houstonicons/angular</Code> package.
          </Paragraph>
          <DateBlock dateTime="Oct, 09, 2024">Oct, 09, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/usage/using-vue" orientation="left">
              Using Vue
            </PaginationButton>
            <PaginationButton href="/usage/using-ionic" orientation="right">
              Using Ionic
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
