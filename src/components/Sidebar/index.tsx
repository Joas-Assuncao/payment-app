import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="customers"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <BsPersonFillGear />
              <span className="ml-3">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              to="invoices"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <FaFileInvoiceDollar />
              <span className="flex-1 ml-3 whitespace-nowrap">Invoices</span>
            </Link>
          </li>
          <li>
            <Link
              to="payments"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <MdOutlinePayments />
              <span className="flex-1 ml-3 whitespace-nowrap">Payments</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
