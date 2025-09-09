import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white shadow-md p-4"
    >
      <h2 className="text-xl font-bold mb-4">Car Detailing CRM</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 p-2 rounded">Dashboard</li>
        <li className="hover:bg-gray-100 p-2 rounded">Customers</li>
        <li className="hover:bg-gray-100 p-2 rounded">Bookings</li>
        <li className="hover:bg-gray-100 p-2 rounded">Invoices</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
