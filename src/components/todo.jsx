import React, { useState ,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const todo = () => {
  let [item, setItem] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      // ✅ Default array for first-time users
      return [
        { id: 1, label: "html,css", checked: false },
        { id: 2, label: "React", checked: true },
        { id: 3, label: "JavaScript", checked: false },
      ];
    }
  });
  
  let [currenteEle, setCurrentEle] = useState(null);
  let [newItem, setNewItem] = useState("");
  let [isEdit, setIsEdit] = useState(false);
  

  // ✅ Save items to localStorage whenever 'item' changes
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(item));
  }, [item]);
  let handleClick = (id) => {
    setIsEdit(true);
    setCurrentEle(id);
    let curItems = item.find((items) => items.id === id);
    setNewItem(curItems.label);
  };
  let handleChange = () => {
    if (newItem.trim() === "") {
      alert("Please enter something before adding.");
      return; // ✅ Stop function if input is empty or only spaces
    }
  
    if (isEdit) {
      let newlistItem = item.map((items) => {
        return items.id === currenteEle ? { ...items, label: newItem } : items;
      });
      setItem(newlistItem);
      setNewItem("");
      setCurrentEle(null);
      setIsEdit(false);
    } else {
      setItem([
        ...item,
        {
          id: item.length + 1,
          label: newItem,
          checked: false,
        },
      ]);

      setNewItem("");
    }
  };
  let handleDelete = (id) => {
    let newItems = item.filter((items) => items.id !== id);
    setItem(newItems);
  };
  let handleChecked = (id) => {
    let newCheckedItem = item.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItem(newCheckedItem);
  };

  return (
    <Container className="d-flex flex-column p-5">
      <div className="mb-1" style={{ maxWidth: "500px" }}>
        <input
          placeholder="add something"
          className="mb-3 w-100"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        ></input>
      </div>
      <div className="mb-3" style={{ maxWidth: "200px" }}>
        <Button className="w-100" onClick={handleChange}>
          {isEdit ? "SAVE" : "ADD"}
        </Button>
      </div>

      <ul>
        {item.map((items) => {
          return (
            <li key={items.id} className="m-2">
              <Container>
                <Row className="align-items-center ">
                  <Col
                    xs={12}
                    sm={3}
                    lg={1}
                    className="d-flex align-items-center"
                  >
                    <input
                      type="checkbox"
                      className="me-2"
                      checked={items.checked}
                      onChange={() => {
                        handleChecked(items.id);
                      }}
                    />

                    <label className="me-2">{items.label}</label>
                  </Col>

                  <Col xs={12} sm={3} className="d-flex align-items-center">
                    <Button
                      variant="secondary"
                      className="me-2"
                      onClick={() => handleClick(items.id)}
                    >
                      edit{" "}
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(items.id);
                      }}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              </Container>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default todo;
