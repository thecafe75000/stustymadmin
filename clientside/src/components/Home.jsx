import React, { useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { getStuListApi } from '../api/stuApi'
import Alert from './Alert'

function Home() {
  const[stuList,setStulist]=useState([]) //? 存储所有的数据
  const [searchItem, setSearchitem] = useState("") //? 存储用户输入的搜索信息
  const [message, setMessage] = useState(null)
  const [searchList, setSearchlist]=useState([]) //? 存储搜索后的数据

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

  const changeHandle = (e) => {
    setSearchitem(e.target.value)
    const arr = stuList.filter((item) => {
      return item.name.match(e.target.value)
    })
    setSearchlist(arr)
  }

  //? list 就是最终要显示的列表, list根据searchItem是否有值
  const list = searchItem ? searchList : stuList

  const trs = list.map((item, index) => {
    return (
      <tr key={index} >
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td><NavLink to={`/detail/${item.id}`}>Details</NavLink></td>
      </tr>
    )
  })

  const showAlert = message ? <Alert {...message} /> : null

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
