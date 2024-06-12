import { AdLand } from '@/lib/adland'
import AdGroupListItem from './AdGroupListItem'
import { AdGroup_subgraph } from '@adland/webkit'

const AllAdGroups = async () => {
  const groups = await new AdLand().listGroups()

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {groups.map(({ adGroup_subgraph }) => {
        const { id, blockTimestamp, adSpaces, transactionHash } =
          adGroup_subgraph as AdGroup_subgraph
        return (
          <AdGroupListItem
            id={id}
            key={transactionHash}
            blockTimestamp={blockTimestamp}
            adSpaces={adSpaces}
          />
        )
      })}
    </div>
  )
}

export default AllAdGroups
