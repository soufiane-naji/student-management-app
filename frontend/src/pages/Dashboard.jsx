import { FaGraduationCap, FaUser, FaUsers } from "react-icons/fa";
import useStudents from "../hooks/useStudents";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

const Dashboard = () => {
  const { state } = useStudents();
  let nombreStudents = state.students.length;

  let nombreFilieres = [
    ...new Set(state.students.map((student) => student.filiere)),
  ].length;

  let lastUserName =
    state.students[nombreStudents - 1]?.name || "No students yet";

  const data = Object.values(
    state.students.reduce((acc, student) => {
      const filiere = student.filiere;

      if (!acc[filiere]) {
        acc[filiere] = { name: filiere, count: 0 };
      }

      acc[filiere].count += 1;

      return acc;
    }, {})
  );

  return (
      <div className="dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>

            <p className="dashboard-subtitle">Welcome back 👋</p>
          </div>
        </div>

        {/* Stats */}
        <div className="dashboard-grid">
          <motion.div
            className="dashboard-card blue"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
          >
            <div className="card-top">
              <FaUsers color="#3b82f6" className="dashboard-icon" />
              <span className="badge">+{nombreStudents}</span>
            </div>

            <h3>Total Students</h3>

            <h2>{nombreStudents}</h2>
          </motion.div>

          <motion.div
            className="dashboard-card green"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
            }}
          >
            <div className="card-top">
              <FaGraduationCap color="#22c55e" className="dashboard-icon" />
              <span className="badge">{nombreFilieres}</span>
            </div>

            <h3>Total Filieres</h3>

            <h2>{nombreFilieres}</h2>
          </motion.div>

          <motion.div
            className="dashboard-card orange"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="card-top">
              <FaUser color="#f59e0b" className="dashboard-icon" />
            </div>

            <h3>Last Student</h3>

            <h2>{lastUserName}</h2>
          </motion.div>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <div className="chart-header">
            <div>
              <h2>Students Per Filiere</h2>
              <p>Distribution of students by department</p>
            </div>

            <span className="chart-badge">{data.length} Filières</span>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis dataKey="name" tick={{ fontSize: 13 }} />

              <YAxis tick={{ fontSize: 13 }} />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                }}
              />

              <Bar dataKey="count" fill="#3b82f6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <div>
              <h2>Students Age Statistics</h2>
              <p>Average age distribution of students</p>
            </div>

            <span className="chart-badge">
              {state.students.length} Students
            </span>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={state.students}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis dataKey="name" tick={{ fontSize: 13 }} />

              <YAxis tick={{ fontSize: 13 }} />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                }}
              />

              <Bar dataKey="age" fill="#22c55e" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <div>
              <h2>Students Per Filiere</h2>
              <p>Students distribution by filiere</p>
            </div>

            <span className="chart-badge">{data.length} Filières</span>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={160}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    // <PageWrapper>
    // </PageWrapper>
  );
};

export default Dashboard;
