import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TablePackage() {
  return (
    <Table className="min-w-full">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600  text-white">
          <TableHead className="text-center w-[100px] border-r border-white">
            Makkah
          </TableHead>
          <TableHead className="text-center">Madinah</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2">
        {invoices.map((invoice, index) => (
          <TableRow
            key={invoice.invoice}
            className={`${
              index % 2 === 1 ? "bg-gray-100" : ""
            } hover:bg-gray-200 transition-colors duration-200 ease-in-out`}
          >
            <TableCell className="font-medium border-r border-gray-300">
              {invoice.invoice}
            </TableCell>
            <TableCell className="text-center">
              {invoice.paymentStatus}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* Optional footer content can be added here */}
      </TableFooter>
    </Table>
  );
}
