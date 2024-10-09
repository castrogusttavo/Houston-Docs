'use client'

import { Article } from '@/components/docs/Article'
import { CodeBlock, CodeLine } from '@/components/docs/article/Code'
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

export default function CustomizableIconPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Features', 'Customizable Icons']} />
          <H1 id="customizable-icons">
            Customizable Icons <Anchor href="#customizable-icons" />
          </H1>
          <Paragraph>
            Houston Icons provides a vast array of customizable icons, designed
            to ensure they can seamlessly integrate into your project&apos;s
            aesthetic and functional requirements. This flexibility allows you
            to maintain a consistent design language while leveraging the power
            of our extensive icon library.
          </Paragraph>
          <H2 id="why-customize">
            Why Customize? <Anchor href="#why-customize" />
          </H2>
          <Paragraph>
            Customization is key to creating a unique user experience and
            ensuring that icons perfectly match your brand&apos;s identity and
            the functionality of your interface. Houston Icons offers various
            customization options, including:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Size:</strong> Adjust the size of the icons to fit
              different UI elements and screen sizes.
            </ListItem>
            <ListItem>
              <strong>Color:</strong> Change the colors to match your brand or
              highlight specific UI elements.
            </ListItem>
            <ListItem>
              <strong>Variant:</strong> Choose from multiple stylistic variants
              to ensure the icons align with the overall design of your
              application.
            </ListItem>
            <ListItem>
              <strong>Type:</strong> For certain variants, further refine the
              style with type options like rounded or sharp edges.
            </ListItem>
          </UnorderedList>
          <H2 id="color-customization">
            Color Customization <Anchor href="#color-customization" />
          </H2>
          <Paragraph>
            Change the color of your icons to match your brand identity or
            design scheme. The color prop accepts any valid CSS color value,
            including HEX, RGB, and named colors.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-blue-800 dark:text-blue-300">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  color<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;rebeccapurple&quot;
                  </span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>{' '}
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="size-customization">
            Size Customization
            <Anchor href="#size-customization" />
          </H2>
          <Paragraph>
            Adjust the size of your icons to ensure they align well with your
            layout and typography. The size prop can be specified with numeric
            values to set the icon&apos;s width and height in pixels.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-blue-800 dark:text-blue-300">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  size<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-blue-800 dark:text-blue-300">24</span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>{' '}
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="variant-customization">
            Variant Customization <Anchor href="#variant-customization" />
          </H2>
          <Paragraph>
            Change the color of your icons to match your brand identity or
            design scheme. The color prop accepts any valid CSS color value,
            including HEX, RGB, and named colors.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-blue-800 dark:text-blue-300">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  variant
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;solid&quot;
                  </span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>{' '}
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="type-customization">
            Type Customization <Anchor href="#type-customization" />
          </H2>
          <Paragraph>
            Change the color of your icons to match your brand identity or
            design scheme. The color prop accepts any valid CSS color value,
            including HEX, RGB, and named colors.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-blue-800 dark:text-blue-300">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  variant
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;solid&quot;
                  </span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  type<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;rounded&quot;
                  </span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>{' '}
              </span>
            </CodeLine>
          </CodeBlock>
          <H2 id="combine-customizations">
            Combine Customizations <Anchor href="#type-customizations" />
          </H2>
          <Paragraph>
            Change the color of your icons to match your brand identity or
            design scheme. The color prop accepts any valid CSS color value,
            including HEX, RGB, and named colors.
          </Paragraph>
          <CodeBlock>
            <CodeLine>
              <span className="text-grey-800 dark:text-white">
                &#60;
                <span className="text-blue-800 dark:text-blue-300">
                  Home01Icon
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  color<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;navy&quot;
                  </span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  size<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-grey-800 dark:text-white">&#123;</span>
                  <span className="text-blue-800 dark:text-blue-300">32</span>
                  <span className="text-grey-800 dark:text-white">&#125;</span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  variant
                  <span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;duotone&quot;
                  </span>
                </span>{' '}
                <span className="text-purple-800 dark:text-purple-400">
                  type<span className="text-red-700 dark:text-red-400">=</span>
                  <span className="text-green-800 dark:text-green-500">
                    &quot;rounded&quot;
                  </span>
                </span>{' '}
                <span className="text-grey-800 dark:text-white">/&#62;</span>{' '}
              </span>
            </CodeLine>
          </CodeBlock>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/features/autocomplete" orientation="left">
              Autocomplete
            </PaginationButton>
            <PaginationButton href="/features/icon-library" orientation="right">
              Icon Library
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="why-customize">Why Customize?</Link>
          <Link href="color-customization">Color Customization</Link>
          <Link href="size-customization">Size Customization</Link>
          <Link href="variant-customization">Variant Customization</Link>
          <Link href="type-customization">Type Customization</Link>
          <Link href="combine-customizations">Combine Customizations</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
