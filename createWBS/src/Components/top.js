import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Top = (props) => {
    return (
      <div>
        <div>タイトル</div>
        <Link to = {`/create/`} >
          <button>新規作成ボタン</button>
        </Link>
        <div>
            <div>プロジェクト名</div>
            <div>ステータス</div>
            <div>作成日</div>
            <div>開始日</div>
            <div>終了日</div>
        </div>
            <div>
                {/* 作成したプロジェクトが入る */}
                <Link to = {`/show/`}>
                  <div>作成したプロジェクト名</div>
                </Link>
                {/* 編集ボタン */}
                <button>編集</button>
                {/* 削除ボタン */}
                <button>削除</button>
            </div>
      </div>
    );
}

export default Top;