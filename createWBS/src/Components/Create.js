import { Link } from "react-router-dom";
import { useWbs } from "../Hooks/use-context";
import { useState } from "react";

// 作成したWBSの表示を行う
const Create = () => {
    const { a, c } = useWbs();
    const [taskId, setTaskId] = useState(0);
    const [tasks, setTasks] = useState([0]);

    const addTasks = () => {
        setTasks([...tasks, taskId + 1]);
        setTaskId(taskId+1);
    };
    const removeElement =(elementId)=> { 
        let indexToRemove = tasks.indexOf(elementId+1);
    
    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove, 1);
    }
        // 指定されたIDを持つ要素を取得
        var element = document.getElementById("task"+elementId);
        // 要素が存在する場合、削除
        if (element) {
            element.parentNode.removeChild(element);
        }
    }
    const BigTask = (props) => {

        return (
            <>
                <tr id={"task"+props.id}>
                    <input type="text" />
                    
                    <div>
                        <button button onClick={() =>removeElement(props.id)}>削除</button>
                    </div>
                    <td>

                        <SmallTask />
                        <SmallTask />
                        <SmallTask />
                        <SmallTask />

                    </td>
                    <td>
                        <WorkingTime />
                    </td>
                </tr>
            </>
        )
    }

    const SmallTask = () => {
        return (
            <div>
                <input type="text"></input>
                <button>削除</button>
            </div>
        )
    }

    const WorkingTime = () => {
        return (
            <>
                <input type="number"></input>
            </>
        )
    }

    return (
        <>
            <h1>WBS作成画面</h1>
            <h2>Sample HTML Table</h2>
            <Link to={`/show/`}>
                <button>作成した画面へ</button>
            </Link>

            <Link to={`/`}>
                <button>トップへ戻る</button>
            </Link>
            <div>
                        <button onClick={addTasks}>増えます</button>
                    </div>

            <table>
                <tr>
                    <th>大項目</th>
                    <th>小項目</th>
                    <th>工数</th>

                </tr>
                {tasks.map((task, index) => (
          <> <BigTask id={task} /></>
        ))}
               

            </table>
        </>
    );
}

export default Create;
