import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../top.css';

const Top = (props) => {
    // ナビゲーション処理
    const navigate = useNavigate();
    const onClickNewCreatePage = () => {
        navigate('/create/');
    };

    const onClickProjetShowPage = () => {
        navigate('/show/');
    };

    return (
        <div className="top_content">
            <div className="title_block">
                <div className="title">WBS作成アプリ</div>
                <button onClick={onClickNewCreatePage} className="createBtn">
                    新規作成
                </button>
            </div>

            <div>
                {/* 作成したプロジェクトが入る */}
                <div onClick={onClickProjetShowPage}>作成したプロジェクト名</div>

                {/* 編集ボタン */}
                <button>編集</button>
                {/* 削除ボタン */}
                <button>削除</button>
            </div>
        </div>
    );
};

export default Top;
