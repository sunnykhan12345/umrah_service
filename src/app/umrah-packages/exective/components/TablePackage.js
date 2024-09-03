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
        <TableRow className="bg-gray-500 text-white">
          <TableHead className="text-center w-[100px]">Makkah</TableHead>
          <TableHead className="text-center border-r-2 border-l-2">Madinah</TableHead>
          <TableHead className="text-center">Total Nights</TableHead>
          <TableHead className="border-r-2 border-l-2 text-center">Double</TableHead>
          <TableHead className=" text-center">Triple</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2">
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="hover:bg-gray-100 transition-colors duration-200 ease-in-out "
          >
            <TableCell className="font-medium border-2">{invoice.invoice}</TableCell>
            <TableCell className="border-2 text-center">{invoice.paymentStatus}</TableCell>
            <TableCell className="border-2 text-center">{invoice.paymentMethod}</TableCell>
            <TableCell className="border-2 text-center">{invoice.paymentMethod}</TableCell>
            <TableCell className=" border-2 text-center">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* Optional footer content can be added here */}
      </TableFooter>
    </Table>
  );
}
