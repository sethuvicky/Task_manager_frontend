"use client";
import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import TaskItem from "./Components/TaskItem/TaskItem";
import { Task } from "@/utils/types";
import { filteredTasks } from "@/utils/utilities";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";

export default function Home() {
  useRedirect("/login");

  const { tasks, openModalForAdd, priority, setPriority } = useTasks();

  const filtered = filteredTasks(tasks, priority);

  useEffect(() => {
    setPriority("all");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
      {/* Main Content */}
      <div className="relative p-8 lg:p-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-900 tracking-wide">
            Manage Your Tasks
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Stay on top of everything with ease
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="bg-white rounded-full p-2.5 shadow-lg">
              <Filters />
            </div>
          </div>
        </header>

        {/* Tasks Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
   
          {/* Task Items */}
          {filtered.map((task: Task, i: number) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <TaskItem task={task} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
