import { useState, ListItem, ListItemText, Button } from "react";
const data = [{ name: "Calories" }, { name: "fat" }];
function Drawer() {
  const [open, setOpen] = useState(false);
  const getList = () => (
    <div style={{ width: 250 }}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add</Button>
      <Drawer
        open={open}
        anchor={"right"}
        onClose={() => setOpen(false)}
        style={{ width: 250 }}
      >
        {getList}
      </Drawer>
    </>
  );
}
export default Drawer;
