"use client";
import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTasks } from "@/context/taskContext";

export const description = "A radial chart with stacked sections";

const chartConfig = {
  desktop: {
    label: "Completed",
    color: "#4CAF50", // Soft green for completed tasks
  },
  mobile: {
    label: "Pending",
    color: "#FF9800", // Subtle orange for pending tasks
  },
} satisfies ChartConfig;

function RadialChart() {
  const { tasks, completedTasks, activeTasks } = useTasks();
  const tasksTotal = tasks.length;

  const chartData = [
    {
      pending: activeTasks.length,
      completed: completedTasks.length,
    },
  ];

  return (
    <Card className="bg-white shadow-lg rounded-lg p-6 mb-5">
      <CardHeader className="mb-4">
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Task Completion
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Track the progress of completed vs pending tasks
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center px-4">
        <ChartContainer
          config={chartConfig}
          className="w-full max-w-[320px] aspect-square"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={70}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 20}
                          className="fill-gray-800 text-3xl font-semibold"
                        >
                          {tasksTotal}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 10}
                          className="fill-gray-500 text-base"
                        >
                          Tasks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="completed"
              stackId="a"
              cornerRadius={10}
              fill="#4CAF50" // Soft green for completed tasks
              className="stroke-transparent"
            />
            <RadialBar
              dataKey="pending"
              fill="#FF9800" // Subtle orange for pending tasks
              stackId="a"
              cornerRadius={10}
              className="stroke-transparent"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  );
}

export default RadialChart;
