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

export default function AngularPackagePage() {
  const [activeTab, setActiveTab] = useState('default')

  const getCommandParts = () => {
    switch (activeTab) {
      case 'npm':
        return { command: 'npm i', package: '@houstonicons/angular' }
      case 'yarn':
        return { command: 'yarn add', package: '@houstonicons/angular' }
      case 'pnpm':
        return { command: 'pnpm add', package: '@houstonicons/angular' }
      case 'bun':
        return { command: 'bun add', package: '@houstonicons/angular' }
      default:
        return { command: 'npm i', package: '@houstonicons/angular' }
    }
  }

  const { command, package: packageName } = getCommandParts()

  return (
    <div className="bg-slate-50 dark:bg-zinc-900 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Installation', 'Angular Package']} />
          <H1 id="angular-package-installation">
            Angular Package Installation{' '}
            <Anchor href="#angular-package-installation" />
          </H1>
          <Paragraph>
            To get started with the Houston Icons Angular package, you need to
            install it from npm or yarn.
          </Paragraph>
          <H2 id="installation">
            Installation <Anchor href="#installation" />
          </H2>
          <Paragraph>
            Follow the steps below to install the Houston Icons package and
            start using the icons in your Angular project.
          </Paragraph>
          <H3 id="get-npm-command">
            1. Get NPM Install Command: <Anchor href="#get-npm-command" />
          </H3>
          <Paragraph>
            Navigate to the NPM and copy command to install the{' '}
            <Code>@houstonicons/angular</Code> package:
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
          <H3 id="import-module-command">
            2. Import package in your project:
            <Anchor href="#import-module-command" />
          </H3>
          <Paragraph>
            In your Angular project, import the module in the{' '}
            <Code>app.module.ts</Code> file of your project.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-400">
                import{' '}
                <span className="text-white">
                  &#123; HoustonIconsModule &#125;
                </span>{' '}
                <span className="text-red-400">from</span>{' '}
                <span className="text-green-500">
                  &apos;@houstonicons/angular&apos;
                </span>
              </span>
            </CodeLine>
            <br />
            <CodeLine>
              <span className="text-white">
                @NgModule <span>&#123;&#40;</span>
                <br />
                <span className="text-red-400 ml-8">imports:</span>{' '}
                <span className="text-orange-300">
                  [...,HoustonIconsModule]
                </span>
                <span className="text-white">,</span>
                <br />
                <span>&#41;&#125;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H3 id="import-package-command">
            3. Import package in your project:
            <Anchor href="#import-package-command" />
          </H3>
          <Paragraph>
            In your Angular project, import the Houston Icons package in a{' '}
            <Code>.component.ts</Code> file and start using the icons in your
            application.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-red-400">
                import <span className="text-white">&#123;&#125;</span>{' '}
                <span className="text-red-400">from</span>{' '}
                <span className="text-green-500">
                  &apos;@houstonicons/angular&apos;
                </span>
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="examples">
            Examples <Anchor href="#examples" />
          </H2>
          <Paragraph>
            Here&apos;s a quick example of how to use an icon in a Angular
            component:
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-white">
                &#60;
                <span className="text-green-500">houston-abacus-icon</span>{' '}
                <br />
                <div className="ml-8">
                  <span className="text-blue-300">
                    [iconSize]<span className="text-red-300">=</span>
                    <span className="text-orange-300">&quot;48&quot;</span>
                  </span>{' '}
                </div>
                <div className="ml-8">
                  <span className="text-blue-300">
                    [fillType]<span className="text-red-300">=</span>
                    <span className="text-orange-300">
                      &quot;&apos;solid&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <div className="ml-8">
                  <span className="text-blue-300">
                    [cornerStyle]<span className="text-red-300">=</span>
                    <span className="text-orange-300">
                      &quot;&apos;rounded&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <div className="ml-8">
                  <span className="text-blue-300">
                    [color]<span className="text-red-300">=</span>
                    <span className="text-orange-300">
                      &quot;&apos;#FFFFFF&apos;&quot;
                    </span>
                  </span>{' '}
                </div>
                <span className="text-white">/&#62;</span>
              </span>
            </CodeLine>
          </CodeBlock>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton
              href="/installation/vue-package"
              orientation="left"
            >
              Vue Page
            </PaginationButton>
            <PaginationButton
              href="/installation/react-native-package"
              orientation="right"
            >
              React Native Page
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="installation">Installation</Link>
          <ul className="ml-2">
            <Link href="get-npm-command">1. Get NPM install command</Link>
            <Link href="import-module-command">
              2. Import package in your project
            </Link>
            <Link href="import-package-command">
              3. Import package in your project
            </Link>
          </ul>
          <Link href="examples">Examples</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
