import { Link } from "react-router-dom";

const Show = () => {
  return (
    <>
      <h2>Sample HTML Table</h2>
      <Link to = { `/create` }>
        <button>作成画面へ</button>
      </Link>

      <Link to = { `/` }>
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
              <td>
                Data 1
              </td>
              <td>
                Data 1
              </td>
              <td>
                Data 1
              </td>
              <td>
                Data 1
              </td>
              <td>
                Data 1
              </td>
              <td>
                Data 1
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

export default Show;