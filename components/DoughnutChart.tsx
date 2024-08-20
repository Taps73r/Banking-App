"use client";

import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ accounts }: DoughnutChartProps) {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1000, 250, 1232],
                backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
            },
        ],
        labels: ["Bank A", "Bank B", "Bank C"],
    };
    return (
        <Doughnut
            options={{
                cutout: "60%",
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }}
            data={data}
        />
    );
}
