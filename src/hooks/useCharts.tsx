import { useEffect, useState, useCallback } from "react";

function setInitialChart(initialChart) {
  if (initialChart) return initialChart;
  if (initialChart instanceof Function) return initialChart();
  return initialChart;
}

export default function useCharts(initialChart) {
  const [charts, setCharts] = useState(() => {
    return setInitialChart(initialChart);
  });

  const chartResize = useCallback(() => {
    if (charts.length) {
      charts.forEach((c) => {
        c.resize();
      });
    }
  }, [charts]);

  useEffect(() => {
    window.addEventListener("resize", chartResize);
    return () => {
      window.removeEventListener("resize", chartResize);
    };
  }, [charts, chartResize]);

  return [charts, setCharts];
}
