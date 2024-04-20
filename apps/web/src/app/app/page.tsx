import { AdLand } from '@/lib/adland'
import Link from 'next/link'

const AppPage = async () => {
  const groups = await new AdLand().listGroups()

  return (
    <div className="flex min-h-[79vh] flex-col p-2">
      <div className="flex flex-grow flex-col gap-2 ">
        {groups.map((group) => (
          <Link
            href={'/app/group/' + group.adGroup_subgraph.id}
            key={group.adGroup_subgraph.id}
          >
            <div className="flex flex-row justify-between rounded-md bg-white p-3 hover:bg-gray-100">
              <h1>Ad Group - #{group.adGroup_subgraph.id}</h1>
              <div className="flex flex-wrap">
                {group.adSpaces.length} Ad Spaces
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AppPage
