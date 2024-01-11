import React, { useEffect, useState } from 'react'
import { getStuListApi } from '../api/stuApi'

function Home() {
  const[stuList,setStulist]=useState([])
  const[searchItem,setSearchitem]=useState([])

  //! 注意：useEffect需要添加依赖项为空数组，代表它没有任何依赖，只执行一次
  useEffect(() => {
    getStuListApi().then(({data}) => {
      setStulist(data)
    })
  },[])

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

  return (
    <div>
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
