import React from 'react';
import '../../app.css';
import { useWbs } from '../../Hooks/use-context';
import { ulid } from 'ulid';

export const WbsManager = () => {
    const { bigTasks, setBigTasks } = useWbs();

    // 大項目追加
    const addBigTask = () => {
        const newBigTask = {
            id: ulid(),
            date: '',
            subTasks: [
                {
                    id: ulid(),
                    date: '',
                },
            ],
        };
        setBigTasks([...bigTasks, newBigTask]);
    };

    // 大項目削除
    const deleteBigTask = (id) => {
        setBigTasks(bigTasks.filter((task) => task.id !== id));
    };

    // 小項目の作成
    const addSubTask = (bigTaskId) => {
        const newSubTask = { id: ulid(), date: '' };
        setBigTasks(
            bigTasks.map((task) =>
                task.id === bigTaskId
                    ? {
                          ...task,
                          subTasks: [...task.subTasks, newSubTask],
                      }
                    : task
            )
        );
    };

    // 小項目削除
    const deleteSubTask = (bigTaskId, subTaskId) => {
        setBigTasks(
            bigTasks.map((task) =>
                task.id === bigTaskId
                    ? {
                          ...task,
                          subTasks: task.subTasks.filter(
                              (subTask) => subTask.id !== subTaskId
                          ),
                      }
                    : task
            )
        );
    };

    // インプット入力処理
    const handleInputChange = (e, bigTaskId, subTaskId = null) => {
        const { date, value } = e.target;
        if (subTaskId) {
            setBigTasks(
                bigTasks.map((task) =>
                    task.id === bigTaskId
                        ? {
                              ...task,
                              subTasks: task.subTasks.map((subTask) =>
                                  subTask.id === subTaskId
                                      ? { ...subTask, date: value }
                                      : subTask
                              ),
                          }
                        : task
                )
            );
        } else {
            setBigTasks(
                bigTasks.map((task) =>
                    task.id === bigTaskId ? { ...task, date: value } : task
                )
            );
        }
    };

    return (
        <div>
            <h2>プロジェクトX</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            大項目
                            <button onClick={addBigTask}>大項目追加</button>
                        </th>
                        <th>小項目</th>
                        <th>工数</th>
                    </tr>
                </thead>

                {bigTasks.map((bigTask) => (
                    <tbody key={bigTask.id}>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="bigTask"
                                    value={bigTask.date}
                                    placeholder="大項目"
                                    onChange={(e) =>
                                        handleInputChange(e, bigTask.id)
                                    }
                                />
                                <button
                                    onClick={() => deleteBigTask(bigTask.id)}
                                >
                                    大項目削除
                                </button>
                            </td>
                            <td>
                                {bigTask.subTasks.map((subTask) => (
                                    <div>
                                        <input
                                            type="text"
                                            name="subTask"
                                            placeholder="小項目"
                                            value={subTask.date}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    bigTask.id,
                                                    subTask.id
                                                )
                                            }
                                        />
                                        <button
                                            onClick={() =>
                                                addSubTask(bigTask.id)
                                            }
                                        >
                                            小項目追加
                                        </button>
                                        <button
                                            onClick={() =>
                                                deleteSubTask(
                                                    bigTask.id,
                                                    subTask.id
                                                )
                                            }
                                        >
                                            小項目削除
                                        </button>
                                    </div>
                                ))}
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="workingTime"
                                    placeholder="工数"
                                />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};
