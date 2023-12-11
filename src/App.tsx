import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Pagination,
  Chip,
} from "@mui/material";
import {
  Code,
  Dashboard,
  Folder,
  Groups,
  Notifications,
  PieChart,
  Settings,
  Sms,
  Search,
  Description,
  DateRange,
  ShoppingCart,
  AttachMoney,
  AccountCircle,
  ArrowDropUp,
  FilterAlt,
  Upgrade,
  MoreVert,
} from "@mui/icons-material";
import "./App.css";
import Logo from "./assets/img/logo.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import * as echarts from "echarts";
import useCharts from "./hooks/useCharts";

const columnSettings = [
  { id: "name", name: "Items" },
  { id: "value", name: "Value ($)" },
  { id: "delivered_to", name: "Delivered To" },
  { id: "date", name: "Date" },
  { id: "status", name: "Status" },
];

const generateGraph = (graphId: string, color: string) => {
  // initialize the chart
  const graph = echarts.init(document.getElementById(graphId));

  // draw the chart
  graph.setOption({
    title: {
      text: "",
      show: false,
    },
    tooltip: {
      show: false,
    },
    xAxis: {
      data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
      show: false,
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 10,
    },
    color: [color],
    series: [
      {
        name: "sales",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });

  return graph;
};

interface ReportRow {
  id: number;
  name: string;
  value: string;
  delivered_to: string;
  date: string;
  status: string;
}

function App() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [charts, setCharts] = useCharts([]);
  const [reports, setReports] = useState<ReportRow[]>([
    {
      id: 1,
      name: "Laboris officia veniam",
      value: "$6,496",
      delivered_to: "Austin",
      date: "24/11/2023",
      status: "In progress",
    },
    {
      id: 2,
      name: "Laboris magna temp",
      value: "$6,006",
      delivered_to: "New York",
      date: "27/08/2023",
      status: "In progress",
    },
    {
      id: 3,
      name: "Nisi nostrud amet mol",
      value: "$2,162",
      delivered_to: "Adelaide",
      date: "07/02/2023",
      status: "New",
    },
    {
      id: 4,
      name: "In labore commodo ip",
      value: "$2,517",
      delivered_to: "New York",
      date: "30/06/2023",
      status: "Cancelled",
    },
    {
      id: 5,
      name: "Cillum adipisicing non",
      value: "$9,898",
      delivered_to: "Pune",
      date: "14/05/2023",
      status: "In progress",
    },
    {
      id: 6,
      name: "Labore tempor duis cil",
      value: "$4,075",
      delivered_to: "Milan",
      date: "30/06/2023",
      status: "New",
    },
    {
      id: 7,
      name: "Laboris magna temp",
      value: "$6,496",
      delivered_to: "Austin",
      date: "24/11/2023",
      status: "In progress",
    },
    {
      id: 8,
      name: "Laboris magna temp",
      value: "$6,496",
      delivered_to: "Austin",
      date: "24/11/2023",
      status: "New",
    },
    {
      id: 9,
      name: "Laboris magna temp",
      value: "$6,496",
      delivered_to: "Austin",
      date: "24/11/2023",
      status: "Cancelled",
    },
    {
      id: 10,
      name: "Laboris magna temp",
      value: "$6,496",
      delivered_to: "Austin",
      date: "24/11/2023",
      status: "Completed",
    },
  ]);

  const handleInitializeGraph = () => {
    const graphs = [
      { id: "turnover-graph", color: "#15ABFF" },
      { id: "profit-graph", color: "#FF56A5" },
      { id: "new-customer-graph", color: "#6D31ED" },
    ];
    const arrGraphs = [];
    graphs.forEach((item) => {
      const graph = generateGraph(item.id, item.color);
      arrGraphs.push(graph);
    });
    setCharts(arrGraphs);
  };

  const resizeCharts = () => {
    if (charts.length) {
      charts.forEach((c) => {
        c.resize();
      });
    }
  };

  useEffect(() => {
    handleInitializeGraph();
    window.addEventListener("resize", resizeCharts);
  }, []);

  return (
    <Box className="main">
      <Box className="navigation">
        <img src={Logo} alt="company logo" />
        <Typography variant="h6" className="list-header">
          Working space
        </Typography>
        <List>
          <ListItemButton>
            <ListItemAvatar>
              <Dashboard />
            </ListItemAvatar>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Folder />
            </ListItemAvatar>
            <ListItemText>Projects</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <PieChart />
            </ListItemAvatar>
            <ListItemText>Analytics</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Code />
            </ListItemAvatar>
            <ListItemText>Integrations</ListItemText>
          </ListItemButton>
        </List>
        <Typography variant="h6" className="list-header">
          Personal
        </Typography>
        <List>
          <ListItemButton>
            <ListItemAvatar>
              <Groups />
            </ListItemAvatar>
            <ListItemText>Teams</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Sms />
            </ListItemAvatar>
            <ListItemText>Messages</ListItemText>
            <Box className="messages-new">N</Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Notifications />
            </ListItemAvatar>
            <ListItemText>Notifications</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Settings />
            </ListItemAvatar>
            <ListItemText>Setting</ListItemText>
          </ListItemButton>
        </List>
        <Box className="avatar-container">
          <Avatar />
          <Box className="avatar-user">
            <Typography variant="subtitle1">John Doe</Typography>
            <Typography variant="subtitle2">company@example.com</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="dashboard">
        <Box className="dashboard-header">
          <Typography variant="h4" className="dashboard-title">
            Dashboard
          </Typography>
          <TextField
            className="text-field"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className="overview">
          <Box className="overview-header">
            <Typography variant="h5" className="title">
              <Dashboard />
              Overview
            </Typography>
            <Box className="date-range-picker">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update: []) => {
                  setDateRange(update);
                }}
                dateFormat="MMM dd"
              />
              <DateRange />
            </Box>
          </Box>
          <Box className="overview-cards">
            <Box className="card-item">
              <Box className="card-item-header">
                <Box className="card-item-title">
                  <Typography variant="h6">Turnover</Typography>
                  <Typography variant="h4">$92,405</Typography>
                </Box>
                <Box className="card-item-icon">
                  <ShoppingCart />
                </Box>
              </Box>
              <Box className="card-item-body">
                <Box className="card-item-graph" id="turnover-graph"></Box>
                <Box className="card-item-period-change">
                  <Typography variant="subtitle1" className="period-change">
                    <ArrowDropUp />
                    5.39%
                  </Typography>
                  period of change
                </Box>
              </Box>
            </Box>
            <Box className="card-item">
              <Box className="card-item-header">
                <Box className="card-item-title">
                  <Typography variant="h6">Profit</Typography>
                  <Typography variant="h4">$32,218</Typography>
                </Box>
                <Box className="card-item-icon">
                  <AttachMoney />
                </Box>
              </Box>
              <Box className="card-item-body">
                <Box className="card-item-graph" id="profit-graph"></Box>
                <Box className="card-item-period-change">
                  <Typography variant="subtitle1" className="period-change">
                    <ArrowDropUp />
                    5.39%
                  </Typography>
                  period of change
                </Box>
              </Box>
            </Box>
            <Box className="card-item">
              <Box className="card-item-header">
                <Box className="card-item-title">
                  <Typography variant="h6">New Customer</Typography>
                  <Typography variant="h4">298</Typography>
                </Box>
                <Box className="card-item-icon">
                  <AccountCircle />
                </Box>
              </Box>
              <Box className="card-item-body">
                <Box className="card-item-graph" id="new-customer-graph"></Box>
                <Box className="card-item-period-change">
                  <Typography variant="subtitle1" className="period-change">
                    <ArrowDropUp />
                    5.39%
                  </Typography>
                  period of change
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="detailed-report">
          <Box className="detailed-report-header">
            <Typography variant="h5" className="title">
              <Description />
              Detailed Report
            </Typography>
            <Box className="detailed-report-filter-export">
              <IconButton className="filter">
                <FilterAlt />
              </IconButton>
              <Button className="export" startIcon={<Upgrade />}>
                Export
              </Button>
            </Box>
          </Box>
          <TableContainer className="detailed-report-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell>
                  {columnSettings.map((item) => (
                    <TableCell key={item.id}>{item.name}</TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                        // checked={rowCount > 0 && numSelected === rowCount}
                        // onChange={onSelectAllClick}
                        inputProps={{
                          "aria-label": "select all desserts",
                        }}
                      />
                    </TableCell>
                    {columnSettings.map((cell) => (
                      <TableCell key={row[cell.id as keyof ReportRow]}>
                        {cell.id !== "status" ? (
                          row[cell.id as keyof ReportRow]
                        ) : (
                          <Chip
                            label={row[cell.id as keyof ReportRow]}
                            className={row[cell.id as keyof ReportRow]
                              .toLowerCase()
                              .replace(/\s/g, "-")}
                          />
                        )}
                      </TableCell>
                    ))}
                    <TableCell align="right" width={5}>
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box className="detailed-report-footer">
              <Typography variant="subtitle1" className="footer-range">
                1 - 10 of 145
              </Typography>
              <Pagination count={10} className="pagination" />
            </Box>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
