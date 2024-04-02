package com.example.service;

import cn.hutool.core.util.ObjectUtil;
import com.example.common.RoleEnum;
import com.example.entity.Account;
import com.example.entity.Student;
import com.example.exception.CustomException;
import com.example.mapper.StudentMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class StudentService {
    @Resource
    private StudentMapper studentMapper;
    public Account login(Account account){
        Account dbStudent = studentMapper.selectByUsername(account.getUsername());
        if (dbStudent == null){
            throw new CustomException("该用户不存在");
        }
        if (!account.getPassword().equals(dbStudent.getPassword())){
            throw new CustomException("密码错误");
        }
        return dbStudent;
    }

    public void register(Account account) {
        Student student = new Student();
        student.setUsername(account.getUsername());
        student.setPassword(account.getPassword());
        this.addStudent(student);
    }

    public void addStudent(Student student) {
        Student dbStudent = studentMapper.selectByUsername(student.getUsername());
        if (dbStudent != null){
            throw new CustomException("账号已存在");
        }
        student.setName(RoleEnum.STUDENT.name());
        student.setRole(RoleEnum.STUDENT.name());
        studentMapper.register(student);
    }

    public void deleteStudentById(Integer id) {
        studentMapper.deleteStudentById(id);
    }

    public void updateStudentById(Student student) {
        studentMapper.updateStudentById(student);
    }

    public PageInfo<Student> selectPage(Integer pageNum, Integer pageSize, Student student) {
        PageHelper.startPage(pageNum, pageSize);
        List<Student> studentList = studentMapper.selectAll(student);
        return PageInfo.of(studentList);
    }

    public void selectStudentByUsername(String username) {
        studentMapper.selectStudentByUsername(username);
    }
}
