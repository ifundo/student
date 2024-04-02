package com.example.controller;

import com.example.common.Result;
import com.example.entity.Student;
import com.example.service.StudentService;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/student")
public class StudentController{

    @Resource
    private StudentService studentService;

    @GetMapping("/selectPage")
    public Result selectPage(@RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "5") Integer pageSize,
                             Student student){
        System.out.println("pageNum = " + pageNum);
        System.out.println("pageNum = " + pageNum);
        System.out.println("student = " + student);
        PageInfo<Student> pageInfo = studentService.selectPage(pageNum, pageSize, student);
        return Result.success(pageInfo);
    }

    @PostMapping("/addStudent")
    public Result addStudent(@RequestBody Student student){
        studentService.addStudent(student);
        return Result.success();
    }

    @DeleteMapping("/deleteStudentById/{id}")
    public Result deleteStudent(@PathVariable Integer id){
        studentService.deleteStudentById(id);
        return Result.success();
    }

    @PutMapping("/updateStudentById")
    public Result updateStudent(@RequestBody Student student){
        studentService.updateStudentById(student);
        return Result.success();
    }
    @GetMapping("/selectStudent")
    public Result selectStudent(@PathVariable String username){
        studentService.selectStudentByUsername(username);
        return Result.success();
    }


}
