import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getStuByIdApi, deleteStuByIdApi } from '../api/stuApi'

/**
 * 学生详情组件
 * @returns 
 */
function Detail(props) {
  const [stu, setStu] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    education: 'Bachelor',
    graduationschool: '',
    profession: '',
    profile: ''
  })

  //? 获取动态参数传递过来的学生id
  const { id } = useParams()
  
  const navigate = useNavigate()
  
  //? 根据学生id获取学生的详细信息
  useEffect(() => {
    getStuByIdApi(id).then(({data}) => {
      setStu(data)
    })
  }, [id])
  

  const deleteStu = (id) => {
    if (window.confirm('Are you sure you to delete this student?')) {
      deleteStuByIdApi(id).then(() => {
        navigate('/home', {
          state: {
            message: 'Student deleted successfully',
            type:'info'
          }
        })
      })
    }
  }

  return (
     <div className="details container">
        <button className="btn btn-default" onClick={()=> navigate('/home')}>Go back</button>
        <h1 className="page-header">
            {stu.name}
            <span className="pull-right">
                <button className="btn btn-primary" onClick={() => navigate(`/edit/${stu.id}`)} style={{ marginRight: 10 }}>Modify</button>
                <button className="btn btn-danger" onClick={() => deleteStu(stu.id)}>Delete</button>
            </span>
        </h1>
        {/* 第一组 */}
        <ul className="list-group">
            <li className="list-group-item">
                <span className="glyphicon glyphicon-phone">PhoneNumber:{stu.phone}</span>
            </li>
            <li className="list-group-item">
                <span className="glyphicon glyphicon-envelope">Email:{stu.email}</span>
            </li>
        </ul>
        {/* 第二组 */}
        <ul className="list-group">
            <li className="list-group-item">
                <span className="glyphicon glyphicon-book">Education:{stu.education}</span>
            </li>
            <li className="list-group-item">
                <span className="glyphicon glyphicon-flag">GraduatedSchool:{stu.graduationschool}</span>
            </li>
            <li className="list-group-item">
                <span className="glyphicon glyphicon-briefcase">Profession:{stu.profession}</span>
            </li>
            <li className="list-group-item">
                <span className="glyphicon glyphicon-user">Profile:{stu.profile}</span>
            </li>
        </ul>
  </div>
  )
}

export default Detail