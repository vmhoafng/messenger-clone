"use client";
import React from "react";
import { User } from "@prisma/client";
import Image from "next/image";
import clsx from "clsx";
import useActiveList from "../hooks/useActiveList";
interface AvatarProps {
  user?: User;
  small?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ user, small = false }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative w-fit">
      <div
        className={clsx(
          `relative
          inline-block
          rounded-full
          overflow-hidden
          md:h-11
          md:w-11`,
          small ? "h-4 w-4 md:h-5 md:w-5" : "h-9 w-9 md:h-11 md:w-11"
        )}
      >
        <Image
          alt="Avatar"
          src={user?.image || "/img/placeholder.jpg"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      {small !== true && isActive ? (
        <span
          className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3"
        />
      ) : null}
    </div>
  );
};
export default Avatar;
