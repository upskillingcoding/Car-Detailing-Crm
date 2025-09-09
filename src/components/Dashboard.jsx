import { motion } from 'framer-motion';

const customers = [
  { name: 'John Doe', car: 'Tesla Model 3', date: '2025-09-01' },
  { name: 'Jane Smith', car: 'BMW X5', date: '2025-09-03' },
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">Welcome Back!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map((cust, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="text-lg font-medium">{cust.name}</h3>
            <p className="text-sm text-gray-500">{cust.car}</p>
            <p className="text-sm text-gray-400">{cust.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
