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
    invoice: "7 night",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "10 night",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "14 night",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "21 night",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

export function FourStar_Table() {
  return (
    <Table className="min-w-full">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-400 text-white">
          <TableHead className="border-r-2 border-l-2 text-center w-[100px] capitalize">
            double
          </TableHead>
          <TableHead className="border-r-2 border-l-2 text-center w-[100px] capitalize">
            double
          </TableHead>
          <TableHead className="text-center capitalize border-r-2 border-l-2">
            triple
          </TableHead>
          <TableHead className="text-center capitalize">quad</TableHead>
          <TableHead className="border-r-2 border-l-2 text-center capitalize">
            sharing
          </TableHead>
          <TableHead className="text-center capitalize">quant</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2">
        {invoices.map((invoice, index) => (
          <TableRow
            key={invoice.invoice}
            className={`hover:bg-gray-100 transition-colors duration-200 ease-in-out ${
              index === 1 ? "bg-gray-100" : "" // Apply light gray background to the second row
            }`}
          >
            <TableCell className="font-medium border capitalize">
              {invoice.invoice}
            </TableCell>
            <TableCell className="border capitalize">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="border-2 text-center">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="border-2 text-center ">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="border-2 text-center">
              {invoice.totalAmount}
            </TableCell>
            <TableCell className="border-2 text-center">
              {invoice.totalAmount}
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
