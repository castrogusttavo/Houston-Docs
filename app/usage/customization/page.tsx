'use client'

import { Article } from '@/components/docs/Article'
import { Code, CodeLive } from '@/components/docs/article/Code'
import {
  Breadcrumbs,
  Pagination,
  PaginationButton,
} from '@/components/docs/article/Location'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/components/docs/article/Table'
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
import '../../globals.css'

export default function CustomizationPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Usage', 'Customization']} />
          <H1 id="houston-icons-customization">
            Houston Icon Customization{' '}
            <Anchor href="#houston-icons-customization" />
          </H1>
          <Paragraph>
            Houston Icons is a simple and easy to use icon set for your web
            projects. It is a set of 36,000+ icons in 7 styles. You can use it
            in your web projects and mobile apps
          </Paragraph>
          <H2 id="customization-options">
            Customization Options <Anchor href="#customization-options" />
          </H2>
          <Paragraph>
            Houston Icons offers a variety of properties to customize the icons
            to fit your project&apos;s needs perfectly. The component also
            accepts all SVG attributes as props, which allows flexible styling
            of the SVG elements.
          </Paragraph>
          <Paragraph>
            Here&apos;s a list of all the properties you can use:
          </Paragraph>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Property</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Example</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>color</TableCell>
                <TableCell>The color of the icon.</TableCell>
                <TableCell>
                  <Code>color=&quot;red&quot;</Code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>The size of the icon (width and height).</TableCell>
                <TableCell>
                  <Code>size=&#123;24&#125;</Code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>The variant style of the icon. </TableCell>
                <TableCell>
                  <Code>variant=&quot;solid&quot;</Code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>type</TableCell>
                <TableCell>
                  The type style for stroke and solid variants.
                </TableCell>
                <TableCell>
                  <Code>type=&quot;sharp&quot;</Code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Paragraph>
            Below is an example of how to use these properties with a{' '}
            <Code>{'<SwimmingIcon />'}</Code> component:
          </Paragraph>
          <CodeLive href="https://codesandbox.io/embed/vm6f2l?" />
          <H2 id="enhance-usability">
            Color <Anchor href="#enhance-usability" />
          </H2>
          <Paragraph>
            You can change the color of the icons by using the{' '}
            <Code>color</Code> attribute.
          </Paragraph>
          <CodeLive href="https://codesandbox.io/embed/49vtxz?" />
          <H2 id="keep-your-icon-library">
            Size
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            You can change the size of the icons by using the <Code>size</Code>{' '}
            attribute.
          </Paragraph>
          <CodeLive href="https://codesandbox.io/embed/49vtxz?" />
          <H2 id="keep-your-icon-library">
            Stroke-Width
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            You can change the stroke width of the icons by using the
            <Code>strokeWidth</Code> attribute.
          </Paragraph>
          <CodeLive href="https://codesandbox.io/embed/49vtxz?" />
          <H2 id="keep-your-icon-library">
            Variant
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            You can change the variant of the icons by using the{' '}
            <Code>variant</Code> and
            <Code>type</Code> attributes.
          </Paragraph>
          <Paragraph>
            The <Code>variant</Code> attribute can be one of the following
            values: <Code>stroke</Code>, <Code>duotone</Code>,{' '}
            <Code>solid</Code>, <Code>twotone</Code>, <Code>bulk</Code>. The{' '}
            <Code>type</Code> attribute can be one of the following values:{' '}
            <Code>rounded</Code>, <Code>sharp</Code> and <Code>standard</Code>
          </Paragraph>
          <CodeLive href="https://codesandbox.io/embed/49vtxz?" />
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
