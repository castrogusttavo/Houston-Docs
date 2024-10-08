import React, { useState } from 'react'

interface CodeProps {
  children: React.ReactNode
}

export function Code({ children }: CodeProps) {
  return (
    <code className="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25rem] text-[.9rem] dark:border-white/10 dark:bg-white/10 text-slate-900 dark:text-slate-100">
      {children}
    </code>
  )
}

export function CodeLine({ children }: CodeProps) {
  return <span className="px-4 flex gap-2">{children}</span>
}

export function CodeBlock({ children }: CodeProps) {
  const [formattedContent, setFormattedContent] = useState(children)
  const [isChecked, setIsChecked] = useState(false)

  const handleCopy = () => {
    const extractText = (child: React.ReactNode): string => {
      if (typeof child === 'string') {
        return child
      } else if (Array.isArray(child)) {
        return child.map(extractText).join('')
      } else if (React.isValidElement(child)) {
        return extractText(child.props.children)
      }
      return ''
    }

    const textToCopy = extractText(children).trim()

    const modifiedText = textToCopy.replace(/(\S+)\s*(\S+)/, '$1 $2')

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(modifiedText)
        .then(() => {
          setIsChecked((prev) => !prev)
          setTimeout(() => {
            setIsChecked((prev) => !prev)
          }, 3000)
        })
        .catch((err) => {
          console.error('Erro ao copiar: ', err)
        })
    }
  }

  const handleLineBreak = () => {
    if (typeof formattedContent === 'string') {
      const contentWithBreaks = formattedContent.replace(/\s+/g, '\n')
      setFormattedContent(contentWithBreaks)
    } else {
      const contentAsString = (children as string).replace(/\s+/g, '\n')
      setFormattedContent(contentAsString)
    }
  }

  return (
    <div className="group relative mt-6 first:mt-0 font-mono">
      <pre className="bg-slate-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-zinc-300/10 text-[.9rem] py-4 text-slate-900 dark:text-slate-100">
        {children}
      </pre>
      <div className="opacity-0 transition group-hover:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-0">
        <button
          className="transition-all active:opacity-50 bg-blue-700/5 border-black/5 text-grey-600 hover:text-grey-900 rounded-md p-1.5 dark:bg-blue-300/10 dark:border-white/10 dark:text-grey-400 dark:hover:text-grey-50 md:hidden"
          onClick={handleLineBreak}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="pointer-events-none h-4 w-4"
          >
            <path
              fill="currentColor"
              d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
            />
          </svg>
        </button>
        <button
          className="transition-all active:opacity-50 bg-blue-700/5 border-black/5 text-grey-600 hover:text-grey-900 rounded-md p-1.5 dark:bg-blue-300/10 dark:border-white/10 dark:text-grey-400 dark:hover:text-grey-50"
          onClick={handleCopy}
        >
          {isChecked ? (
            <svg
              viewBox="0 0 20 20"
              width="1em"
              height="1em"
              fill="currentColor"
              className="pointer-events-none h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="pointer-events-none h-4 w-4"
            >
              <rect
                x="9"
                y="9"
                width="13"
                height="13"
                rx="2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

interface CodeLiveProps {
  href: string
}

export function CodeLive({ href }: CodeLiveProps) {
  return (
    <div className="mt-4 rounded-md border border-[#252525]">
      <iframe
        src={href}
        className="w-full h-[300px] border-0 rounded-sm overflow-hidden"
        allow="accelerometer; ambient-light-sensor; encrypted-media; geolocation; gryroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  )
}
