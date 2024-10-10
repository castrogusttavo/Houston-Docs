'use client'

import { Article } from '@/components/docs/Article'
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
  LinkText,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'

export default function TechnicalSupportPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['FAQs', 'Technical Support']} />
          <H1 id="application-integration">
            FAQs: Technical Support <Anchor href="#application-integration" />
          </H1>
          <Paragraph>
            Getting the help you need when you encounter issues or have
            questions about Houston Icons is straightforward. Below you&apos;ll
            find information on how to reach our technical support team and the
            resources available to you.
          </Paragraph>
          <H2 id="consistency-is-key">
            How can I get technical support for Houston Icons?{' '}
            <Anchor href="#consistency-is-key" />
          </H2>
          <Paragraph>
            We offer several channels for technical support to ensure you
            receive the assistance you need:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>LinkedIn:</strong> Join our on Discord for support and to
              connect with other users. It&apos;s a great place to share tips,
              ask questions, and get real-time assistance. Join our Discord
              server.
            </ListItem>
            <ListItem>
              <strong>Twitter:</strong> Follow us on Twitter @houston_icons for
              updates, tips, and direct support through Tweets or Direct
              Messages. Follow Houston Icons on Twitter.
            </ListItem>
            <ListItem>
              <strong>Email:</strong> For more detailed inquiries or if you
              require personalized assistance, feel free to email us at{' '}
              <LinkText href="mailto:hello.softis@gmail.com">
                hello.softis@gmail.com
              </LinkText>
              . We aim to respond to all emails within 24-48 hours.
            </ListItem>
          </UnorderedList>
          <H2 id="what-information-should-i-provide-when-seeking-technical-support">
            What information should I provide when seeking technical support?{' '}
            <Anchor href="#what-information-should-i-provide-when-seeking-technical-support" />
          </H2>
          <Paragraph>
            To help us assist you more efficiently, please include the following
            information in your support request:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              A clear and concise description of the issue or question.
            </ListItem>
            <ListItem>
              Any relevant code snippets or screenshots that illustrate the
              problem.
            </ListItem>
            <ListItem>
              The version of the Houston Icons package you&apos;re using.
            </ListItem>
            <ListItem>
              Your development environment details (e.g., browser version,
              React, Vue, Angular or any other version).
            </ListItem>
          </UnorderedList>
          <H2 id="keep-your-icon-library">
            Can I request new features or icons?
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            Absolutely! We&apos;re always looking to improve Houston Icons and
            expand our icon library. If you have suggestions for new features or
            specific icons you&apos;d like to see, please reach out via any of
            our support channels. We appreciate your feedback and contributions
            to making Houston Icons even better.
          </Paragraph>
          <H2 id="keep-your-icon-library">
            Is there a roadmap for future updates?
            <Anchor href="#keep-your-icon-library" />
          </H2>
          <Paragraph>
            Yes, we maintain a roadmap of upcoming features and improvements
            based on user feedback and our own vision for Houston Icons. While
            we may not be able to share specific release dates, we&apos;re
            committed to continuously enhancing the library. Keep an eye on our
            Twitter account and join our Discord server for the latest updates
            and announcements.
          </Paragraph>
          <Paragraph>
            Remember, our goal is to provide you with the support you need to
            use Houston Icons effectively in your projects. Don&apos;t hesitate
            to reach out with any questions or feedback — we&apos;re here to
            help!
          </Paragraph>
          <DateBlock dateTime="Oct, 06, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton
              href="/troubleshooting/common-issues"
              orientation="left"
            >
              Common Issues
            </PaginationButton>
            <div className="opacity-0 pointer-events-none">
              <PaginationButton href="/" orientation="right">
                {''}
              </PaginationButton>
            </div>
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
