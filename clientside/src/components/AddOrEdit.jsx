import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addStuApi, getStuByIdApi, editStuByIdApi } from '../api/stuApi'


/**
 * 该组件有2个功能，一个是给列表添加学生，另一个是修改学生信息
 * @returns 
 */
function AddOrEdit() {
  // 创建表单状态, 让表单是一个受控的，对象的初始化字段参考json-server提供的数据源
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

  const navigate = useNavigate()

  //? 后期根据是否有id来决定是添加还是修改学生列表
  //? 因为如果是新增学生，没有id, 修改学生信息才有id
  const { id } = useParams()

  useEffect(() => {
    //? 如果有id，需要根据id获取学生修改后的详细信息，并且回填到表单里面
    if (id) {
      getStuByIdApi(id).then(({ data }) => {
        setStu(data)
      })
    }
  }, [id])

  const updateStuInfo = (newInfo, key) => {
    // 根据对应的key来添加信息
    if ((key === 'age' || key === 'phone') && isNaN(newInfo)) {
      return
    }

    const newStuInfo = { ...stu }
    newStuInfo[key] = newInfo.trim()
    setStu(newStuInfo)
  }

  const submitStuInfo = (e) => {
    e.preventDefault()

    for (const key in stu) {
      if (!stu[key]) {
        alert('Please finish your form completely')
        return
      }
    }

    if (id) {
      // 编辑修改学生的信息
      editStuByIdApi(id, stu).then(() => {
        navigate('/home', {
          state: {
            message: 'Student modified successfully',
            type: 'info'
          }
        })
      })
    } else {
      // 发送请求
      addStuApi(stu).then(() => {
        //? 这里要回到首页Home，需要做跳转，使用useNavigate来实现跳转(编程式导航)
        //? navigate对象携带的state数据会传递给首页Home,
        //? 页面Home通过useLocation 获取 location 对象，然后从中提取 state 数据(参看Home组件)
        navigate('/home', {
          state: {
            message: 'Student added successfully',
            type: 'success'
          }
        })
      })
    }
  }

  return (
    <div className='container'>
      {/* 标题 */}
      <h1 className='page-header'>{id ? 'Modify student' : 'Add student'}</h1>
      <form id='myForm' onSubmit={submitStuInfo}>
        <div className='well'>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='your name'
              value={stu.name}
              onChange={(e) => updateStuInfo(e.target.value, 'name')}
            />
          </div>
          <div className='form-group'>
            <label>Age</label>
            <input
              type='text'
              className='form-control'
              placeholder='your age'
              value={stu.age}
              onChange={(e) => updateStuInfo(e.target.value, 'age')}
            />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input
              type='text'
              className='form-control'
              placeholder='your phone number'
              value={stu.phone}
              onChange={(e) => updateStuInfo(e.target.value, 'phone')}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder='your email'
              value={stu.email}
              onChange={(e) => updateStuInfo(e.target.value, 'email')}
            />
          </div>
          <div className='form-group'>
            <label>Educational qualification</label>
            <select
              className='form-control'
              value={stu.education}
              onChange={(e) => updateStuInfo(e.target.value, 'education')}
            >
              <option>Primary school</option>
              <option>Junior high school</option>
              <option>Hign school</option>
              <option>Specialist qualification</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>PhD</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Graduated school</label>
            <input
              type='text'
              className='form-control'
              placeholder='your graduated school'
              value={stu.graduationschool}
              onChange={(e) =>
                updateStuInfo(e.target.value, 'graduationschool')
              }
            />
          </div>
          <div className='form-group'>
            <label>Profession</label>
            <input
              type='text'
              className='form-control'
              placeholder='your related occupation'
              value={stu.profession}
              onChange={(e) => updateStuInfo(e.target.value, 'profession')}
            />
          </div>
          <div className='form-group'>
            <label>Personal profile</label>
            <textarea
              className='form-control'
              rows='10'
              placeholder='brif self-introduction, including interests,hobbies...'
              value={stu.profile}
              onChange={(e) => updateStuInfo(e.target.value, 'profile')}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            {id ? 'Confirm modification' : 'Confirm add'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddOrEdit
