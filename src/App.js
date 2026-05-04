import { useState } from 'react';
import './App.css'; // CSSファイルを読み込む

function App() {
  // === JavaScriptの領域（データの状態や動きを定義する） ===

  // 「いいね」の数を管理する状態（初期値は0）
  const [count, setCount] = useState(0); 
  // 詳細テキストを表示するかどうかを管理する状態（初期値はfalse＝非表示）
  const [showDetail, setShowDetail] = useState(false); 

  // いいねボタンが押されたときの処理
  const handleLike = () => {
    setCount(count + 1);
  };

  // 詳細ボタンが押されたときの処理
  const toggleDetail = () => {
    setShowDetail(!showDetail); // trueとfalseを反転させる
  };

  // === HTML（JSX）の領域（画面の構造を定義する） ===
  return (
    <div className="card">
      <h1 className="title">プロフィール</h1>
      <p className="name">React 学習者さん</p>

      {/* ボタンをクリックしたときに、JavaScriptの処理を呼び出す */}
      <button className="action-button" onClick={handleLike}>
        👍 いいねa{count}
      </button>

      <button className="action-button" onClick={toggleDetail}>
        {showDetail ? '詳細を隠す' : '詳細を見る'}
      </button>

      {/* JavaScriptの条件分岐を使って、表示・非表示を切り替える */}
      {showDetail && (
        <div className="detail-box">
          <p>現在、Reactを使ってHTML、CSS、JavaScriptを楽しく学習中です！</p>
        </div>
      )}
    </div>
  );
}

export default App;