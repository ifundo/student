package com.example.controller;

import com.example.common.Result;
import com.example.entity.Course;
import com.example.service.CourseService;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/course")
public class CourseController {

    @Resource
    private CourseService courseService;

    @GetMapping("/selectPage")
    public Result selectPage(@RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "5") Integer pageSize,
                             Course course){
        PageInfo<Course> pageInfo = courseService.selectPage(pageNum, pageSize, course);
        return Result.success(pageInfo);
    }

    @PostMapping("/addCourse")
    public Result addCourse(@RequestBody Course course){
        courseService.addCourse(course);
        return Result.success();
    }

    @PutMapping("/updateCourseById")
    public Result updateCourse(@RequestBody Course course){
        courseService.updateCourseById(course);
        return Result.success();
    }
    @DeleteMapping("/deleteCourseById/{id}")
    public Result deleteCourse(@PathVariable Integer id){
        courseService.deleteCourseById(id);
        return Result.success();
    }

}
