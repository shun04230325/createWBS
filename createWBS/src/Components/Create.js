import { Link } from "react-router-dom";
import { useWbs } from "../Hooks/use-context";

// 作成したWBSの表示を行う
const Create = () => {
    const { a,c } = useWbs();
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

            <table>
                <tr>
                    <th>大項目</th>
                    <th>小項目</th>
                    <th>工数</th>
                    <th>開始日付</th>
                    <th>終了日付</th>
                    <th>一日の工数</th>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>
                        <textarea id="comments" name="comments"></textarea>
                        <button>削除</button>
                    </td>
                    <td>
                        <textarea id="comments" name="comments"></textarea>
                        <button>削除</button>
                    </td>
                    <td>Data 3</td>
                </tr>
                <tr>
                    <td>Data 4</td>
                    <td>Data 5</td>
                    <td>Data 6</td>
                </tr>
                <tr>
                    <td>Data 7</td>
                    <td>Data 8</td>
                    <td>Data 9</td>
                </tr>
            </table>
        </>
    );
}

export default Create;
