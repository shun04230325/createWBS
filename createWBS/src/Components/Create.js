// 使用していない by：久保田
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// 作成したWBSの表示を行う
const Create = () => {
    const [tasks, setTasks] = useState([{ id: `task0` }]);
    const [smallTask, setSmallTask] = useState([{ id: `smallTask0` }]);

    const addBigTask = () => {
        const newTask = { id: `task ${tasks.length + 1}` };
        setTasks([...tasks, newTask]);
    };

    const removeBigTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const addSmallTask = () => {
        const newTask = { id: `smaalTask ${tasks.length + 1}` };
        setSmallTask([...smallTask, newTask]);
    };

    const removeSmallTask = (id) => {
        setSmallTask(smallTask.filter((task) => task.id !== id));
    };

    const BigTask = (props) => {
        return (
            <>
                <tr id={props.id}>
                    <input type="text" />

                    <div>
                        <button onClick={addBigTask}>増えます</button>
                        <button onClick={() => removeBigTask(props.id)}>
                            削除
                        </button>
                    </div>
                    <td>
                        {smallTask.map((task) => (
                            <SmallTask id={task.id} key={task.id} />
                        ))}
                    </td>
                    <td>
                        <WorkingTime />
                    </td>
                </tr>
            </>
        );
    };

    const SmallTask = (props) => {
        return (
            <div id={'task' + props.id}>
                <input type="text"></input>
                <button onClick={addSmallTask}>増える</button>
                <button onClick={() => removeSmallTask(props.id)}>削除</button>
            </div>
        );
    };

    const WorkingTime = () => {
        return (
            <>
                <input type="number"></input>
            </>
        );
    };
    return (
        <div className="App">
            <h1>WBS作成画面</h1>
            <h2>Sample HTML Table</h2>
            <Link to={`/show/`}>
                <button>作成した画面へ</button>
            </Link>

            <Link to={`/`}>
                <button>トップへ戻る</button>
            </Link>
            <div>
                <button onClick={addBigTask}>増えます</button>
            </div>

            <table>
                <tr>
                    <th>大項目</th>
                    <th>小項目</th>
                    <th>工数</th>
                </tr>
                {tasks.map((task) => (
                    <BigTask id={task.id} key={task.id} />
                ))}
            </table>
        </div>
    );
};

export default Create;
