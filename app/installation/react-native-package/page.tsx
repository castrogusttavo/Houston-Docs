'use client'

import { Article } from '@/components/docs/Article'
import { Code, CodeBlock, CodeLine } from '@/components/docs/article/Code'
import {
  Breadcrumbs,
  Pagination,
  PaginationButton,
  Tabs,
  TabsButton,
} from '@/components/docs/article/Location'
import {
  Anchor,
  DateBlock,
  H1,
  H2,
  H3,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'
import { useState } from 'react'

export default function ReactNativePackagePage() {
  const [activeTab, setActiveTab] = useState('default')

  const getCommandParts = () => {
    switch (activeTab) {
      case 'npm':
        return { command: 'npm i', package: '@houstonicons/react-native' }
      case 'yarn':
        return { command: 'yarn add', package: '@houstonicons/react-native' }
      case 'pnpm':
        return { command: 'pnpm add', package: '@houstonicons/react-native' }
      case 'bun':
        return { command: 'bun add', package: '@houstonicons/react-native' }
      default:
        return { command: 'npm i', package: '@houstonicons/react-native' }
    }
  }

  const { command, package: packageName } = getCommandParts()

  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Installation', 'React Package']} />
          <H1 id="react-package-installation">
            React Native Package Installation{' '}
            <Anchor href="#react-package-installation" />
          </H1>
          <Paragraph>
            To get started with the Houston Icons React Native package, you need
            to install it from npm or yarn.
          </Paragraph>
          <H2 id="installation">
            Installation <Anchor href="#installation" />
          </H2>
          <Paragraph>
            Follow the steps below to install the Houston Icons package and
            start using the icons in your React Native project.
          </Paragraph>
          <H3 id="get-npm-command">
            1. Get NPM Install Command: <Anchor href="#get-npm-command" />
          </H3>
          <Paragraph>
            Navigate to the NPM and copy command to install the{' '}
            <Code>@houstonicons/react-native</Code> package:
          </Paragraph>
          <Tabs>
            <TabsButton onClick={() => setActiveTab('npm')}>npm</TabsButton>
            <TabsButton onClick={() => setActiveTab('yarn')}>yarn</TabsButton>
            <TabsButton onClick={() => setActiveTab('pnpm')}>pnpm</TabsButton>
            <TabsButton onClick={() => setActiveTab('bun')}>bun</TabsButton>
          </Tabs>
          <CodeBlock>
            <CodeLine>
              <span className="text-purple-400">
                {command} <span className="text-orange-300">{packageName}</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H3 id="import-package-command">
            2. Import package in your project:
            <Anchor href="#import-package-command" />
          </H3>
          <Paragraph>
            In your React Native project, import the Houston Icons package and
            start using the icons in your application.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-400">
                import <span className="text-white">&#123;&#125;</span>{' '}
                <span className="text-red-400">from</span>{' '}
                <span className="text-green-500">
                  &apos;@houstonicons/react-native&apos;
                </span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="examples">
            Examples <Anchor href="#examples" />
          </H2>
          <Paragraph>
            Here&apos;s a quick example of how to use an icon in a React Native
            component:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-400">
                import <span className="text-white">React</span>{' '}
                <span className="text-red-400">from</span>{' '}
                <span className="text-green-500">&apos;react&apos;</span>
              </span>
            </CodeLine>
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
            <br />
            <CodeLine>
              <span className="text-red-400">
                function <span className="text-purple-400">App</span>
                {''}
                <span className="text-white">&#40;&#41; &#123;&#125;</span>{' '}
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-red-400 ml-4">
                return <span className="text-white">&#40;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-white ml-8">
                &#60;
                <span className="text-blue-300">View</span>
                <span className="text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-white ml-12">
                &#60;
                <span className="text-blue-300">Home01Icon</span>{' '}
                <span className="text-white">/&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-white ml-8">
                &#60;/
                <span className="text-blue-300">View</span>
                <span className="text-white">&#62;</span>
              </span>
            </CodeLine>
            <CodeLine>
              <span className="text-white ml-4">&#41;;</span>
            </CodeLine>
            <CodeLine>
              <span className="text-white">&#125;</span>
            </CodeLine>
            <br />
            <CodeLine>
              <span className="text-red-400">
                export default <span className="text-white">App;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton
              href="/installation/angular-package"
              orientation="left"
            >
              Angular Page
            </PaginationButton>
            <PaginationButton
              href="/installation/ionic-package"
              orientation="right"
            >
              Ionic Page
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="installation">Installation</Link>
          <ul className="ml-2">
            <Link href="get-npm-command">1. Get NPM install command</Link>
            <Link href="import-package-command">
              2. Import package in your project
            </Link>
          </ul>
          <Link href="examples">Examples</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
