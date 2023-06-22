"use client";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Avatar, MenuList, Paper } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserMenuItem from "./UserMenuItem";

const UserMenu = ({ username }: { username: string }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  async function signout() {
    setOpen(false);
    await signOut({ callbackUrl: "/api/auth/logout" });
  }
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const paperStyles = {
    position: "absolute",
    left: 0,
    top: 50,
  };

  if (isMounted) {
    return (
      <div className="absolute left-4">
        <button onClick={handleToggle}>
          <Avatar>{username.substring(0, 1)}</Avatar>
        </button>
        {open && (
          <Paper sx={paperStyles}>
            <MenuList
              id="composition-menu"
              aria-labelledby="composition-button"
            >
              <Link href="/userprofile">
                <UserMenuItem
                  text={username}
                  icon={<AccountCircle />}
                  onClick={handleClose}
                />
              </Link>

              <UserMenuItem text="Logout" icon={<Logout />} onClick={signout} />
            </MenuList>
          </Paper>
        )}
      </div>
    );
  }
  return <></>;
};

export default UserMenu;
