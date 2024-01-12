import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getStuListApi } from '../api/stuApi'
import Alert from './Alert'

function Home() {
  const[stuList,setStulist]=useState([])
  const [searchItem, setSearchitem] = useState([])
  const[message,setMessage] = useState(null)

  const location = useLocation()

  //! 注意：useEffect需要添加依赖项为空数组，代表它没有任何依赖，只执行一次
  useEffect(() => {
    getStuListApi().then(({data}) => {
      setStulist(data)
    })
  },[])

  
  //? 第2个useEffect,用来获取编程式导航跳转到 Home 组件时传递的state数据
  //? 通过useLocation()的对象location获取组件AddOrEdit里useNavigate()对象navigate传递的state数据
  useEffect(() => {
    if (location.state) {
      setMessage(location.state)
    }
  },[location])

  const changeHandle = () => {
    
  }

  const trs = stuList.map((item, index) => {
    return (
      <tr key={index} >
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>details</td>
      </tr>
    )
  })

  const showAlert = alert ? <Alert {...message} /> : null

  return (
    <div>
      {showAlert}
      <h1>Student List</h1>
      {/* 搜索框 */}
      <input
        type="text"
        placeholder='search'
        className="form-control"
        value={searchItem}
        onChange={changeHandle}
      />
      {/* 表格 */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  )
}

export default Home
