import * as React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Drawer,
  Modal,
  Box,
  Typography,
  InputLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState, ListItem, ListItemText } from "react";
import TextField from "@mui/material/TextField";

function createData(firstname, lastname, gender) {
  return { firstname, lastname, gender };
}
const rows = [
  createData("archu", "achu", "female"),
  createData("achu", "archu", "female"),
];
const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "gender",
    headerName: "gender",
  },
];

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [lastname, setlastname] = useState("");
  const [radio, setRadio] = useState(false);
  const [value, setValue] = useState("");
  const [form, setForm] = useState([]);
  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => {
    const form1 = [...form];
    setForm([...form, textValue, lastname, value]);
    console.log(...form, textValue, lastname, value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit1 = () => {
    setForm(textValue, lastname, value);
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell>{row.firstname}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
            {form.map((form, index) => (
              <>
                <TableCell key={index}>
                  {form}

                  <Button onClick={() => setView(true)}>View</Button>
                </TableCell>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Drawer
        open={open}
        anchor={"right"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h3> Form</h3>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Paper>
          <TextField
            onChange={onTextChange}
            value={textValue}
            placeholder="firstname"
            required
          />
          <TextField
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="lastname"
            required
          />
          <Typography
            id="demo-radio-buttons-group-label"
            level="body3"
            textTransform="uppercase"
            fontWeight="xl"
            sx={{ letterSpacing: "0.15rem" }}
            mb={2}
          >
            Gender
          </Typography>
          <RadioGroup
            name="radio-buttons-group"
            onChange={handleChange}
            value={value}
            required
          >
            <InputLabel>
              Female <Radio value="female" label="Female" />
            </InputLabel>
            <InputLabel>
              Male <Radio value="male" label="Male" />
            </InputLabel>
          </RadioGroup>

          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={() => setForm([])}>Cancel</Button>
        </Paper>
      </Drawer>
      <Drawer
        open={view}
        anchor={"right"}
        onClose={() => setView(false)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h2>Edit</h2>
        <TableCell>{form}</TableCell>
        <Paper>
          <TextField
            onChange={onTextChange}
            value={textValue}
            placeholder="firstname"
            required
          />
          <TextField
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="lastname"
            required
          />
          <Typography
            id="demo-radio-buttons-group-label"
            level="body3"
            textTransform="uppercase"
            fontWeight="xl"
            sx={{ letterSpacing: "0.15rem" }}
            mb={2}
          >
            Gender
          </Typography>
          <RadioGroup
            name="radio-buttons-group"
            onChange={handleChange}
            value={value}
            required
          >
            <InputLabel>
              Female <Radio value="female" label="Female" />
            </InputLabel>
            <InputLabel>
              Male <Radio value="male" label="Male" />
            </InputLabel>
          </RadioGroup>

          <Button onClick={handleSubmit1}>Submit</Button>
        </Paper>
      </Drawer>
    </div>
  );
}
