"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const {
    task,
    handleInput,
    createTask,
    isEditing,
    closeModal,
    modalMode,
    activeTask,
    updateTask,
  } = useTasks();
  const ref = React.useRef(null);

  // Use the hook to detect clicks outside the modal
  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal(); // Close modal if it is in add/edit mode
      }
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && activeTask) {
      handleInput("setTask")(activeTask);
    }
  }, [modalMode, activeTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (modalMode === "edit") {
      updateTask(task);
    } else if (modalMode === "add") {
      createTask(task);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <form
        action=""
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-[#1E293B]">
          {modalMode === "edit" ? "Edit Task" : "Create Task"}
        </h2>

        <div className="space-y-4">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-sm font-medium text-[#4B5563]"
            >
              Title
            </label>
            <input
              className="bg-[#F3F4F6] p-2 rounded-lg border-2 border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
              type="text"
              id="title"
              placeholder="Task Title"
              name="title"
              value={task.title}
              onChange={(e) => handleInput("title")(e)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-sm font-medium text-[#4B5563]"
            >
              Description
            </label>
            <textarea
              className="bg-[#F3F4F6] p-2 rounded-lg border-2 border-[#E5E7EB] resize-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
              name="description"
              placeholder="Task Description"
              rows={3}
              value={task.description}
              onChange={(e) => handleInput("description")(e)}
            />
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="priority"
              className="text-sm font-medium text-[#4B5563]"
            >
              Priority
            </label>
            <select
              className="bg-[#F3F4F6] p-2 rounded-lg border-2 border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
              name="priority"
              value={task.priority}
              onChange={(e) => handleInput("priority")(e)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="dueDate"
              className="text-sm font-medium text-[#4B5563]"
            >
              Due Date
            </label>
            <input
              className="bg-[#F3F4F6] p-2 rounded-lg border-2 border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={(e) => handleInput("dueDate")(e)}
            />
          </div>

          {/* Task Completed */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="completed"
              className="text-sm font-medium text-[#4B5563]"
            >
              Task Completed
            </label>
            <select
              className="bg-[#F3F4F6] p-2 rounded-lg border-2 border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
              name="completed"
              value={task.completed ? "true" : "false"}
              onChange={(e) => handleInput("completed")(e)}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className={`w-full py-2 text-white rounded-lg font-semibold focus:outline-none transition duration-300 ${
              modalMode === "edit"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {modalMode === "edit" ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
