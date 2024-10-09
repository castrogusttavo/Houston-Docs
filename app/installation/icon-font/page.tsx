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
  H3,
  LinkText,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'

export default function IconFontPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Installation', 'Icon Font']} />
          <H1 id="icon-font-installation">
            Icon Font Setup <Anchor href="#angular-package-installation" />
          </H1>
          <Paragraph>
            Copy CDN the pro icon font from the{' '}
            <LinkText href="https://www.houstonicons.com.br/free-icon-font">
              Houston website
            </LinkText>{' '}
            Extract the zip file and copy the folder contents to the{' '}
            <Code>public/fonts</Code> folder in the project root.
          </Paragraph>
          <H2 id="usage">
            Usage <Anchor href="#usage" />
          </H2>
          <Paragraph>
            To use the icon font, add the following link tag to the head of your
            HTML file.
          </Paragraph>
          <H3 id="html">
            HTML <Anchor href="#html" />
          </H3>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;!
                <span className="text-green-800 dark:text-green-500">
                  DOCTYPE
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  html
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  html
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  lang
                </span>
                {''}
                <span className="text-red-700 dark:text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;en&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-8">
                &#60;
                <span className="text-green-800 dark:text-green-500">head</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  meta
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  charset
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;UTF-8&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  meta
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  name
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;viewport&quot;
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  content
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;width=device-width, initial-scale=1.0&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  meta
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  rel
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;stylesheet&quot;
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  href
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;public/font/houstonicons-font.css&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  title
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
                <span>Your website title</span>
                <span className="text-grey-800 dark:text-white">
                  &#60;/
                  <span className="text-green-800 dark:text-green-500">
                    title
                  </span>
                  <span className="text-grey-800 dark:text-white">&#62;</span>
                </span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-8">
                &#60;/
                <span className="text-green-800 dark:text-green-500">head</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-8">
                &#60;
                <span className="text-green-800 dark:text-green-500">body</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  i
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  class
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;hgi-stroke hgi-home-01&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
                <span className="text-grey-800 dark:text-white">
                  &#60;/
                  <span className="text-green-800 dark:text-green-500">i</span>
                  <span className="text-grey-800 dark:text-white">&#62;</span>
                </span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-12">
                &#60;
                <span className="text-green-800 dark:text-green-500">
                  i
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  class
                </span>
                {''}
                <span className="text-red-400">=</span>
                {''}
                <span className="text-green-800 dark:text-green-500">
                  &quot;hgi-stroke hgi-home-youtube&quot;
                </span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
                <span className="text-grey-800 dark:text-white">
                  &#60;/
                  <span className="text-green-800 dark:text-green-500">i</span>
                  <span className="text-grey-800 dark:text-white">&#62;</span>
                </span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white ml-8">
                &#60;/
                <span className="text-green-800 dark:text-green-500">body</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;/
                <span className="text-green-800 dark:text-green-500">html</span>
                <span className="text-grey-800 dark:text-white">&#62;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H3 id="browse-icons">
            Browse the icons:
            <Anchor href="#browse-icons" />
          </H3>
          <Paragraph>
            To browse the icons, and get the class names, open the{' '}
            <LinkText href="https://www.houstonicons.com.br/icons">
              Houston website.
            </LinkText>{' '}
            Click on the icon you want to use, and copy the class name from the{' '}
            <Code>FONT CLASS</Code> option to your <Code>i</Code> tag.
            application.
          </Paragraph>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton
              href="/installation/react-native-package"
              orientation="left"
            >
              React Native Page
            </PaginationButton>
            <PaginationButton href="/usage/customization" orientation="right">
              Customization
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="usage">Usage</Link>
          <ul className="ml-2">
            <Link href="html">HTML</Link>
            <Link href="browse-icons">Browse the icons</Link>
          </ul>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
