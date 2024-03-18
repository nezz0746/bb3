import { Button } from "./ui/button";
import { useAccount } from "wagmi";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { truncateAddress } from "@/lib/utils";

export const ConnectButton = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const { wallets } = useWallets();
  console.log({ user, wallets });

  const { address } = useAccount();

  const disableLogin = !ready || (ready && authenticated);

  if (!ready) return <></>;

  if (!authenticated) {
    return (
      <Button disabled={disableLogin} onClick={login} type="button">
        Connect Wallet
      </Button>
    );
  }

  return (
    <>
      {user && user.farcaster && <Button>{user.farcaster.username}</Button>}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button">{truncateAddress(address)}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            My Account: {truncateAddress(address)}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={logout}>
              Logout
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
