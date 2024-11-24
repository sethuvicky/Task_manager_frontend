"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import { badge, check, mail } from "@/utils/Icons";
import Image from "next/image";
import React from "react";

function ProfileModal() {
  const ref = React.useRef(null);

  const { closeModal } = useTasks();
  const { user, updateUser, handlerUserInput, userState, changePassword } =
    useUserContext();

  useDetectOutside({
    ref,
    callback: () => {
      closeModal();
    },
  });

  const { name, email, photo } = user;



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={ref}
        className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-xl"
      >
        <div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>

        <div className="relative mt-4 flex justify-between items-center">
          <div className="relative inline-block">
            <Image
              src={photo}
              alt="profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-1 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full shadow">
              <span className="text-xs text-white">{check}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600">{email}</p>
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(e, {
              name: userState.name,
              email: userState.email,
            });
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              onChange={(e) => handlerUserInput("name")(e)}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handlerUserInput("email")(e)}
                className="w-full p-2 pl-10 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                {mail}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-200"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
