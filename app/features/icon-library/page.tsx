'use client'

import { Article } from '@/components/docs/Article'
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
  H3,
  LinkText,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'

export default function IconLibraryPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Features', 'Autocomplete']} />
          <H1 id="icon-library">
            Icon Library <Anchor href="#icon-library" />
          </H1>
          <Paragraph>
            The Houston Icons Icon Library stands at the core of our offering,
            providing a vast and diverse collection of over 36,000
            professionally designed icons. Designed to cater to a wide range of
            design needs, our library ensures that you can find the perfect icon
            for any project.
          </Paragraph>
          <Paragraph>
            Check out our{' '}
            <LinkText href="https://houstonicons.com.br/icons">
              Icon Library
            </LinkText>{' '}
            to explore our collection and find the icons you need.
          </Paragraph>
          <H2 id="overview">
            Overview <Anchor href="#overview" />
          </H2>
          <Paragraph>
            Our Icon Library is meticulously organized into categories, making
            it easy to navigate and find the icons you need. Whether you&apos;re
            looking for icons for web design, mobile applications, or marketing
            materials, Houston Icons has you covered with its comprehensive
            collection.
          </Paragraph>
          <H2 id="features">
            Features <Anchor href="#features" />
          </H2>
          <H3 id="expensive-collection">
            Expensive Collection <Anchor href="#expensive-collection" />
          </H3>
          <UnorderedList>
            <ListItem>
              <strong>Over 36,000 Icons:</strong> From basic shapes to complex
              illustrations, our library includes icons for every possible need.
            </ListItem>
            <ListItem>
              <strong>Diverse Categories:</strong> Icons are organized into
              categories such as Business, Social Media, UI/UX, Weather, and
              more, ensuring you can find icons relevant to your project.
            </ListItem>
          </UnorderedList>
          <H3 id="high-quality-design">
            High-Quality Design <Anchor href="#high-quality-design" />{' '}
          </H3>
          <UnorderedList>
            <ListItem>
              <strong>Professional Quality:</strong> Each icon is crafted by
              expert designers, ensuring they are of the highest quality.
            </ListItem>
            <ListItem>
              <strong>Consistent Style:</strong> Icons are designed to be
              stylistically consistent, making it easy to use them across
              projects without worrying about visual harmony.
            </ListItem>
          </UnorderedList>
          <H3 id="fully-customizable">
            Fully Customizable <Anchor href="#fully-customizable" />{' '}
          </H3>
          <UnorderedList>
            <ListItem>
              <strong>Color Customization:</strong> Icons can be customized to
              match your project&apos;s color scheme.
            </ListItem>
            <ListItem>
              <strong>Size Adjustments:</strong> Easily adjust the size of icons
              to fit your design requirements.
            </ListItem>
            <ListItem>
              <strong>Variants:</strong> Many icons come in multiple variants,
              including stroke, twotone, bulk, and more, offering flexibility in
              design.
            </ListItem>
          </UnorderedList>
          <H2 id="using-icon-library">
            Using the Icon Library <Anchor href="#using-icon-library" />
          </H2>
          <OrderedList>
            <ListItem>
              <strong>Browse or Search:</strong> Use the search feature or
              browse through categories to find the icons you need.
            </ListItem>
            <ListItem>
              <strong>Select Icon:</strong> Click on an icon to view its details
              and customization options.
            </ListItem>
            <ListItem>
              <strong>Customize (Optional):</strong> Adjust the color, size, and
              variant of the icon to fit your project.
            </ListItem>
            <ListItem>
              <strong>Download or Embed:</strong> Download the icon for offline
              use or embed it directly into your project using our provided code
              snippets.
            </ListItem>
          </OrderedList>
          <H2 id="continuous-update">
            Continuous Update <Anchor href="#continuous-update" />
          </H2>
          <Paragraph>
            The Houston Icons library is continuously updated with new icons and
            categories based on current trends and user feedback. We strive to
            ensure that our library remains relevant and useful for all design
            needs.
          </Paragraph>
          <H2 id="conclusion">
            Conclusion <Anchor href="#conclusion" />
          </H2>
          <Paragraph>
            With Houston Icons&apos; Icon Library, you have access to a world of
            professional, high-quality icons that can elevate your projects. Our
            library is designed with the user in mind, ensuring ease of use,
            customization, and access to an ever-growing collection of icons.
            Start exploring today and discover the perfect icons for your
            designs.
          </Paragraph>
          <Paragraph>
            For any inquiries or suggestions regarding our Icon Library, please
            don&apos;t hesitate to contact our support team.
          </Paragraph>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton
              href="/features/customizable-icons"
              orientation="left"
            >
              Customizable Icons
            </PaginationButton>
            <PaginationButton
              href="/best-practice/application-integration"
              orientation="right"
            >
              Application Integration
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="overview">Overview</Link>
          <Link href="features">Features</Link>
          <ul className="ml-2">
            <Link href="expensive-collection">1. Expensive Collection</Link>
            <Link href="high-quality-design">2. High-Quality Design</Link>
            <Link href="fully-customizable">3. Fully Customizable </Link>
          </ul>
          <Link href="using-icon-library">Using the Icon Library</Link>
          <Link href="continuous-update">Continuous Update</Link>
          <Link href="conclusion">Conclusion</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
