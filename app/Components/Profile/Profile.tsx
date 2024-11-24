"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import React from "react";

function Profile() {
  const { user } = useUserContext();
  const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();
  return (
    <div className="p-6 bg-gray-100 ">
      {/* Profile Card */}
      <div
        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
        onClick={openProfileModal}
      >
        <Image
          src={user?.photo}
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-lg text-gray-700">
            <span className="block text-sm font-light text-gray-500">
              Welcome back,
            </span>
            <span className="font-semibold text-blue-600">{user?.name}</span>
          </h1>
        </div>
      </div>

      {/* Task Summary */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        {/* Total Tasks */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 text-sm uppercase tracking-wider">
            Total Tasks
          </h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {tasks.length}
          </p>
        </div>
        {/* In Progress */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 text-sm uppercase tracking-wider">
            In Progress
          </h2>
          <p className="text-3xl font-bold text-teal-500 mt-2">
            {activeTasks.length}
          </p>
        </div>
        {/* Open Tasks */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 text-sm uppercase tracking-wider">
            Open Tasks
          </h2>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            {activeTasks.length}
          </p>
        </div>
        {/* Completed Tasks */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 text-sm uppercase tracking-wider">
            Completed
          </h2>
          <p className="text-3xl font-bold text-green-500 mt-2">
            {completedTasks.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
