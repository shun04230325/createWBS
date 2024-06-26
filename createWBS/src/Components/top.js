import { useEffect, useState } from "react";

const Top = (props) => {
    return (
      <div>
        <div>WBS作成アプリ</div>
        <button>新規作成ボタン</button>
        <div>
            <div>プロジェクト名</div>
            <div>ステータス</div>
            <div>作成日</div>
        </div>
            <div>
                {/* 作成したプロジェクトが入る */}
                <div>プロジェクトｘ</div>
                {/* 編集ボタン */}
                <button>編集</button>
                {/* 削除ボタン */}
                <button>削除</button>
            </div>
      </div>
    );
}

export default Top;