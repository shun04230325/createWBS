import { useNavigate } from 'react-router-dom'
import { useWbs } from '../Hooks/use-context'
import '../top.css'

const Top = (props) => {
  const { b, d } = useWbs()
  // ナビゲーション処理
  const navigate = useNavigate()
  const onClickNewCreatePage = () => {
    navigate('/create/')
  }

  const onClickProjetShowPage = () => {
    navigate('/show/')
  }

  return (
    <div className="top_content">
      <div className="title_block">
        <div className="title">WBS作成アプリ</div>
        <button onClick={onClickNewCreatePage} className="createBtn">
          新規作成
        </button>
      </div>

      <div className="top_main_content">
        {/* 作成したプロジェクトが入る */}
        <div className="">
          <div className="flex_wrapper width-60">
            <div className="content_title list_name">プロジェクト一覧</div>
            <div className="content_title list_name margin-left-l">作成日</div>
          </div>

          <div className="flex_wrapper width-100">
            <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>
            <div>2024/07/15</div>
            <div className="">
              {/* 編集ボタン */}
              <button className="top_edit_delete_btn">編集</button>
              {/* 削除ボタン */}
              <button className="top_edit_delete_btn margin-left">削除</button>
            </div>
          </div>
          {/* 以下、ループしてプロジェクト分出てくるようにする */}

          <div className="flex_wrapper width-100">
            <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>
            <div>2024/07/16</div>
            <div className="">
              {/* 編集ボタン */}
              <button className="top_edit_delete_btn">編集</button>
              {/* 削除ボタン */}
              <button className="top_edit_delete_btn margin-left">削除</button>
            </div>
          </div>

          <div className="flex_wrapper width-100">
            <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>
            <div>2024/07/17</div>
            <div className="">
              {/* 編集ボタン */}
              <button className="top_edit_delete_btn">編集</button>
              {/* 削除ボタン */}
              <button className="top_edit_delete_btn margin-left">削除</button>
            </div>
          </div>

          <div className="flex_wrapper width-100">
            <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>
            <div>2024/07/18</div>
            <div className="">
              {/* 編集ボタン */}
              <button className="top_edit_delete_btn">編集</button>
              {/* 削除ボタン */}
              <button className="top_edit_delete_btn margin-left">削除</button>
            </div>
          </div>

          <div className="flex_wrapper width-100">
            <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>
            <div>2024/07/19</div>
            <div className="">
              {/* 編集ボタン */}
              <button className="top_edit_delete_btn">編集</button>
              {/* 削除ボタン */}
              <button className="top_edit_delete_btn margin-left">削除</button>
            </div>
          </div>
          {/* モック終了 */}
        </div>
      </div>
    </div>
  )
}

export default Top
