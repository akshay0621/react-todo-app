import React, { useState } from 'react';
import { Button, Form, ListGroup, Container } from 'react-bootstrap';
import './Todo.css';

function Todo() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 0) {
        setItems([...items, { id: Date.now(), text }]);
        setText('');
        }
    };

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <Container className='content'>
        <h1 className="my-4">TODO App</h1>
        <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group controlId="formTodo">
            <Form.Label>Add a new todo item:</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter todo item"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            </Form.Group>
            <Button className="primary" variant="primary" type="submit">
            Add Item
            </Button>
        </Form>
        <ListGroup>
            {items.map((item) => (
            <div className="task">
                <ListGroup.Item key={item.id}>
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></input>
                    {item.text}
                    <Button className="danger" variant="outline-danger" onClick={() => handleDelete(item.id)}>
                    Delete
                    </Button>
                </ListGroup.Item>
            </div>
            ))}
        </ListGroup>
        </Container>
    );
}

export default Todo;
