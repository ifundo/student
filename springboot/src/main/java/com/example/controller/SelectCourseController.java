package com.example.controller;

import com.example.common.Result;
import com.example.entity.Course;
import com.example.entity.SelectCourse;
import com.example.service.SelectCourseService;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.events.Event;

import javax.annotation.Resource;

@RestController
@RequestMapping("/selectcourse")
public class SelectCourseController {

    @Resource
    private SelectCourseService selectCourseService;

    @GetMapping("/selectPage")
    public Result selectPage(@RequestParam(defaultValue = "1") Integer pageNum,
                             @RequestParam(defaultValue = "5") Integer pageSize,
                             SelectCourse selectCourse){
        System.out.println("selectCourse = " + selectCourse);
        PageInfo<SelectCourse> pageInfo = selectCourseService.selectPage(pageNum, pageSize, selectCourse);
        return Result.success(pageInfo);
    }

    @PostMapping("/add")
    public Result SelectCourse(@RequestBody SelectCourse studentCourse){
        selectCourseService.addSelectCourse(studentCourse);
        return Result.success();
    }

    @DeleteMapping("/deleteCourse/{courseId}")
    public Result DeleteCourse(@PathVariable Integer courseId){
        selectCourseService.deleteCourse(courseId);
        return Result.success();
    }
}
