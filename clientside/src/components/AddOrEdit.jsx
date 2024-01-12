import React from 'react'

/**
 * 该组件有2个功能，一个是给列表添加学生，另一个是修改学生信息
 * @returns 
 */
function AddOrEdit() {
  return (
    <div className='container'>
      {/* 标题 */}
      <h1 className='page-header'>Add user</h1>
      <form id='myForm'>
        <div className='well'>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='your name'
            />
          </div>
          <div className='form-group'>
            <label>Age</label>
            <input
              type='text'
              className='form-control'
              placeholder='your age'
            />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input
              type='text'
              className='form-control'
              placeholder='your phone number'
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder='your email'
            />
          </div>
          <div className='form-group'>
            <label>Educational qualification</label>
            <select className='form-control'>
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
            />
          </div>
          <div className='form-group'>
            <label>Profession</label>
            <input
              type='text'
              className='form-control'
              placeholder='your related occupation'
            />
          </div>
          <div className='form-group'>
            <label>Personal profile</label>
            <textarea
              className='form-control'
              rows='10'
              placeholder='brif self-introduction, including interests,hobbies...'
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Add/modify
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddOrEdit
