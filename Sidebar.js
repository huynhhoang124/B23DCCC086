import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Trang chủ</Link></li>
        <li><Link to="/randomUser">Random User</Link></li>
        <li><Link to="/toDoList">ToDoList</Link></li>
        <li><Link to="/guessNumber">Guess Number</Link></li>
        <li><Link to="/oantuTi">Oan Tu Ti</Link></li>
        <li><Link to="/danhGiaDichVu">Danh Gia Dich Vu</Link></li>
        <li><Link to="/baoCao">Báo cáo và Thống kê</Link></li> {/* Thêm mục Báo cáo */}
      </ul>
    </div>
  );
};

export default Sidebar;
