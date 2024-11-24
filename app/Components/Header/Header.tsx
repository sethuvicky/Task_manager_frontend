"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();
  const router = useRouter();

  const { name } = user;
  const userId = user._id;

  return (
    <header className="px-6 py-4 w-full flex items-center justify-between bg-[#1E293B] shadow-md border-b border-[#334155]">
      <div>
        <h1 className="text-lg font-medium text-gray-300">
          {userId ? `Hello, ${name}!` : "Task Management System"}
        </h1>
        <p className="text-sm text-gray-400">
          {userId && (
            <>
              You have{" "}
              <span className="font-bold text-[#3B82F6]">
                {activeTasks.length}
              </span>{" "}
              active tasks
            </>
          )}
        </p>
      </div>
      <div>
        <button
          className="px-6 py-2 bg-[#3B82F6] text-white rounded-lg shadow-sm hover:bg-[#2563EB] transition-all duration-300"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a New Task" : "Login / Register"}
        </button>
      </div>
    </header>
  );
}

export default Header;
