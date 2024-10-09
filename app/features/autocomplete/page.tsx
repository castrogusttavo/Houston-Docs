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

export default function AutocompletePage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Features', 'Autocomplete']} />
          <H1 id="ide-autocomplete">
            IDE Autocomplete Feature <Anchor href="#ide-autocomplete" />
          </H1>
          <Paragraph>
            The Houston Icons library is fully compatible with TypeScript,
            offering an enhanced development experience with the Autocomplete
            feature in Integrated Development Environments (IDEs). This feature
            speeds up your development process by providing quick access to icon
            names and properties directly within your code editor.
          </Paragraph>
          <H2 id="overview">
            Overview <Anchor href="#overview" />
          </H2>
          <Paragraph>
            When using Houston Icon with TypeScript in your IDE, the
            Autocomplete feature helps you to effortlessly browse and insert
            icons into your project. This functionality ensures that you can see
            available icons and their respective properties in real-time,
            reducing errors and improving code quality.
          </Paragraph>
          <H2 id="benefits-of-typescript">
            Benefits of TypeScript Compatibility{' '}
            <Anchor href="#benefits-of-typescript" />
          </H2>
          <UnorderedList>
            <ListItem>
              <strong>Type Safety:</strong> Enjoy the benefits of type safety
              for icons, ensuring that you use the correct properties and
              values.
            </ListItem>
            <ListItem>
              <strong>Development Speed:</strong> Quickly find the icons you
              need without leaving your IDE, thanks to immediate suggestions.
            </ListItem>
            <ListItem>
              <strong>Error Reduction:</strong> Minimize typing errors and
              property misuses with real-time feedback and suggestions.
            </ListItem>
          </UnorderedList>
          <H2 id="how-to-use-autocomplete">
            How to Use Autocomplete with Houston Icons:
            <Anchor href="#how-to-use-autocomplete" />
          </H2>
          <Paragraph>
            To take advantage of the Autocomplete feature, ensure your project
            is set up with TypeScript and that you have{' '}
            <Code>@houstonicons/react</Code>,{' '}
            <Code>@houstonicons/react-native</Code> or{' '}
            <Code>@houstonicons/angular</Code> installed. Here&apos;s a simple
            guide:
          </Paragraph>
          <OrderedList>
            <ListItem>
              <strong>Import an Icon:</strong> Start typing the import statement
              in your component file. The Autocomplete feature will suggest
              available icons from the Houston Icons library.
              <br />
              <CodeBlock>
                <CodeLine>
                  <span className="text-red-700 dark:text-red-400">
                    import{' '}
                    <span className="text-grey-800 dark:text-white">
                      &#123; Home01Icon &#125;
                    </span>{' '}
                    <span className="text-red-700 dark:text-red-400">from</span>{' '}
                    <span className="text-green-800 dark:text-green-500">
                      &apos;@houstonicons/react&apos;
                    </span>
                  </span>
                </CodeLine>
              </CodeBlock>
            </ListItem>
            <ListItem>
              <strong>Insert an Icon Component:</strong> When typing out the
              icon component in your JSX, TSX or TS file, the Autocomplete will
              suggest properties and their expected values.
              <br />
              <CodeBlock>
                <CodeLine>
                  <span className="text-grey-800 dark:text-white">
                    &#60;
                    <span className="text-blue-800 dark:text-blue-300">
                      Home01Icon
                    </span>{' '}
                    <span className="text-purple-800 dark:text-purple-400">
                      size
                      <span className="text-red-700 dark:text-red-400">=</span>
                      <span className="text-grey-800 dark:text-white">
                        &#123;
                      </span>
                      <span className="text-blue-800 dark:text-blue-300">
                        24
                      </span>
                      <span className="text-grey-800 dark:text-white">
                        &#125;
                      </span>
                    </span>{' '}
                    <span className="text-purple-800 dark:text-purple-400">
                      color
                      <span className="text-red-700 dark:text-red-400">=</span>
                      <span className="text-green-800 dark:text-green-500">
                        &quot;blue&quot;
                      </span>
                    </span>{' '}
                    <span className="text-grey-800 dark:text-white">
                      /&#62;
                    </span>{' '}
                  </span>
                </CodeLine>
              </CodeBlock>
            </ListItem>
            <ListItem>
              <strong>Utilize Props:</strong> As you type the properties (props)
              for the icon, such as size or color, the Autocomplete will suggest
              available options and values, ensuring compatibility and
              correctness.
            </ListItem>
          </OrderedList>
          <H2 id="example">
            Example <Anchor href="#example" />
          </H2>
          <Paragraph>
            Here&apos;s an example showing how Autocomplete works when importing
            and using an icon in a React project:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              Typing <Code>import &#123; H</Code>
              will prompt suggestion like Home01Icon, HeartIcon, etc.
            </ListItem>
            <ListItem>
              After selecting HomeIcon and using it in your JSX, typing{' '}
              <Code>&#60;Home01Icon</Code> will prompt property suggestions like
              size, color, variant, etc.
            </ListItem>
          </UnorderedList>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/usage/using-flutter" orientation="left">
              Using Flutter
            </PaginationButton>
            <PaginationButton
              href="/features/customizable-icons"
              orientation="right"
            >
              Customizable Icons
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="overview">Overview</Link>
          <Link href="benefits-of-typescript">
            Benefits of TypeScript Compatibility
          </Link>
          <Link href="how-to-use-autocomplete">
            How to Use Autocomplete with Houston Icons
          </Link>
          <Link href="example">Example</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
