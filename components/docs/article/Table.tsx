interface TableProps {
  children: React.ReactNode
}

export function TableRow({ children }: TableProps) {
  return (
    <tr className="m-0 border-t border-grey-300 p-0 dark:border-grey-600 even:bg-grey-100 even:dark:bg-grey-600/20">
      {children}
    </tr>
  )
}

export function TableHeaderCell({ children }: TableProps) {
  return (
    <th className="m-0 border border-grey-300 px-4 py-2 font-semibold dark:border-grey-600">
      {children}
    </th>
  )
}

export function TableCell({ children }: TableProps) {
  return (
    <td className="m-0 border border-grey-300 px-4 py-2 dark:border-grey-600">
      {children}
    </td>
  )
}

export function TableHead({ children }: TableProps) {
  return <thead>{children}</thead>
}

export function TableBody({ children }: TableProps) {
  return <tbody>{children}</tbody>
}

export function Table({ children }: TableProps) {
  return (
    <table className="block overflow-x-scroll scrollbar-hide mt-6 p-0 first:mt-0 text-slate-900 dark:text-slate-100 border-collapse">
      {children}
    </table>
  )
}
