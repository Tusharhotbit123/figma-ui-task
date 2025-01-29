import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  transactionId: string,
  date: string,
  amount:number,
  status: string
) {
  return { transactionId, date, amount, status };
}

const rows = [
  createData('TXN001', '2025-01-25', 159.50, 'Completed'),
  createData('TXN002', '2025-01-26', 237.75, 'Pending'),
  createData('TXN003', '2025-01-27', 262.30, 'Failed'),
  createData('TXN004', '2025-01-28', 305.40, 'Completed'),
  createData('TXN005', '2025-01-29', 356.60, 'Pending'),
];

const TransactionTable = () => {


  return (
    <div className="h-full w-full px-4 pt-4  flex items-center justify-center">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="transaction table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount ($)</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.transactionId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.transactionId}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.amount.toFixed(2)}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
