import { useEffect, useState } from "react";
import { Form, Table, Button, Badge } from "react-bootstrap";
import fetchTodos from "../../data/todosdata";

const Todos = () => {
    const [todosRaw, setTodosRaw] = useState([]);
    const [todos, setTodos] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [onlyWaiting, setOnlyWaiting] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [numPages, setNumPages] = useState(1);

    useEffect(() => {
        const data = fetchTodos();
        setTodosRaw(data);
    }, []);

    useEffect(() => {
        const totalItems = onlyWaiting
            ? todosRaw.filter(todo => !todo.completed).length
            : todosRaw.length;
        setNumPages(Math.ceil(totalItems / itemsPerPage));
    }, [todosRaw, onlyWaiting, itemsPerPage]);

    useEffect(() => {
        const filteredTodos = onlyWaiting
            ? todosRaw.filter(todo => !todo.completed)
            : todosRaw;
        const startIndex = (currPage - 1) * itemsPerPage;
        const paginatedTodos = filteredTodos.slice(startIndex, startIndex + itemsPerPage);
        setTodos(paginatedTodos);
    }, [todosRaw, onlyWaiting, currPage, itemsPerPage]);

    return (
        <>
            <hr />
            <Form>
                <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                    <div className="d-flex align-middle align-items-center border-0">
                        <Form.Check
                            type={'switch'}
                            label={'Show only waiting'}
                            id={'waitingSwitch'}
                            onChange={(e) => setOnlyWaiting(e.target.checked)}
                        />
                        <Button variant="warning" className="w-auto h-auto border-0 ms-3 opacity-100" disabled>Waiting <i className="bi bi-clock-history"></i>
                        </Button>
                    </div>
                    <Form.Select aria-label="Default select example" style={{ width: 'fit-content' }} onChange={(e) => { setItemsPerPage(Number(e.target.value)) }}>
                        <option value="5">5 items per page</option>
                        <option value="10">10 items per page</option>
                        <option value="50">50 items per page</option>
                        <option value="100">100 items per page</option>
                    </Form.Select>
                </div>
            </Form >
            <div>
                <Table striped>
                    <thead className="text-center table-dark align-items-center align-middle">
                        <tr>
                            <th style={{ width: '3rem' }}>ID</th>
                            <th>Title</th>
                            <th style={{ width: '10rem' }}>Completed</th>
                            <th style={{ width: '3rem' }} className="fs-3"><i className="bi bi-arrow-down-square-fill"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td className="text-center"><Badge bg="secondary">{todo.id}</Badge></td>
                                    <td className="text-start">{todo.title}</td>
                                    <td className="text-center">
                                        <Button
                                            variant={todo.completed ? "success" : "warning"}
                                            className="border-0"
                                            style={{ height: 'fit-content' }}
                                        >
                                            {todo.completed ? "Completed " : "Waiting "}
                                            {todo.completed ? (
                                                <i className="bi bi-check"></i>
                                            ) : (
                                                <i className="bi bi-clock-history"></i>
                                            )}
                                        </Button>
                                    </td>
                                    <td className="text-center"><Button variant="danger" className="border-0" style={{ height: 'fit-content' }}><i className="bi bi-trash-fill"></i></Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-center align-items-center m-auto" style={{ width: 'fit-content', height: 'fit-content' }}>
                <Button variant="primary" className="mx-2 h-auto" onClick={() => setCurrPage(1)} disabled={currPage === 1}>First</Button>
                <Button variant="primary" className="mx-2 h-auto" onClick={() => setCurrPage(p => Math.max(p - 1, 1))} disabled={currPage === 1}>Previous</Button>
                <span className="mx-2 h-auto">{currPage}</span>
                <span className="mx-2 h-auto">/</span>
                <span className="mx-2 h-auto">{numPages}</span>
                <Button variant="primary" className="mx-2 h-auto" onClick={() => setCurrPage(p => Math.min(p + 1, numPages))} disabled={currPage === numPages}>Next</Button>
                <Button variant="primary" className="mx-2 h-auto" onClick={() => setCurrPage(numPages)} disabled={currPage === numPages}>Last</Button>
            </div>
        </>
    );
};

export default Todos;
