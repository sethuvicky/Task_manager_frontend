"use client";
import IconCheck from "@/public/icons/IconCheck";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
 import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MiniSidebar() {
  const pathname = usePathname();

  const getStrokeColor = (link: string) => {
    return pathname === link ? "#3B82F6" : "#9CA3AF"; // Blue for active, gray for default
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All",
      link: "/",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1E293B] text-gray-300 shadow-lg">
      {/* Logo */}
 

      {/* Navigation */}
      <div className="flex-1 flex flex-col items-center justify-between mt-8">
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`group relative flex items-center justify-center w-14 h-14 rounded-lg ${
                pathname === item.link ? "bg-[#334155]" : "hover:bg-[#334155]"
              } transition-all duration-300`}
            >
              <Link
                href={item.link}
                className="flex items-center justify-center"
              >
                {item.icon}
              </Link>

              {/* Hover Tooltip */}
              <span className="absolute left-16 top-[50%] translate-y-[-50%] text-xs bg-[#475569] text-white px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniSidebar;
