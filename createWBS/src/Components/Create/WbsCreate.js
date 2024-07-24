import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WbsManager } from './WbsManager';

export const WbsCreate = () => {
    return (
        <div className="App">
            <h1>WBS作成画面</h1>
            <Link to={`/show/`}>
                <button>作成した画面へ</button>
            </Link>

            <Link to={`/`}>
                <button>トップへ戻る</button>
            </Link>

            <WbsManager />
        </div>
    );
};
