import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import type { INavigationItem } from '~/meta'

type IBreadcrumbsProps = {
    items : INavigationItem[]
}

export default function Breadcrumbs({ items }: IBreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                to={item.to}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={item.selected ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
